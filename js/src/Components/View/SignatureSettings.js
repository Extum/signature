import UserSignature from 'xengine/signature/Components/Model/UserSignature';
import UserPage from 'flarum/components/UserPage';
import listItems from 'flarum/helpers/listItems';
import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import SignatureTextarea from 'xengine/signature/Components/Fields/SignatureTextarea';
import SignatureLoadingModal from 'xengine/signature/Components/Modal/SignatureLoadingModal';

export default class SignatureSettings extends UserPage {
    init() {
        super.init();

        this.show(app.session.user);
        app.drawer.hide();
        app.modal.close();
        app.setTitle(app.translator.trans('core.forum.settings.title'));

        this.model = new UserSignature(app.session.user);
    }


    content() {
        return (
            <div className="SettingsPage">
                <ul>{listItems(this.signatureItems().toArray())}</ul>
            </div>
        )
    }

    /**
     * Build an item list for the user's settings controls.
     *
     * @return {ItemList}
     */
    signatureItems() {
        const items = new ItemList();

        items.add('signature',
            SignatureTextarea.component({
                className: 'Signature',
                rows: 10,
                cols: 100,
                content: this.model.getSignature()
            })
        );
        items.add('saveSignature',
            Button.component({
                children: app.translator.trans('xengine-signature.forum.buttons.save'),
                className: 'Button',
                onclick: () => this.saveSignature()
            })
        );

        return items;
    }

    saveSignature() {
        app.modal.show(new SignatureLoadingModal({
            title: app.translator.trans('xengine-signature.forum.modal.loading.title'),
            value: app.translator.trans('xengine-signature.forum.modal.loading.content')
        }));
        this.signature = $('.Signature').trumbowyg('html');

        const data = {Signature: this.signature};

        app.request({
            url: app.forum.attribute('apiUrl') + '/settings/signature/validate',
            method: 'POST',
            data: data
        }).then(
            this.response.bind(this)
        );
    }

    response(response) {
        if (!response.status) {
            app.modal.show(new SignatureLoadingModal({
                title: app.translator.trans('xengine-signature.forum.modal.error.title'),
                value: app.translator.trans('xengine-signature.forum.modal.error.content'),
                errors: response.errors,
                close: true
            }));
        }else{
            this.model.setSignature(this.signature).then(()=> {
                window.location.reload();
            })
        }
    }
}