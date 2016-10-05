# Husky Running Club Website

To install Jekyll using Bundler (recommended), see [here](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/).

To serve the website locally, first navigate to the root of the git repository. From there, run:

`bundle exec jekyll clean`

`bundle exec jekyll serve --incremental` (`--incremental` will watch for changes)

To build the website:

`bundle exec jekyll clean`

`bundle exec jekyll build`

You will find the site has been built in the `__site/` directory relative to the site root.

The purpose of Jekyll clean is to wipe out the `__site/` directory before rebuilding the website, so it doesn't try to reuse cached content that may have changed.

If you choose not to use Bundler, you can just run the same commands but omit `bundle exec`.

