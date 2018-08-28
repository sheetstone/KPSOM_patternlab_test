/******************************************************
 * PATTERN LAB NODE
 * EDITION-NODE-GULP
 * The gulp wrapper around patternlab-node core, providing tasks to interact with the core library.
 ******************************************************/
const gulp = require('gulp');
const sass = require('gulp-sass');
const argv = require('minimist')(process.argv.slice(2));
const browserSync = require('browser-sync').create();

/******************************************************
 * PATTERN LAB  NODE WRAPPER TASKS with core library
 ******************************************************/
const config = require('./patternlab-config.json');
const patternlab = require('@pattern-lab/core')(config);

function build() {
  return patternlab
    .build({
      watch: argv.watch,
      cleanPublic: config.cleanPublic,
    })
    .then(() => {
      // do something else when this promise resolves
    });
}

function serve() {
  return patternlab.server
    .serve({
      cleanPublic: config.cleanPublic,
    })
    .then(() => {
      // do something else when this promise resolves
    });
}

gulp.task('patternlab:version', function() {
  console.log(patternlab.version());
});

gulp.task('patternlab:patternsonly', function() {
  patternlab.patternsonly(config.cleanPublic);
});

gulp.task('patternlab:liststarterkits', function() {
  patternlab.liststarterkits();
});

gulp.task('patternlab:loadstarterkit', function() {
  patternlab.loadstarterkit(argv.kit, argv.clean);
});

gulp.task('patternlab:build', function() {
  build().then(() => {
    // do something else when this promise resolves
  });
});

gulp.task('patternlab:serve', function() {
  serve().then(() => {
    // do something else when this promise resolves
  });
});
gulp.task('sass', function () {
  return gulp.src('./source/css/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./source/css/'));
});

gulp.task('patternlab:installplugin', function() {
  patternlab.installplugin(argv.plugin);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    },
  })
})
gulp.task('browserRelod',function(){
  browserSync.reload();
})

gulp.task('default', ['patternlab:build','sass','browserSync'], function(){
  gulp.watch('./source/css/**/*.scss', ['sass', 'browserRelod']);
});
