# FullSail Starts ES6

Welcome! This is a simple, more detailed less whirlwind nervous talk version of the 'how to use ES2015' presentation I gave at FullSail for the WDD program. The purpose of that talk, and this repo, is not to turn anyone in to ES2015 (formerly ES6) wizards but instead just encourage use of the upcoming syntax. It's quite easy, here's how you can get started on a bare-bones project:

1. Clone this repo, and open up Terminal.app (or your shell of choice) in the cloned directory
2. Install `gulp` and `gulp-babel` like so: `npm install --save-dev gulp gulp-babel`
3. Create `gulpfile.js` in the project root
4. Create a gulp task `babel` that simply transpiles (using babel) files from `src` to `dist` folders
```js
var
    babel = require('gulp-babel'),
    gulp  = require('gulp');

gulp.task('babel', function () {
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
```
5. Add a task to the `package.json` file in the `scripts` section like so: `"babel": "gulp babel"`
6. From the command line, run `npm run babel`
7. Voila! Assuming everything worked you should be able to see your properly converted es6 files in the `dist` folder.

If you get stuck, you can `git checkout complete` which has the working version - as you can see it's quite easy to get started with. Have a look at the example `src/es6.js` file and the transpiled `dist/es6.js` file syntax differences once you get it done.

## Remember:

You don't have to be a wizard, and you don't have to use all the new syntax. In fact, if you're struggling with it but you've already started using es2015 in some areas, you can totally write es5 syntax in the same files as a fallback.

Feel free to holler if you have questions!
