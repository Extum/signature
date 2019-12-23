import app from 'flarum/app';

import SignatureSettingsModal from './components/SignatureSettingsModal';

app.initializers.add('Xengine-signature', () => {
    app.extensionSettings['Xengine-signature'] = () => app.modal.show(new SignatureSettingsModal());
}); 