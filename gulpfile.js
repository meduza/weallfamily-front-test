import fs from 'fs'
import gulp from 'gulp'
import path from 'path'
const tasksPath = './gulp/tasks/';

const tasks = fs.readdirSync(tasksPath).filter((name) =>
    /\.js$/i.test(path.extname(name))
).map((name) =>
    name.replace(/\.js$/i,'')
)

tasks.forEach((task) => require(tasksPath + task));

gulp.task('default', gulp.series.apply(null, tasks));
gulp.task('watch', gulp.parallel.apply(null, tasks.map((task) =>
    'watch:' + task
)));
process.once('SIGINT', () => process.exit(0));
