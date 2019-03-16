const { task, watch, series, parallel } = require('gulp');
const { spawn } = require('child_process');
const bs = require("browser-sync").create();

const path = {
    html: ['*.html', '*.md', '_includes/*.html', '_layouts/*.html', '_posts/*.markdown', '_drafts/*.markdown'],
    css: ['_sass/**/*.scss']
};

task('jekyll:build', (done) => {
    spawn('bundle', ['exec', 'jekyll', 'build'], {
        shell: true,
        stdio: 'inherit'
    }).on('close', done);
});

task('jekyll:build+drafts', (done) => {
    spawn('bundle', ['exec', 'jekyll', 'build', '--drafts'], {
        shell: true,
        stdio: 'inherit'
    }).on('close', done);
});

task('browser-sync', () => {
    bs.init({
        server: {
            baseDir: '_site'
        }
    })
});

task('watch', () => {
    watch(path.html).on('change', series('jekyll:build+drafts', bs.reload));
    watch(path.css).on('change', series('jekyll:build', bs.reload));
});

task('serve', series('jekyll:build', parallel('browser-sync', 'watch')));
task('served', series('jekyll:build+drafts', parallel('browser-sync', 'watch')));
