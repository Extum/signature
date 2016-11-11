import app from 'flarum/app';

import SignatureSettingsModal from 'xengine/signature/components/SignatureSettingsModal';

app.initializers.add('xengine-signature', () => {
    app.extensionSettings['xengine-signature'] = () => app.modal.show(new SignatureSettingsModal());
});