const { task, watch, series, parallel } = require('gulp');
const { exec } = require('child_process');
const bs = require("browser-sync").create();

const path = ['_layouts/*.html', '_includes/*.html', '**/*.markdown', '_sass/**/*.scss'];

task('jekyll:build', (done) => {
    exec('docker run -p 80:4000 -v %cd%:/srv/jekyll -v jekyll_cache:/usr/local/bundle --env JEKYLL_ENV=development --name jekyll-serve -i --rm jekyll/builder:3.8 jekyll build --drafts',
        (error, stdout, stderr) => {
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.log(stderr);
            }
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
            done();
        });
});

task('browser-sync', () => {
    bs.init({
        server: {
            baseDir: '_site'
        }
    })
});

task('watch', () => {
    watch(path).on('change', series('jekyll:build', bs.reload));
});

task('serve', series('jekyll:build', parallel('browser-sync', 'watch')));