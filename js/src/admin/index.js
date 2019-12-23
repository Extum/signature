import app from 'flarum/app';

import SignatureSettingsModal from './components/SignatureSettingsModal';

app.initializers.add('katosdev-signature', () => {
    app.extensionSettings['katosdev-signature'] = () => app.modal.show(new SignatureSettingsModal());
}); 