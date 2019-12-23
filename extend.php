<?php
use Flarum\Forum\Content\AssertRegistered;
use Illuminate\Contracts\Events\Dispatcher;
use XEngine\Signature\Validation\ValidateSignature;
use XEngine\Signature\Listener;
use XEngine\Signature\Model;
use Flarum\Extend;
use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface as Request;

return [
  (new Extend\Frontend('forum'))
  ->content(function (Document $document) {
      $document->head[] = '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.0/trumbowyg.js"></script>';
  }),

new Extend\Locales(__DIR__.'/locale'),
        
(new Extend\Frontend('forum'))
  ->js(__DIR__.'/js/dist/forum.js')
  ->css(__DIR__.'/less/signature.less')
  ->css(__DIR__.'/less/trumbowyg.less'),
  
(new Extend\Frontend('admin'))
  ->js(__DIR__.'/js/dist/admin.js'),
  
(new Extend\Routes('forum'))
  ->get('/settings/signature', 'settings.signature', AssertRegistered::class),
  
(new Extend\Routes('api'))
  ->post('/settings/signature/validate', 'settings.signature', ValidateSignature::class),

        function (Dispatcher $events) {
    $events->subscribe(Model\UserSignatureAttributes::class);
}
];