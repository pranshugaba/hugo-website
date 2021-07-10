---
title: "Moving my site from Hugo to Nuxt.js..."
subtitle: "I rebuilt my website from the ground up"
summary: "I previously built my site using Hugo with the Academic theme. It felt restrictive, so I tried out various static site generators and chose Nuxt.js."

# featuredImage: "avatar.png"
# previewOnly: false
# caption: false

authors: ["pranshu"]

tags: ["nuxtjs", "vuejs", "hugo"]
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
The previous version of this website (now retired to [hugo.pranshugaba.com](https://hugo.pranshugaba.com)) was built using Hugo.
In this post, I outline how I made the switch from Hugo to Nuxt. I hope this helps anyone who is looking to make a static site using Nuxt.

Hugo is quick to install and very easy to get started with, which is what drew me to it in the first place. 
There are a variety of user-submitted themes available, and out of those, the Academic theme was my favourite. 

The theme has a lot of useful features, but I found it to be quite opinionated. I found several websites using this theme, and they all looked more or less the same. I could customise my site by overriding the template files, but this was  not a pleasant experience.  

When I wanted to modify the theme, I had to override the theme templates, and in some cases rewrite them completely. This would often cause unintended effects. The site was difficult to maintain, and even more so to add new features. I always felt that I had hacked it together and it could break with an update to Hugo or the theme.

I wanted to create a theme from scratch, and I realized that there is much more scope for customisation if I use frameworks such as React or Vue. 

There are a lot of static site generators based on these frameworks. I tried out Gridsome, Next.js, and Nuxt.js.

### Gridsome 

I tried Gridsome first. It is based on Vue.js. I was impressed with the speed that links opened with. I was able to access data from my markdown files using GraphQL. I had never used GraphQL before, and I enjoyed learning it. 

Gridsome prefetches links, so links are  quick to open. 

### Next.js

Next, I tried out Next.js which uses React. I was surprised to see how easily I could pickup React since I knew Vue. Next.js has a great tutorial that teaches you Next.js by building a basic blog site. While I loved the tutorial, I didn't like much code I had to write to read my Markdown files. 
I had to use a third-party plugin `next-mdx-remote` which didn't work very well with NextLinks.


### Nuxt.js

I discovered the awesome-nuxtjs page on Github, and I loved the number of first-party plugins that Nuxt has.

The Nuxt Content module makes it very easy to access markdown files.
Plugins are great, more contributors and better documentation.

I did the theming and styling from scratch and am adding features gradually. I was able to match all the features offered in Hugo, and then some.

#### Prefetching

One of the biggest advantages of using Nuxt is the prefetching. It prefetches the outgoing links on any page, so the links begin to load even before you click on them. This makes the site feel fast and snappy!

#### Math equations

Install `remark-math` and `rehype-katex` modules and we are good to go!

I can have inline math $e^{i\pi} + 1 = 0$, and
displaystyle math too!

$$
\sum_{k=1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}
$$

#### Code blocks

Prism js comes pre-installed with Nuxt. You can install themes and plugins too.

```rust [hello.rs]
fn main() {
    println!("Hello, world!");
}
```
