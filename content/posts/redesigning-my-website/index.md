---
title: "Redesigning my website"
subtitle: "Migrating from Hugo to Nuxt.js"
summary: "Migrating from Hugo to Nuxt.js"

# featuredImage: "avatar.png"
# previewOnly: false
# caption: false

authors: ["pranshu"]

tags: ["nuxtjs", "vuejs", "webdev"]
category: webdev

date: 2021-05-11T19:30:00+05:30
updatedAt: 2021-05-11T19:30:00+05:30

showReadingTime: true
math: true
toc: false

draft: false
featured: false
---

This site is built using Nuxt.js, and I have had a great time making it.
The previous version of this website (now retired to [hugo.pranshugaba.com](https://hugo.pranshugaba.com)) was built using Hugo.
In this post, I outline how I made the switch from Hugo to Nuxt. I hope this helps anyone who is looking to make a static site using Nuxt.

Hugo is quick to install and very easy to get started with.
There are a variety of user-submitted themes available, and out of those, the Academic theme was my favourite. It served me well at the beginning, however, customizing it was not pleasant.

When I wanted to modify the theme, I would have to override the templates, and in some cases rewrite them completely. This would often cause unintended effects.
I wanted to create a theme from scratch, and I realized that frameworks such as React and Vue are better suited for this.

Some of the popular static site generators are Gridsome, Next.js, and Nuxt.js.

I tried out Gridsome first because it was more oriented towards static sites. I learnt GraphQL, which is required to parse the markdown files. I found the syntax quite verbose.

Next, I tried out Next.js which uses React. I was surprised to see how easily I could pickup React since I knew Vue. It wasn't easy parsing markdown files. I had to use a third-party plugin `next-mdx-remote` which didn't work very well with NextLinks.

I discovered the awesome-nuxtjs page on Github, and I loved the number of first-party plugins that Nuxt has.

The Nuxt Content module makes it very easy to access markdown files.
Plugins are great, more contributors and better documentation.

I did the theming and styling from scratch and am adding features gradually. I was able to match all the features offered in Hugo, and then some.

## Awesome features in Nuxt

### Prefetching

One of the biggest advantages of using Nuxt is the prefetching. It prefetches the outgoing links on any page, so the links begin to load even before you click on them. This makes the site feel fast and snappy!

### Math equations

Install `remark-math` and `rehype-katex` modules and we are good to go!

I can have inline math $e^{i\pi} + 1 = 0$, and
displaystyle math too!

$$
\sum_{k=1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}
$$

### Code blocks

Prism js comes pre-installed with Nuxt. You can install themes and plugins too.

```rust [hello.rs]
fn main() {
    println!("Hello, world!");
}
```
