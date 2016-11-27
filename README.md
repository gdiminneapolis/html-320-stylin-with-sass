# Stylin' with Sass Class Slides

Please read the [Contributor Covenant](CONTRIBUTOR_COVENANT.md) for
this project.

## Prerequisites

This project uses [Jekyll](https://jekyllrb.com) to produce a
reveal.js slide set and a corresponding printable document alongside.

You therefore need to have these installed prior to working on this
project:

* Ruby
* Rake gem
* Bundler gem

## Installation

Fork the repository to your own github account.

Then clone the forked repository to your local working repository.

## Setup

Run `bundle install` in your working repository to get everything set
up properly.

## Configuration

There's really little configuration involved in this repo. You
probably want to change the `_config_staging.yml` file so it will point
to your fork so you can publish your changes for review.

## Development

To see your changes during development, run the command `rake serve`

## Build for Staging

Run the command `rake build:staging` to prepare your changes to deploy
to the github pages associated with your forked github repository. If
this finishes successfully, you can run the add, commit, and push to
push all your changes up.

## Submitting changes

Commit all your changes and push up to your forked repository.

From Github, create a Pull Request against this repository. This will
notify the maintainers that something is awaiting review and merging.
