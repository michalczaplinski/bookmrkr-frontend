// compile sematic ui

// JS
//  browserify (concatenate)
//  minify
//  copy

// HTML
//  copy html
//  html replace

// CSS
//  purify
//  minify


var gulp = require('gulp');
uglify = require('gulp-uglify');
source = require('vinyl-source-stream');
babel = require("gulp-babel");
htmlreplace = require('gulp-html-replace');
browserify = require('browserify');
babelify = require('babelify');
rename = require('gulp-rename');
glob = require('glob');
es = require('event-stream');
browserSync = require('browser-sync').create();


//var streamify = require('gulp-streamify');
//var reactify = require('reactify');
//var watchify = require('watchify');

var build_semantic = require('./src/semantic/tasks/build');
var watch_semantic = require('./src/semantic/tasks/watch');

gulp.task('watch-semantic', watch_semantic);
gulp.task('build-semantic', build_semantic);

var path = {
    HTML: 'src/html/**/*.html',
    CSS: 'src/css/**/*.css',
    JS: 'src/js/**/*.js',
    SEMANTIC: 'src/semantic/**',
    DEST: 'dist',
    ENTRY_POINTS: ['./src/js/app.js', './src/js/index.js']
};

gulp.task('html', function () {
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST + '/html'));
});

gulp.task('css', function () {
    gulp.src(path.CSS)
        .pipe(gulp.dest(path.DEST + '/css'));
});

gulp.task('js', function () {
    var entries = path.ENTRY_POINTS;

    entries.map(function (entry) {
        return browserify({
            entries: [entry],
            debug: true
        })
            .transform(babelify)
            .bundle()
            .pipe(source(entry))
            .pipe(rename(function (path) {
                path.dirname = "";
            }))
            .pipe(gulp.dest('dist/js'));

    });

});

gulp.task('semantic', function () {
    gulp.src(path.SEMANTIC)
        .pipe(gulp.dest(path.DEST + '/css/semantic'))
});


//gulp.task('browsersync', function () {
//    browserSync.init({
//        port: 8000
//    });
//});


gulp.task('watch', function () {
    gulp.watch([path.HTML, path.CSS, path.JS], ['html', 'css', 'semantic', 'js']);
});


gulp.task('build', ['build-semantic', 'html', 'css', 'js', 'semantic']);

gulp.task('default', ['watch-semantic', 'watch']);
