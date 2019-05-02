# Husky Running Club Website

Our website is build from a static site generator called [Jekyll](https://jekyllrb.com). This allows us to edit parts of HTML templates without copying and pasting common layouts between pages.

You'll need Ruby >= 2.1 to install [Jekyll](https://jekyllrb.com) using Bundler (a package manager for Ruby).

Install bundler: `gem install bundler`, then, from the root directory of the repository, run `bundle install` to install all the project dependencies. You can later run `bundle update` to update dependencies as necessary.

To serve the website locally, first navigate to the root of the git repository. From there, run:

`bundle exec jekyll clean`

`bundle exec jekyll serve --incremental` (`--incremental` will watch for changes and rebuild the site when they are made)

To build the website:

`bundle exec jekyll clean`

`bundle exec jekyll build`

You will find the site has been built in the `__site/` directory relative to the site root.

The purpose of `jekyll clean` is to wipe out the `__site/` directory before rebuilding the website, so it doesn't try to reuse cached content that may have changed.

The site is hosted in GitHub pages, so when you update `master` on GitHub, it is automatically rebuilt and the live site is updated. 

<hr>

If you choose not to use Bundler *(not recommended)*, you can just run the same commands but omit `bundle exec`. But keep in mind that this means you'll have to manually `gem install` all of the dependencies in the `Gemfile`, and they will also be installed system-wide.

<hr>

FAQs

- Why are some file names prefixed with `{letter}_`?
  
  Jekyll reads pages in alphabetical order by filename when deciding how to order them for the navbar. So this allows us to decide the order. The `permalink` and page title can be changed in the page's metadata, so the filename doesn't necessarily decide how the URL or title look in the final site.
  
- Why are some files in folders?

	I did this before I realized that `permalink` could be included in a page's metadata. I do think that it makes sense for some pages to be organized in folders. This might merit reorganization at some point, though.

- Why aren't you using {{today's hottest JS framework}}?

	This is stable, simple, and fast.