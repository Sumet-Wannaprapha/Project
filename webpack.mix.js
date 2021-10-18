const mix = require("laravel-mix");

mix
  .disableNotifications()
  .options({ processCssUrls: false })

  .copy("gramateria/develop/css/global.css", "build/gramateria/dist/global.css")

  .sass(
    "gramateria/develop/sass/gramateria.scss",
    "build/gramateria/dist/gram.min.css"
  )

  .copy("gramateria/develop/js/global.js", "build/gramateria/dist/global.js")

  .js(
    "gramateria/develop/js/gramateria.js",
    "build/gramateria/dist/gram.min.js"
  );
