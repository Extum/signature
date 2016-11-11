<?php
namespace XEngine\Signature\Listener;

use Flarum\Event\ConfigureWebApp;
use Flarum\Event\ConfigureForumRoutes;
use Flarum\Event\ConfigureApiRoutes;
use Illuminate\Contracts\Events\Dispatcher;
use XEngine\Signature\Validation\ValidateSignature;

class AddApplicationAssets
{

    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureWebApp::class, [$this, 'addAssets']);
        $events->listen(ConfigureForumRoutes::class, [$this, 'addRoutes']);
        $events->listen(ConfigureApiRoutes::class, [$this, 'addApiRoutes']);
    }

    public function addAssets(ConfigureWebApp $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__ . '/../../js/forum/dist/extension.js',
                __DIR__ . '/../../less/signature.less',
                __DIR__ . '/../../less/trumbowyg.less',
            ]);
            $event->addBootstrapper('xengine/signature/main');
        }
    }

    public function addRoutes(ConfigureForumRoutes $event)
    {
        $event->get('/settings/signature', 'settings.signature');
    }

    public function addApiRoutes(ConfigureApiRoutes $event)
    {
        $event->post('/settings/signature/validate', 'settings.signature', ValidateSignature::class);
    }
}