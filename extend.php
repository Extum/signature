<?php
use Illuminate\Contracts\Events\Dispatcher;
use XEngine\Signature\Listener;
use XEngine\Signature\Model;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->route('/t/{slug}', 'tag')
        ->route('/tags', 'tags'),

        function (Dispatcher $events) {
    $events->subscribe(Listener\AddApplicationAssets::class);
    $events->subscribe(Model\UserSignatureAttributes::class);
};
    }
]

