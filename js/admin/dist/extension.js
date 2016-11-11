System.register('xengine/signature/components/SignatureSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
    'use strict';

    var SettingsModal, SignatureSettingsModal;
    return {
        setters: [function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal['default'];
        }],
        execute: function () {
            SignatureSettingsModal = (function (_SettingsModal) {
                babelHelpers.inherits(SignatureSettingsModal, _SettingsModal);

                function SignatureSettingsModal() {
                    babelHelpers.classCallCheck(this, SignatureSettingsModal);
                    babelHelpers.get(Object.getPrototypeOf(SignatureSettingsModal.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(SignatureSettingsModal, [{
                    key: 'className',
                    value: function className() {
                        return 'SignatureSettingsModal Modal--medium';
                    }
                }, {
                    key: 'title',
                    value: function title() {
                        return app.translator.trans('xengine-signature.admin.settings.title');
                    }
                }, {
                    key: 'form',
                    value: function form() {
                        return [m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                app.translator.trans('xengine-signature.admin.settings.maximum_image_width.description')
                            ),
                            m('input', { className: 'FormControl',
                                placeholder: app.translator.trans('xengine-signature.admin.settings.maximum_image_width.placeholder'),
                                bidi: this.setting('xengine-signature.maximum_image_width') })
                        ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                app.translator.trans('xengine-signature.admin.settings.maximum_image_height.description')
                            ),
                            m('input', { className: 'FormControl',
                                placeholder: app.translator.trans('xengine-signature.admin.settings.maximum_image_height.placeholder'),
                                bidi: this.setting('xengine-signature.maximum_image_height') })
                        ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                app.translator.trans('xengine-signature.admin.settings.maximum_image_count.description')
                            ),
                            m('input', { className: 'FormControl',
                                placeholder: app.translator.trans('xengine-signature.admin.settings.maximum_image_count.placeholder'),
                                bidi: this.setting('xengine-signature.maximum_image_count') })
                        ), m(
                            'div',
                            { className: 'Form-group' },
                            m(
                                'label',
                                null,
                                app.translator.trans('xengine-signature.admin.settings.maximum_char_limit.description')
                            ),
                            m('input', { className: 'FormControl',
                                placeholder: app.translator.trans('xengine-signature.admin.settings.maximum_char_limit.placeholder'),
                                bidi: this.setting('xengine-signature.maximum_char_limit') })
                        )];
                    }
                }]);
                return SignatureSettingsModal;
            })(SettingsModal);

            _export('default', SignatureSettingsModal);
        }
    };
});;
System.register('xengine/signature/main', ['flarum/app', 'xengine/signature/components/SignatureSettingsModal'], function (_export) {
    'use strict';

    var app, SignatureSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_xengineSignatureComponentsSignatureSettingsModal) {
            SignatureSettingsModal = _xengineSignatureComponentsSignatureSettingsModal['default'];
        }],
        execute: function () {

            app.initializers.add('xengine-signature', function () {
                app.extensionSettings['xengine-signature'] = function () {
                    return app.modal.show(new SignatureSettingsModal());
                };
            });
        }
    };
});