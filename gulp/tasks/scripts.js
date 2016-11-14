import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import browserify from 'gulp-browserify'
import config from '../config'

const scripts = () =>
    gulp.src(config.src, {
            //base: 'src/components/app'
            //base: '.'
        })
        .pipe(sourcemaps.init())
        .pipe(babel())
        // .pipe(gulp.dest(config.dest))
        // .pipe(browserify({
        //     insertGlobals : true,
        //     debug : !!process.env.DEV
        // }))
        .pipe(concat(config.out))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest));

gulp.task('scripts', scripts);
gulp.task('watch:scripts', () =>
    gulp.watch(config.src, scripts)
)
