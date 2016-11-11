<?php
namespace XEngine\Signature\Validation;

use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Http\Controller\ControllerInterface;
use Zend\Diactoros\Response\JsonResponse;
use Symfony\Component\DomCrawler\Crawler;
use Flarum\Settings\SettingsRepositoryInterface;

class ValidateSignature implements ControllerInterface
{
    private $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function handle(ServerRequestInterface $request)
    {
        $signature = array_get($request->getParsedBody(), 'Signature');
        $sanitized = strip_tags($signature);
        $errorBag = [];

        $char_count = $this->settings->get('xengine-signature.maximum_char_limit') != "" ? $this->settings->get('xengine-signature.maximum_char_limit') : 1000;
        $max_width = $this->settings->get('xengine-signature.maximum_image_width') != "" ? $this->settings->get('xengine-signature.maximum_image_width') : 350;
        $max_height = $this->settings->get('xengine-signature.maximum_image_height') != "" ? $this->settings->get('xengine-signature.maximum_image_height') : 500;
        $image_count = $this->settings->get('xengine-signature.maximum_image_count') != "" ? $this->settings->get('xengine-signature.maximum_image_count') : 5;

        if (strlen($sanitized) > $char_count) {
            $errorBag[] = app('translator')->trans('xengine-signature.forum.errors.max_char_limit_exceed');
        }
        $crawler = (new Crawler($signature))->filter('img');
        $width = [];
        $height = [];
        $count = $crawler->count();
        if($count > 0) {
            $crawler->each(function ($image) use (&$width, &$height) {
                $imagesize = getimagesize($image->attr('src'));
                $width[] = $imagesize[0];
                $height[] = $imagesize[1];
            });
            $highestwidth = max(array_values($width));
            $highestheight = array_sum($height);
            if ($highestwidth > $max_width) {
                $errorBag[] = app('translator')->trans('xengine-signature.forum.errors.max_image_width_exceed');
            }
            if($highestheight > $max_height){
                $errorBag[] = app('translator')->trans('xengine-signature.forum.errors.max_image_height_exceed');
            }
            if($count > $image_count){
                $errorBag[] = app('translator')->trans('xengine-signature.forum.errors.max_image_count_exceed');
            }
        }
        if(count($errorBag) > 0){
            return new JsonResponse([
                'status' => false,
                'errors' => $errorBag,
            ]);
        }else{
            return new JsonResponse([
                'status' => true
            ]);
        }
    }
}