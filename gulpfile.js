var gulp = require('gulp'),
    log = require('gulp-util').log,
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    webpack = require('gulp-webpack'),
    gulpPugBeautify = require('gulp-pug-beautify');

var config = {
  watch: './src/**/*.*',
  server: {
    port: '8000',
    path: './dist'
  },
  html: {
    src: './src/index.pug',
    destination: 'dist/'
  },
  pages: {
    src: './src/templates/*.pug',
    destination: 'dist/templates'
  },
  css: {
    src: './src/styles/*.scss',
    destination: 'dist/css'
  },
  js: {
    src: './src/js/**',
    destination: 'dist/js'
  },
  img: {
    src: './src/img/**',
    destination: 'dist/img'
  },
  video: {
    src: './src/video/**',
    destination: 'dist/video'
  },
  fonts: {
    src: './src/fonts/**',
    destination: 'dist/fonts'
  }
};

var sassOpts = {
    outputStyle: 'nested',
    precision: 8,
    errLogToConsole: true,
    includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets']
}

gulp.task("connect",function(){
  connect.server({
    port:config.server.port,
    livereload:true,
    root:config.server.path});
});

gulp.task('templates', function () {
  gulp.src(config.html.src)
    .pipe(pug({pretty: true}))
    .pipe(gulpPugBeautify({ omit_empty: false}))
    .pipe(gulp.dest(config.html.destination))
    .pipe(connect.reload());
});

gulp.task('pages', function () {
  gulp.src(config.pages.src)
    .pipe(pug({pretty: true}))
    .pipe(gulpPugBeautify({ omit_empty: false}))
    .pipe(gulp.dest(config.pages.destination))
    .pipe(connect.reload());
});

gulp.task('styles', function () {
  gulp.src(config.css.src)
    .pipe(sass(sassOpts))
    .pipe(autoprefixer({ browsers: ['last 2 versions'],cascade: false }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest(config.css.destination))
    .pipe(connect.reload());
});

gulp.task('scripts', function () {
  gulp.src(config.js.src)
    .pipe(webpack({output: {
        filename: '[name].js',
    }}))
    .pipe(gulp.dest(config.js.destination))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  log('Watching file');
  gulp.watch(config.watch, ['build']);
});

gulp.task('images', function () {
  gulp.src(config.img.src)
    .pipe(gulp.dest(config.img.destination))
});

gulp.task('video', function () {
  gulp.src(config.video.src)
    .pipe(gulp.dest(config.video.destination))
});

gulp.task('fonts', function () {
  gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.destination))
});

gulp.task('build', ['templates','pages','styles','scripts','images','video','fonts']);
gulp.task('default',['build','connect','watch']);
