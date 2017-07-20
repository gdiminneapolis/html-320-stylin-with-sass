# Exercise 02 Using a single CSS file

Using the Sass `@import` feature, combine the `reset.scss` file in
with the `styles.scss` file.

1. convert `reset.scss` into a partial by adding an underscore to the front of the file: `_reset.scss`

2. edit `styles.scss` and import the reset partial at the beginning of
   the file: `@import "reset";` Note you do *not* include the underscore,
   or the extension. Sass figures all that out for you.

3. Change `index.html` to remove the `css/reset.css` stylesheet link from the
  `<head>` section. Leave the `css/styles.css` line alone.

Why are the stylesheet `link` tags in the `index.html` file referring to CSS files,
and not our SCSS files?
