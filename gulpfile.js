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

// Ne fonctionne pas sur mon système
//var jsHint = require('gulp-jshint');

var LOCALS = {};
var log = function(something){ return console.log(something); }

// Maybe no need
var paths = {
  src: [
        './src/js/*.js', 
        './src/templates/*.jade',
        './src/css/*.scss'
  ]
}

// Compile jade to  HTML files
gulp.task('jade', function(){
   gulp.src('./src/templates/*.jade')
    .pipe(plumber())
    .pipe(jade({
       locals: LOCALS 
    }))
    .pipe(gulp.dest('./build/'))
});

// Compile scss to css file
gulp.task('scss', function(){
   sass('./src/css/*.scss')
      .on('error', sass.logError)
      .pipe(plumber())
      .pipe(gulp.dest('./build/css/'))
});

// Minify css
gulp.task('clean-css', function(){
   gulp.src('./build/css/*.css')
     .pipe(plumber())
     .pipe(cleanCSS({compatibility:'ie8'}))
     .pipe(rename(function(path){
       path.basename += '-min';
     }))
     .pipe(gulp.dest('./build/css/'))
})

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
            .pipe(gulp.dest('./build/js/'))
});

// Uglify js files
gulp.task('uglify', function(){
         gulp.src('./build/js/*.js')
           .pipe(plumber())
           .pipe(uglify())
           .pipe(rename(function(path){
              path.basename += '-min';
           }))
           .pipe(gulp.dest('./build/js/'))
})

// A sort of gulp webserver

gulp.task('webserver', function(){
   gulp.src('./build/')
   .pipe(webserver({
       livereload:true,
       directoryListing:false,
       open:true,
       host:'127.0.0.1',
       port: 8000
   }))
})


// Clean build js folder
gulp.task('clean:js', function(){
return del([
      './build/js/*.js'
  ]);
})

// Clean build css folder
gulp.task('clean:css', function(){
return del([
      './build/css/*.css'
  ]);
})

// Rerun a task when a file change
gulp.task('watch', function(){
  gulp.watch(['./src/js/*.js'], ['clean:js','browserify','uglify']);
  gulp.watch(['./src/css/*.scss'], ['clean:css','scss','clean-css']);
  gulp.watch(['./src/templates/*.jade'], ['jade']);
})

gulp.task('default', ['watch']);
// All tasks HTML compilation, js and css
