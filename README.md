# Sam Stromberg's Personal Website

A personal website built with [Eleventy](https://www.11ty.dev/), a static site generator that accepts a variety of input formats and produces a site without client-side JavaScript. 

Full credit for that decision goes to some former colleagues from [18F](https://18f.org/), opinionated engineers who regularly shared around thinkpieces and resources on how to build a lighterweight Web.

## Features

- **Static Site Generation**: Fast, self-contained HTML output
- **Template Engine**: Trying out Nunjucks for templating; 11ty uses extensible templates (like python/jinja, which I'd encountered before)
- **Kinda like a CMS already**: Eleventy's starter project, [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog), underscores that you don't need to engage a whole CMS just to post a few blogs
- **Responsive Design**: What kind of (former) govtech worker would I be if I didn't strive for form-factor independence and accessibility

## Did I write this with the help of some vibe coding?

Yeah sorry :/  but now I have Better-informed Thoughts about it (will link to the blog once I post it). Also, I'm a PM not an engineer. Also-also, I enjoy being an editor sometimes, and nothing needs editing as much as 3000 lines of LLM-written code.

As a pithy summary, I do see some use-case here, in the sense that LLMs don't do what brains do, but they do manage an analogue of "read some stackoverflow posts, paste a couple disparate chunks together, try to figure out why that didn't work", which is how I'd be programming anyway. But do I need billions of params and months of GPU cluster training-time to model that? Hopefully not!

Using LLMs in other domains (creative work, parsing laws or rules) seems more like a category error, and hopefully the ebbing hype-tide will leave these high and dry. Note the (subtle?) distinction here, though -- there are other algorithmic/digital systems that can handle that latter laws-or-rules case _much_ better than an LLM, so letting 100 flowers bloom, a hundred model architectures contend will get us a lot further than trying to cram three flavors of the same architecture into everything.

## Project Structure

```
my_site_11ty/
├── content/          # Actual stuff (copy, blog posts)
├── _includes/        # Extensible template files
├── _data/            # Some metadata? Need to review some more examples to see what's suposed to be here
├── public/           # Static assets (CSS, JS, images) rendered as-is
├── _site/            # Generated output when site is built -- not in repo
├── eleventy.config.js # Eleventy configuration -- a bunch of complexity I abstracted away(let the Copilot write)
└── package.json      # Dependencies and scripts
└── package-lock.json # Whatever versions actually loaded at build
```

## Getting Started

### Installation

Clone the repo

### Development

Start the development server:
```bash
npx @11ty/eleventy --serve
```

The site will be available at `http://localhost:8080`

### Building

Build the site for production:
```bash
npx @11ty/eleventy
```

Generated files will be in the `_site/` directory.

## Adding Content

### New Pages

Create new `.njk` files (or using up templating languages) in the `content/` directory:

```njk
---
layout: base.njk
title: Page Title
description: Page description
---

<h1>Page Content</h1>
<p>Your content here...</p>
```

### Blog Posts

Create new posts in `content/blog/` with the same frontmatter structure, using the post.njk layout; I've been writing them in markdown (.md) because the heavy lifting on style is done by the templates, and it's easier to write in something that looks very close to just text.

### Styling

CSS files go in `public/css/` and are copied to the output as-is. You can use plugins to handle more complicated (component-wise multiple files, etc.) implementations, and optimize for page-loading, but I was having enough trouble with a single stylesheet :shrug:

## Configuration

The site is configured in `eleventy.config.js` with:
- Input directory: `content/`
- Output directory: `_site/`
- Template includes: `_includes/` (layouts are in here)
- Data files: `_data/`
- Static assets: `public/`

## License

MIT License - this seems like a good one, right? I dunno, I also put a copyright in the footer.