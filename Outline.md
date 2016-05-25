# Outline for Stylin' With Sass workshop

* Duration: 4 hours
* Prerequisites: some programming, intermediate to advanced CSS skills

## Introduction: What Does Sass Do?

* Preprocessing
* Variables
* Nesting
* Mixins
* Operators

## Sass vs. SCSS

* Same preprocessor
* Different layout and formatting
* SCSS is more like regular CSS, probably more familiar to start with
* Sass is more streamlined, but strict on indenting
* We'll be using SCSS in the course

## Tools You'll Use

* Browser DevTools
* Command Line
* Your code editor

## Terms we'll be using

* Preprocessor
* Programming Language (Ruby)
* Compile

## How Sass Works

* Write Sass code
* Run the compiler / preproccessor
* Sass code is compiled into CSS files

## Brief orientation to command line

## Installing Sass

* Installing Ruby

    * Windows (rubyinstaller.com)

    * Mac
        * Yosemite or newer: okay
        * Mountain Lion or older: install via rvm

    * Linux
        * default is probably too old
        * install via rvm

* Installing Sass

```
    gem install sass
```

## File setup

* Download project template
* Follow instructions at https://github.com/gdiminneapolis/gdi-starting-up

## Getting going

Run sass from command line:

```
    cd stylesheets
    sass --watch scss:css
```

Watches for any changes in `stylesheets/scss` and compiles the files into `stylesheets/css`.

## Get Stylin!

* Nesting
* Referencing the parent
* Let's write some styles

* Variables - store in one place
* Partials / Importing
* Operations
  * calculations
  * setting widths
  * modifying colours (lighten, darken, grayscale)
* Mixins


## Pro Sass

* Informational only
* Built in to many other packages
  * Jekyll, Middleman, other static site generators
* Build tools
  * Grunt, Gulp, Webpack
