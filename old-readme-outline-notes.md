# Notes for "Stylin' With Sass" Class for GDI Mpls

I'd like to have them start out with an example, and give them some
instructions on changing colours, text sizes, and so on, i.e., things
we've encountered in real life that cause us pain and wishing we'd have
used something like Sass from the start.

I'd also like to introduce early the concept of building your
toolchains so you understand how these things work. Getting them
comfortable installing `node` and `npm`, learning how to build and use
a `package.json` file to set up a toolchain, and introduce them to
`Grunt` and `Gulp`.

This seems like a lot, without even getting into the interesting bits
of using `Sass`, but I think it's a necessary part of understanding
how to work with these things, and although they require a bit of
up-front work, they save time in the long run.

I'd also like to teach the conceptual parts with real examples,
side-by-side, if possible, as in "on the left, there's the sass, on
the right the css that it produces" sort of thing. I'd love if this
could be done in real time, too.

Given this is only a 4-hour class, doing a lot of practical work means
skimping on the detailed concepts. I'm okay with that, as I think that
stuff is covered a lot already. I guess what I'm thinking of here most
is a very practical set of skills for setting up a project to use
sass, or take an existing one and make it into a well-structured one
using sass.

-----

# Concepts to cover

## Why?

* Structure, i.e., the design for your design
* DRY / Maintenance
* Futureproofing / Flexibility
* Reusability

## Tooling

* Orientation to command line
* Sass compilers / preprocessors
* Task Runners
* Creating your own tool chain

## General Concepts

* Variables

* Nesting

* Modularization

  * "SMACCS lite"
  * File/folder structures
  * Mixins
  * Importing
  * Extending

* Operators and Programming

-----

# Questions

* Sass or SCSS? Should we use the more familiar SCSS format, or the
  more stream-lined Sass format to teach? Both?

-----

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

* Download [project template](https://github.com/gdiminneapolis/html-320-stylin-with-sass-project-files/archive/master.zip)
* Follow instructions in [project README](https://github.com/gdiminneapolis/html-320-stylin-with-sass-project-files/blob/master/README.md)

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
