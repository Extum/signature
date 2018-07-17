import {extend} from 'flarum/extend';
import app from 'flarum/app';
import SignatureSettings from 'xengine/signature/Components/View/SignatureSettings';
import LinkButton from 'flarum/components/LinkButton';
import UserPage from 'flarum/components/UserPage';
import CommentPost from 'flarum/components/CommentPost';

app.initializers.add('xengine-signature', () => {
    app.routes['settings.signature'] = {path: '/settings/signature', component: SignatureSettings.component()};
    extend(UserPage.prototype, 'navItems', function (dom) {
        dom.add('Signature',
            LinkButton.component({
                href: app.route('settings.signature'),
                children: app.translator.trans('xengine-signature.forum.buttons.signature'),
                icon: 'fas fa-signature'
            }),
            -100);
    })

    extend(CommentPost.prototype, 'view', function (vdom) {
        const Signature = this.props.post.user().data.attributes.signature || false

        if (Signature) {
            vdom.children.push(m('div.SignatureWrapper', m.trust(Signature)));
        }
    });
});
