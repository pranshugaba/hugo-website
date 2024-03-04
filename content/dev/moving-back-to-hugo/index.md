---
title: "...and Back to Hugo Again"
subtitle: "This time, I wrote my own awesome theme"
summary: "I switched to Nuxt not more than 2 months ago. Now, I am back to using Hugo, and intend to do so for the forseeable future."

date: 2021-07-06T15:16:36+05:30
lastmod: 2021-07-06T15:16:36+05:30

tags: ["hugo", "nuxtjs"]

draft: false
featured: false
---

Not more than 2 months ago, I had migrated my site from Hugo to Nuxt, and I had [written a post]({{< ref "/dev/moving-from-hugo-to-nuxt/index.md" >}}) describing why I chose to do so. Well, that didn't last long, and now I am back to using Hugo. 

## My (short) experience with Nuxt

I had added many features to my site in Nuxt. I was happy with my progress; my site looked so pretty and colourful!

{{< figure src="nuxt-website-light.webp" dark-src="nuxt-website-dark.webp" caption="This is how my Nuxt website looked  like.">}}

I used [TailwindCSS](https://tailwindcss.com/) to style my site, and it was amazing not having to think of class names anymore. It was easy to prototype and iterate over different styles quickly, even if it meant having a dirty HTML code overriden with dozens of classes. 

Another thing I loved about Nuxt is that it is based on Vue, and therefore I could make reusable components for different parts of my site. Almost everything on my site was a component: header, footer, links, figures, headings, author bios, pagination, even the dark mode switch. To make my website, I had to design the components and then assemble them together, just like Lego! It was so much fun.

{{< figure src="components-light.webp" dark-src="components-dark.webp"  caption="Some of the components in my Nuxt website">}}

Once I finished adding features to my site, I wrote a tutorial on game development: [Building an X and O game in Godot]({{< ref "building-x-and-o-using-godot/" >}}). It was a long article -- about 7000 words long -- and it was filled with notes, figures, and codefences. With a post this big, I was beginning to face performance issues. 

The site was taking too long to build. The initial build of the site would take more than 17 seconds to complete, and the server would take up about 1.5 GB of memory. I found out that one of the main offenders was Tailwind. I switched Tailwind to JIT mode, and the startup build time reduced to 6 seconds. But this increased again as I added custom styling.

I could live with the long build times, but I also noticed issues on my website, especially on mobile. I had a dark theme toggler in my website, and toggling the theme on mobile was taking a good second or two, and was causing frame drops.

Another issue I was facing was related to prefetching. As I have mentioned before, Nuxt prefetches links, so when you click on an link, the page appears to load almost instantly. While the page was loading very quickly, it did not load completely rendered. A lot of content loaded after a while as the components hydrated. This was causing layout shifts, which was annoying, distracting, and terrible experience for the user. I would rather the page take half a second to load, but it loads completely without any layout shift.

Yet another issue with using generators such as Next and Nuxt is that the first time a user visits my site, they have to download a big Javascript bundle. This greatly increases the total blocking time and the time to Largest Contentful Paint during a user's first visit, which is arguably the most important visit. 

I was missing the simplicity and speed of Hugo, so I decided to give Hugo another go.

## My new site built with Hugo

I had a not-so-great experience with a readymade theme before, so this time I decided to write my own theme. I decided I would keep my site simple so it is easy to maintain and not too distracting to look at. 

My site uses only two colours: {{< colour "papayawhip" >}} and {{< colour "#121212" >}}. Every element has one of these two colors. This makes the colour part of the CSS very simple, and I was also able to write the dark theme in no time. 

I love this simple design; I think it looks crisp and clear with no distractions. The content is legible with enough contrast between the foreground and the background, much like a road sign. 

{{< figure src="road-sign.webp" class="small">}}

I also love the creative decisions that I have to take when I have just two colours at my disposal. There are no box-shadows, no transparency, and no colour (except for images) on this site. Any component on the site must use exactly one of the two colours in the palette.

I am no longer using Tailwind to style the site; I am using [Sass](https://sass-lang.com/) now. I do have to think of class names for each class, but using the BEM methodology helps. While Tailwind has most of the CSS features, it still lacks many newer CSS properties. I can now use all CSS properties now such as underline-offset, smooth scrolling, scroll-padding-top, etc. 

In Sass, we can split our CSS into different modules to make it more organised and easy to maintain. We can combine the modules using the `@use` directive, or the deprecated `@import` directive. I wanted to use  `@use` instead of  `@import`,  but it is only available in Dart Sass, which Hugo does not support  as of writing.  So, what I do is I write in Dart Sass and live compile it. Hugo only gets the compiled CSS file. 

While I can no longer use Vue components, Hugo has templates, partials, and shortcodes that help me avoid repeating code. 

Performance wise, this site now scores perfectly on Lighthouse tests. It builds in ~150ms, which is really impressive.

## Conclusions

While Nuxt is powerful, it is too powerful for a simple site like mine which has just text and images. I feel Hugo is more than enough for my needs.

I like my stack now. It is boring, and that's a good thing. I have redesigned my site twice in the last three months, and have spent hardly any time writing content. I am done adding new features to this site now.  I might polish up the code and publish it as a theme on [Hugo themes](https://themes.gohugo.io/). Everything has been setup for me to write content and post it. I just need to start writing now. 

I have moved my Nuxt website to the nuxt subdomain, and it will remain there for posterity. I won't be making any changes to it. I will publish new  posts on my new website only. 
