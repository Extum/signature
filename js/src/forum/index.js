import {extend} from 'flarum/extend';
import app from 'flarum/app';
import SignatureSettings from './components/View/SignatureSettings';
import LinkButton from 'flarum/components/LinkButton';
import UserPage from 'flarum/components/UserPage';
import CommentPost from 'flarum/components/CommentPost';

app.initializers.add('Xengine-signature', () => {
    app.routes['settings.signature'] = {path: '/settings/signature', component: SignatureSettings.component()};
    extend(UserPage.prototype, 'navItems', function (dom) {
        dom.add('Signature',
            LinkButton.component({
                href: app.route('settings.signature'),
                text: app.translator.trans('katos-signature.forum.buttons.signature'),
                icon: 'fas fa-signature'
            }),
            -100);
    })

    extend(CommentPost.prototype, 'view', function (vnode) {
        const Signature = this.attrs.post.user().data.attributes.signature || false

        if (Signature) {
            vnode.children.push(m('div.SignatureWrapper', {},  m.trust(Signature)));
        }

        return vnode;
    });
});