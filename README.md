# Another refactoring of the ol' personal website

Too cheap to pay for hosting, trying to do something marginally fancier than a couple files in an S3 bucket (the solution a couple iterations ago). 

So this is built with [Eleventy](https://www.11ty.dev/), a static site-builder that accepts a variety of input formats and produces a site without client-side JavaScript (which has aesthetic appeal, but also personally calls to me, a person who doesn't really know JS).

## Credit

S/O to the several [18-F alumni](https://18f.org/about) engineers who suggested this framework, and the official [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) 'starter project' for providing more sample functionality that I'm intending to use (which is why this is a from-empty-directory project rather than a clone, hoping to do something additively minimal). 

Does this mean stepping on some rakes, like when I think "huh I wonder why there's a directory with a 'filters.js' in it that has a bunch of datetime and array-indexing functions... hm, hopefully don't need it!"? Sure, but that's part of the "fun" of computers, right?