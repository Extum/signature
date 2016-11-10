<?php
use Illuminate\Contracts\Events\Dispatcher;
use XEngine\Signature\Listener;
use XEngine\Signature\Model;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddApplicationAssets::class);
    $events->subscribe(Model\UserSignatureAttributes::class);
};