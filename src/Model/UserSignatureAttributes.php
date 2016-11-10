<?php
namespace XEngine\Signature\Model;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Event\PrepareApiAttributes;
use Flarum\Core\Access\AssertPermissionTrait;
use Flarum\Event\UserWillBeSaved;
use Illuminate\Contracts\Events\Dispatcher;
use Symfony\Component\DomCrawler\Crawler;

class UserSignatureAttributes
{
    use AssertPermissionTrait;

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PrepareApiAttributes::class, [$this, 'addApiAttributes']);
        $events->listen(UserWillBeSaved::class, [$this, 'whenUserWillBeSaved']);
    }

    /**
     * @param PrepareApiAttributes $event
     */
    public function addApiAttributes(PrepareApiAttributes $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['signature'] = $event->model->signature;
        }
    }

    /**
     * @param UserWillBeSaved $event
     */
    public function whenUserWillBeSaved(UserWillBeSaved $event)
    {
        $attributes = array_get($event->data, 'attributes', []);
        if (array_key_exists('signature', $attributes)) {
            $user = $event->user;
            $actor = $event->actor;
            if ($actor->id !== $user->id) {
                $this->assertPermission(
                    $this->elementsOnlyRemoved(
                        $user->signature,
                        $attributes['signature']
                    )
                );
                $this->assertCan($actor, 'edit', $user);
            }
            $user->signature = $attributes['signature'];
        }
    }
}