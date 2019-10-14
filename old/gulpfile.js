var gulp        = require('gulp');                   // Main Gulp program
var jade        = require('gulp-jade');              // Compile .jade to .html
var sass        = require('gulp-ruby-sass');         // Compile .scss to .css
var cleanCSS    = require('gulp-clean-css');         // Minify .css
var rename      = require('gulp-rename');            // rename files
var browserify  = require('browserify');             // Browserify yeah to modules in javascript
var source      = require('vinyl-source-stream');    // One day I'll master Stream but know not
var uglify      = require('gulp-uglify');            // Minify javascript
var plumber     = require('gulp-plumber')            // Not stop the stream
var livereload  = require('gulp-livereload');
var webserver   = require('gulp-webserver');         // Webserver for Gulp
var del         = require('del');                    // Delete file or folder
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var notify  = require('gulp-notify');
var jshint  = require('gulp-jshint');
var browserSync = require('browser-sync').create();

var LOCALS = {};
var log = function(something){ return console.log(something); }
var scssFile = 'src/css/*.scss';
var jadeFiles = 'src/templates/*.jade';
var jsFiles = 'src/js/*.js';

browserSync.init({
  server: './dist/'
});

// $ gulp build
// Build construction du site pour export réel
//TODO: Créer la task elle genere le site dans le dossier build/

// Building js
// 0 - clean des files dans src et dist
// 1 - check files
// 2 - Browserify app.js
// 3 - export app.js dans le dist
// 4 - minify app.js dans le dist

//$ gulp clean
gulp.task('clean', function() {
  return del(['dist/js/*.js', 'dist/css/*.css']);
});

//$ gulp js:check
gulp.task('js:check', function() {
  return gulp.src(jsFiles)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
});

// Browserify file to js
// good snippet I think. Here the source
// https://www.viget.com/articles/gulp-browserify-starter-faq
gulp.task('browserify', function(){
    return browserify('./src/js/app.js')
            .bundle()
            .on('error', function(err){
               log("ERREUR au niveau de la compilation JS");
            })
            .pipe(source('app.js'))
            .pipe(gulp.dest('./dist/js/'))
            .pipe(notify({ message: 'browerify task complete' }));
});

//$ gulp scripts
// Construction et compilation du javascript
// usage de browserify on a un fichier app.min.js
gulp.task('scripts',['clean','js:check', 'browserify'], function() {
    return gulp.src('./dist/js/*.js')
           .pipe(plumber())
           .pipe(uglify())
           .pipe(rename(function(path){
              path.basename += '.min';
           }))
           .pipe(gulp.dest('./dist/js/'))
           .pipe(notify({ message: 'scripts task complete' }));
});


//$ gulp styles
// Construction et compilation du css
gulp.task('styles', ['clean'],function() {
  return sass(scssFile, { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});


//$ gulp jade
// Construction et compilation du html
gulp.task('jade', function(){
   gulp.src(jadeFiles)
    .pipe(plumber())
    .pipe(jade({
       locals: LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});


// $ gulp watch
// Browser-sync pour développement

// Watch
gulp.task('watch', function() {

  // Watch .jade files
  gulp.watch('src/templates/*.jade', ['jade']);

  // Watch .scss files
  gulp.watch('src/css/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);

  // Watch dist files and reload server
  gulp.watch('dist/js/*.js').on('change', browserSync.reload)
  gulp.watch('dist/css/*.css').on('change', browserSync.reload)
  gulp.watch('dist/*.html').on('change', browserSync.reload)
});
