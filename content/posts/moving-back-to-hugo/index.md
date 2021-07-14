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

Not more than 2 months ago, I had migrated my site from Hugo to Nuxt, and I had [written a post]({{< ref "../moving-from-hugo-to-nuxt" >}}) describing why I chose to do so. Well, that didn't last long, and now I am back to using Hugo. 

## My (short) experience with Nuxt

I had added many features to my site in Nuxt. I was happy with my progress; my site looked so pretty and colourful!

{{< figure src="nuxt-website-light.webp" dark-src="nuxt-website-dark.webp" caption="This is how my Nuxt website looked  like.">}}

I used [TailwindCSS](https://tailwindcss.com/) to style my site, and it was amazing not having to think of class names anymore. It was easy to prototype and iterate over different styles quickly, even if it meant having a dirty HTML code overriden with dozens of classes. 

Another thing I loved about Nuxt is that it is based on Vue, and therefore I could make reusable components for different parts of my site. Almost everything on my site was a component: header, footer, links, figures, headings, author bios, pagination, even the dark mode switch. To make my website, I had to design the components and then assemble them together, just like Lego! It was so much fun.

Once I finished adding features to my site, I wrote a tutorial on game development: [Building an X and O game in Godot]({{< ref "building-x-and-o-using-godot/" >}}). It was a long article -- about 7000 words long -- and it was filled with notes, figures, and codefences. With a post this big, I was beginning to face performance issues. 

The site was taking too long to build. The initial build of the site would take more than 17 seconds to complete, and the server would take about 1.5 GB of memory. I found out that one of the main offenders for this was Tailwind. I switched Tailwind to JIT mode, and the startup build time reduced to 6 seconds. But this started increasing again as I added custom styling.

I could live with the long build times, but I also noticed issues on my website, especially on mobile. I had a dark theme toggler in my website, and toggling the theme on mobile was taking a good second or two, and was causing frame drops.

Another issue I was facing was with prefetching. As I have mentioned before, Nuxt prefetches links, so when you click on an link, the page appears to load almost instantly. Once you click on a link, the page would load very quickly, but a lot of content would load after a while as the components hydrated. This caused a layout shift, which is annoying, distracting, and terrible experience for a user. I would rather the page take half a second to load, but it loads completely without any layout shift.

The first time a user visits my site, they would have to download a big javascript bundle. This greatly increases the total blocking time and the time to Largest Contentful Paint during a user's first visit, which is arguably the most important visit. 

I was missing the simplicity and speed of Hugo, so I decided to give Hugo another go.

## My new site built with Hugo

I had a not-so-great experience with a readymade theme before, so this time I decided to write my own theme. I decided I would keep my site simple so it is easy to maintain and not too distracting to look at. 

My site uses only two colours: {{% color "papayawhip" %}} and {{% color "#121212" %}}. Every element has one of these two colors. This makes the colour part of the CSS very simple, and I was also able to write the dark theme in no time. 

I love this simple design; I think it looks crisp and clear with no distractions. The content is legible and there won't be any "Low contrast" text. I also love the creative decisions that I have to take when I have just two colours at my disposal. There are no box-shadows, no transparency, and no colour (except for images) on this site. This is in stark contrast to my Nuxt site which had all of those.

I am no longer using Tailwind to style the site; I am using [Sass](https://sass-lang.com/) now. I do have to think of class names for each class, but using the BEM methodology helps. While Tailwind has most of the CSS features, I can use all CSS properties now such as underline-offset, smooth scrolling, etc. 

Hugo does not support Dart Sass as of writing. I really love the `@use` directive instead of the `@import` directive which is being deprecated. So, what I do is I write in Dart Sass and live compile it. Hugo only gets the compiled CSS file. 

I have made the text bigger so it is easier to read. 

Performance wise, this site now scores perfectly on Lighthouse tests. It builds in ~150ms, which is really impressive.

## Conclusions

Nuxt is powerful, maybe too powerful for me. 

I like my stack now. It is boring, and that's a good thing. 

I have redesigned my site twice in the last three months, and have spent hardly any time writing content. I am done adding new features to this site now. It  has all I need. Now, I just need to start writing good content. 

I have moved it to the nuxt subdomain. Any new articles I will be adding to my main website only. 
