import { settings } from '@fof-components';
import app from 'flarum/app';

const {
    SettingsModal,
    items: { NumberItem }
} = settings;


app.initializers.add('cxsquared-signature', () => {
    app.extensionSettings['cxsquared-signature'] = () => app.modal.show(SettingsModal, {
        tite: app.translator.trans('Xengine-signature.admin.title'),
        items: (s) => [
            <div className="Forum-group">
                <NumberItem name="Xengine-signature.maximum_image_width"
                            setting={s}
                            label={app.translator.trans('Xengine-signature.admin.settings.maximum_image_width.description')} />
                <NumberItem name="Xengine-signature.maximum_image_height" 
                            setting={s}
                            label={app.translator.trans('Xengine-signature.admin.settings.maximum_image_height.description')} />
                <NumberItem name="Xengine-signature.maximum_image_count"
                            setting={s}
                            label={app.translator.trans('Xengine-signature.admin.settings.maximum_image_count.description')} />
                <NumberItem name="Xengine-signature.maximum_char_limit"
                            setting={s}
                            label={app.translator.trans('Xengine-signature.admin.settings.maximum_char_limit.description')} />
            </div>
        ]
    });
}); 