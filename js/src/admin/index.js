import { settings } from '@fof-components';
import app from 'flarum/app';

const {
    SettingsModal,
    items: { StringItem }
} = settings;


app.initializers.add('cxsquared/signature', () => {
    app.extensionSettings['cxsquared/signature'] = () => app.modal.show(SettingsModal, {
        tite: app.translator.trans('Xengine-signature.admin.title'),
        items: (s) => [
            <div className="Forum-group">
                <StringItem name="Xengine-signature.maximum_image_width"
                            setting={s}
                            label={app.translator.trans('Xengine-signature.settings.maximum_image_width.description')} />
                <StringItem name="Xengine-signature.maximum_image_height" setting={s} />
                <StringItem name="Xengine-signature.maximum_image_count" setting={s} />
                <StringItem name="Xengine-signature.maximum_image_char_limit" setting={s} />
            </div>
        ]
    });
}); 