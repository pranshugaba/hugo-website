---
title: "...and Back to Hugo Again"
subtitle: "I wrote my own theme this time"
summary: "I switched to Nuxt not more than 2 months ago. Now, I am back to using Hugo, and intend to do so for the forseeable future."

date: 2021-07-06T15:16:36+05:30
lastmod: 2021-07-06T15:16:36+05:30

tags: ["hugo", "nuxtjs"]

draft: true
featured: false
---

Not more than 2 months ago, I had migrated my site from Hugo to Nuxt, and I had [written a post]({{< ref "../moving-from-hugo-to-nuxt" >}}) describing why I chose to do so. Now I am back to using Hugo. 

## My (short) experience with Nuxt

I had added many features to my site in Nuxt. I was very happy with my site, it looked so pretty and colourful!

{{< figure src="nuxt-website-light.webp" dark-src="nuxt-website-dark.webp" caption="This is how my Nuxt website looked  like.">}}

I was styling my site using Tailwind, and it was amazing not having to think of names for classes any more. 

Using Vue js, I was able to make reusable components such as page headings, table of contents, author bios, and so on. 

I wrote a 7000 word long tutorial on how to make a game in Godot. 

I wasn't very good at Vue and Javascript. I managed to write a Pagination for the Poem section. However, I  wasn't able to refactor it so I could reuse it for sections. 

I was also facing performance issues, both while building as well as during browsing my site. The initial build of the site was taking  more than 17 seconds and about 1.5 GB of memory. After I switched to the  Tailwind's JIT  mode, the startup time reduced to 6 seconds. But this started increasing again as I added more features to the site. 

When I tested the site on mobile, changing from light to dark mode would cause frame drops. Although the  site navigation was quick because of prefetching, but the initial load was slow because of the bundle size of Nuxt.js. I was showing some images on my many of my  pages, and I was facing layout shifts when the page was loaded  for the first time. Not just images, but content too as the  components were being hydrated client-side. It was quite annoying and distracting. 

I started missing the simplicity and speed of Hugo, so I decided to give Hugo another go.

## My new site built with Hugo

I had a bad experience with using a readymade theme. So, this time, I decided to write my own theme. I decided to keep my site simple so it is easy to maintain, and not too distracting to look at. 

My site has only two colours: {{% color "papayawhip" %}} and almost-black {{% color "#121212" %}}. This makes the colour part of the CSS very simple. I also like the neat design, and the choices that I have to make when I have only two colours at my disposal. This is in stark contrast to my Nuxt site which had  so many colours. 

I am no longer using Tailwind. I am using Sass to style my site now. Hugo does not support Dart Sass as of today. I really love the `@use` directive instead of the `@import` directive which is being deprecated. So, what I do is I write in Dart Sass and live compile it. Hugo only gets the compiled CSS file. 

## Conclusions

Nuxt is powerful, maybe too powerful for me. 

I like my stack now. It is boring, and that's a good thing. 

I have redesigned my site twice in the last three months, and have spent hardly any time writing content. I am done adding new features to this site now. It  has all I need. Now, I just need to start writing good content. 
