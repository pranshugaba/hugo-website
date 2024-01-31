---
title: 'Moving my site from Hugo to Nuxt.js...'
subtitle: 'I rebuilt my website from the ground up'
summary: 'I previously built my site using Hugo with the Academic theme. It felt restrictive, so I tried out various static site generators and chose Nuxt.js.'

# featuredImage: "avatar.png"
# previewOnly: false
# caption: false

authors: ['pranshu']

tags: ['nuxtjs', 'vuejs', 'hugo']
category: webdev

date: 2021-05-11T19:30:00+05:30
lastmod: 2021-05-11T19:30:00+05:30

showReadingTime: true
math: true
toc: false

draft: false
featured: false
---

{{< note >}}
This post was published on an older version of my site. I have rewritten my site, and many things have changed since then. This site is no longer built using Nuxt.js, but the points that I make were valid at the time of writing this post.
{{< /note >}}

This site is built using Nuxt.js, and I have had a great time making it.
The previous version of this website (now retired to hugo.pranshugaba.com) was built using Hugo. In this post, I outline how I made the switch from Hugo to Nuxt. I hope this helps anyone who is looking to choose a static site generator for their website.

Hugo is quick to install and very easy to get started with, which is what drew me to it in the first place. There are a variety of user-submitted themes available, and out of those, the Academic theme was my favourite.

The theme has a lot of useful features, but I found it to be quite opinionated. I found several websites using this theme, and they all looked more or less the same. If I wanted to modify the theme, I had to override the theme templates, and in some cases rewrite them completely. This would often cause unintended effects. It was difficult to maintain the site, and even more so to add new features. I always felt that I had hacked it together and it could break with an update to Hugo or the theme.

I wanted to create a theme from scratch, and I realized that there is much more scope for customisation if I use frameworks such as React or Vue.

There are a lot of static site generators based on these frameworks. I tried out Gridsome, Next.js, and Nuxt.js. 

### Gridsome

I tried [Gridsome](https://gridsome.org/) first, which is based on Vue.js. I had only used plain HTML and CSS before, but I could pickup Vue easily because each Vue file is divided into `template`, `script`, and `style` tags corresponding to HTML, JS, and CSS respectively.

I enjoyed learning Gridsome, and I loved the site it generated too. Gridsome prefetches links, so links are super quick to open. It also automatically optimises image loading by showing a blurred placeholder in the place of the image until it loads.

I could access data from my markdown files using GraphQL. I had never used GraphQL before, and I enjoyed learning it.

### Next.js

Next, I tried out [Next.js](https://nextjs.org/) which uses React. I was surprised to see how easily I could pickup React since I knew Vue. Next.js has a great tutorial that teaches you Next.js by building a basic blog site. While I loved the tutorial, I didn't like the fact that I had to write so much code just to read my markdown files.

There were many features that I wanted to add to my website such as sitemap and PWA. I found many plugins for these on the [awesome-nextjs](https://github.com/unicodeveloper/awesome-nextjs) page on GitHub. However, most of them were third-party, and you never know when they stop being supported.

### Nuxt.js

While browsing through the awesome-nextjs page, I discovered the [awesome-nuxtjs](https://github.com/nuxt-community/awesome-nuxt) page. I found that Nuxt has first-party modules for almost every feature that I would like in my site. I immediately switched to [Nuxt.js](https://nuxtjs.org/).
I found that Nuxt is in active development, the modules are great, and the documentation is detailed and well-written.

My favourite module is the [Nuxt Content](https://content.nuxtjs.org/) module. It makes it very easy to access markdown files and their content. I also loved the [Sitemap](https://sitemap.nuxtjs.org/), [PWA](https://pwa.nuxtjs.org/), and [Color Mode](https://color-mode.nuxtjs.org/) modules. 

Like Gridsome and Next, Nuxt prefetches the outgoing links on any page, so the links begin to load even before you click on them. This makes the site feel fast and snappy!

I did the theming and styling from scratch and am adding features gradually. I was able to match all the features offered in Hugo, and then some.

#### Math equations

Install `remark-math` and `rehype-katex` modules and we are good to go!

I can have inline math \(e^{i\pi} + 1 = 0\), and displaystyle math too!

\[
\sum_{k=1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}
\]

#### Code blocks

Prism.js comes pre-installed with Nuxt. You can install themes and plugins too.

```rust
fn main() {
    println!("Hello, world!");
}
```

You can check out the code on [GitHub](https://github.com/pranshugaba/nuxt-website)  to see how I made my website using Nuxt.
