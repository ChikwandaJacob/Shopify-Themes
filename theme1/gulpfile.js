const gulp = require("gulp")
const themekit = require("@shopify/themekit")
const sass = require("gulp-sass")(require("sass"))
const clean = require("gulp-clean-css")

/* Task is responsible for compiling scss to css and saving the complied file in the assests folder*/
gulp.task("sass", function () {
    return gulp.src("scss/globals.scss")
        .pipe(sass())
        .pipe(clean({ compatibility: "*" }))
        .pipe(gulp.dest("assets"))
})

/* Task is responsible for running the above task and running the theme watch command on our store theme debut*/
gulp.task("watch", function () {
    gulp.watch("scss/*.scss", gulp.series("sass"))
    /** 
     * In case the theme is live
     * themekit.command('watch', {
     *      allowLive: true,
     *      env: 'development'
     * })
    */
    themekit.command("watch", {
        env: "development"
    })
})