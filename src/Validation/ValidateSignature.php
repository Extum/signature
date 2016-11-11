<?php
namespace XEngine\Signature\Validation;

use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Http\Controller\ControllerInterface;
use Zend\Diactoros\Response\JsonResponse;
use Symfony\Component\DomCrawler\Crawler;

class ValidateSignature implements ControllerInterface
{
    public function handle(ServerRequestInterface $request)
    {
        $signature = array_get($request->getParsedBody(), 'Signature');
        $sanitized = strip_tags($signature);
        $errorBag = [];

        if (strlen($sanitized) > 450) {
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
            if ($highestwidth > 460) {
                $errorBag[] = app('translator')->trans('xengine-signature.forum.errors.max_image_width_exceed');
            }
            if($highestheight > 350){
                $errorBag[] = app('translator')->trans('xengine-signature.forum.errors.max_image_height_exceed');
            }
            if($count > 5){
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