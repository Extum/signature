import Modal from 'flarum/components/Modal';
import FieldSet from 'flarum/components/FieldSet';
import ItemList from 'flarum/utils/ItemList';

export default class SignatureLoadingModal extends Modal {
    init() {
        this.value = this.props.value;
        this.title = m.prop(this.props.title || '');
        this.close = this.props.close || false;
        this.errors = this.props.errors || false;
    }

    isDismissible() {
        return this.close;
    }

    className() {
        return 'LoadingModal Modal--small';
    }

    content() {
        let ErrorWindow = '';
        if (this.errors) {
            ErrorWindow = m("ul",
                this.errors.map(function (error) {
                    return m("li", error);
                })
            )
        }
        return (
            <div className="Modal-body">
                <p>{this.value}</p>
                {ErrorWindow}
            </div>
        );
    }

}