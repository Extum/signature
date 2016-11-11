var flarum = require('flarum-gulp');

flarum({
    modules: {
        'xengine/signature': [
            'src/**/*.js'
        ]
    }
});