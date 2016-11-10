var flarum = require('flarum-gulp');

flarum({
    files: [
        'library/trumbowyg.js'
    ],
    modules: {
        'xengine/signature': [
            'src/**/*.js'
        ]
    }
});