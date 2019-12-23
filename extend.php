<?php
use Illuminate\Contracts\Events\Dispatcher;
use XEngine\Signature\Listener;
use XEngine\Signature\Model;
use Flarum\Extend;

return [
new Extend\Locales(__DIR__.'/locale'),
(new Extend\Frontend('forum'))
  ->js(__DIR__.'/js/dist/forum.js')
  ->less(__DIR__.'/less/signature.less')
  ->less(__DIR__.'/less/trumbowyg.less'),
(new Extend\Frontend('admin'))
  ->js(__DIR__.'/js/dist/admin.js'),
(new Extend\Routes('forum'))
  ->get('/settings/signature', 'settings.signature'),
(new Extend\Routes('api'))
  ->post('/settings/signature/validate', 'settings.signature', ValidateSignature::class);

        function (Dispatcher $events) {
    $events->subscribe(Model\UserSignatureAttributes::class);
};
    }
]

