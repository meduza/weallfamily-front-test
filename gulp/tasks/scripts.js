import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import browserify from 'browserify'
import babelify from 'babelify'
import config from '../config'
import source from 'vinyl-source-stream'


const scripts = () =>
    browserify({
        entries: config.src,
        debug: true
    }).transform('babelify', {
            presets: [
                'es2015',
                'react'
            ]
        })
        .bundle()
        .pipe(source(config.out))
        .pipe(gulp.dest(config.dest));

gulp.task('scripts', scripts);
gulp.task('watch:scripts', () =>
    gulp.watch(config.src, scripts)
)
