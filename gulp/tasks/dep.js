import gulp from 'gulp'

const config = {
    src: 'node_modules/babel-runtime/**/*',
    dst: 'build/babel-runtime'
}

const dep = () =>
    gulp.src(config.src)
        .pipe(gulp.dest(config.dst));

gulp.task('dep', dep);
gulp.task('watch:dep', () =>
    gulp.watch(config.src, dep)
)
