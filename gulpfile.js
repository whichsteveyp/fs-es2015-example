// Dependencies

var
    babel = require('gulp-babel'), // babel is our transpiler, processing es6 to es5 compatible syntax; see babeljs.io
    gulp  = require('gulp');

gulp.task('babel', function () {
    return gulp.src('src/*.js')         // applies to all files we create in src/ directory
        .pipe(babel())                  // runs them through the transpiler
        .pipe(gulp.dest('dist'));       // sends them off to our dist/ directory
});
