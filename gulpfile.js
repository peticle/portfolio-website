const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
    return src('app/*.pug')
        .pipe(pug())
        .pipe(dest('dist'));
}

function css() {
    return src('app/scss/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(dest('dist/css'));
}

function js() {
    return src('app/js/*.js', { sourcemaps: true })
        .pipe(concat('app.min.js'))
        .pipe(dest('dist/js', { sourcemaps: true }));
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = function() {
    watch('app/*.pug', html);
    watch('app/scss/*.scss', css);
    watch('app/js/*.js', js);
}