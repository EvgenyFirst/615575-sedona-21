const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// stylesMin

const getStylesMin = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.getStylesMin = getStylesMin;

// HTMLmin

const getHtmlMin = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.getHtmlMin = getHtmlMin;

// scriptIndexMin

const getScriptIndexMin = () => {
  return gulp.src("source/js/index.js")
    .pipe(uglify())
    .pipe(rename("index.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.getScriptIndexMin = getScriptIndexMin;

// scriptMapMin

const getScriptMapMin = () => {
  return gulp.src("source/js/map.js")
    .pipe(uglify())
    .pipe(rename("map.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.getScriptMapMin = getScriptMapMin;

// scriptFormMin

const getScriptFormMin = () => {
  return gulp.src("source/js/form.js")
    .pipe(uglify())
    .pipe(rename("form.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.getScriptFormMin = getScriptFormMin;

// scriptModalMin

const getScriptModalMin = () => {
  return gulp.src("source/js/modal.js")
    .pipe(uglify())
    .pipe(rename("modal.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.getScriptModalMin = getScriptModalMin;

// scriptCatalogMin

const getScriptCatalogMin = () => {
  return gulp.src("source/js/catalog.js")
    .pipe(uglify())
    .pipe(rename("catalog.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.getScriptCatalogMin = getScriptCatalogMin;

// OptimisingImg

const getOptimisingImg = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      // imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.getOptimisingImg = getOptimisingImg;

// WebP

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img"))
}

exports.createWebp = createWebp;

// Sprite

/*
  const getSprite = () => {
    return gulp.src("source/img/*.svg")
      .pipe(svgstore())
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest("build/img"));
  }

  exports.getSprite = getSprite;
*/

// Copy

const copy = (done) => {
  gulp.src([
    "source/fonts/**/*{woff2,woff}",
    "source/img/**/*.ico",
    "source/img/**/*.{jpg,png,svg}"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// CopyNormalize

const copyNormalize = (done) => {
  gulp.src([
    "source/sass/normalize.css"
  ], {
    base: "source/sass"
  })
    .pipe(gulp.dest("build/css"))
  done();
}

exports.copyNormalize = copyNormalize;

// copySprite

const copySprite = (done) => {
  gulp.src([
    "source/img/sprite.svg"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copySprite = copySprite;

// Clean

const clean = () => {
  return del("build");
};

exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload

const reload = done => {
  sync.reload();
  done();
}
// Watcher

const watcher = () => {
  gulp.watch("source/img/**/*.{png,jpg,svg}", gulp.series(getOptimisingImg));
  // gulp.watch("source/img/*.svg}", gulp.series(getSprite));
  gulp.watch("source/css/normalize.css", gulp.series(copyNormalize));
  gulp.watch("source/img/**/*.{jpg,png}", gulp.series(createWebp));
  gulp.watch("source/img/sprite.svg}", gulp.series(copySprite));
  gulp.watch("source/img/**/*.{jpg,png}", gulp.series(createWebp));
  gulp.watch("source/sass/**/*.scss", gulp.series(styles, getStylesMin));
  gulp.watch("source/js/index.js", gulp.series(getScriptIndexMin));
  gulp.watch("source/js/map.js", gulp.series(getScriptMapMin));
  gulp.watch("source/js/form.js", gulp.series(getScriptFormMin));
  gulp.watch("source/js/modal.js", gulp.series(getScriptModalMin));
  gulp.watch("source/js/catalog.js", gulp.series(getScriptCatalogMin));
  gulp.watch("source/*.html", gulp.series(getHtmlMin, reload));
}

// Build

const build = gulp.series(
  clean,
  gulp.parallel(
    styles,
    getStylesMin,
    getHtmlMin,
    getScriptIndexMin,
    getScriptMapMin,
    getScriptFormMin,
    getScriptModalMin,
    getScriptCatalogMin,
    // getSprite,
    copy,
    getOptimisingImg,
    createWebp,
    copySprite,
    copyNormalize
  ));

exports.build = build;

// Default

exports.default = gulp.series(
  clean,
  gulp.parallel(
    styles,
    getStylesMin,
    getHtmlMin,
    getScriptIndexMin,
    getScriptMapMin,
    getScriptFormMin,
    getScriptModalMin,
    getScriptCatalogMin,
    // getSprite,
    copy,
    getOptimisingImg,
    createWebp,
    copySprite,
    copyNormalize
  ),
  gulp.series(
    server,
    watcher
  ));
