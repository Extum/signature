<?php
use Flarum\Forum\Content\AssertRegistered;
use Illuminate\Contracts\Events\Dispatcher;
use XEngine\Signature\Validation\ValidateSignature;
use XEngine\Signature\Model;
use Flarum\Extend;
use Flarum\Frontend\Document;
use FoF\Components\Extend\AddFofComponents;

return [
  new AddFofComponents(),

  (new Extend\Frontend('forum'))
  ->content(function (Document $document) {
      $document->head[] = '<script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script>window.jQuery || document.write(\'<script src="js/vendor/jquery-3.3.1.min.js"><\/script>\')</script><script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.4.0/trumbowyg.js"></script>';
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