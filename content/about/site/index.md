---
title: About this site
subtitle: Colophon
summary: A little bit about this site
---

This website is my personal corner of the internet. Here, I share things that I have made: [poems]({{< ref "poems" >}}), [puzzles]({{< ref "puzzles" >}}), and more. I write [posts]({{< ref "posts" >}}) about interesting things, websites, places, videos, etc. that I come across. This site is also a way for me to experiment and play around with CSS and JavaScript.

## How it's made

This site is built using a static site generator called [Hugo](https://gohugo.io). I write my content in Markdown, and Hugo automatically generates the relevant HTML files.
I designed and wrote the theme on my own. You can find the source code for the site on [my Github profile](https://github.com/pranshugaba/hugo-website/).

(Note: I write this theme for my personal use only. I am more focussed on adding features rather than keeping it organised. As a result, the code is a mess, and anyone other than me would find it difficult to make sense of it. If you love this theme and would like to use it in your own site, [let me know]({{< ref "/contact" >}}). I will try to clean it up and publish it.)

This site is built and deployed using [Github actions](https://github.com/features/actions) and is hosted on [GitHub pages](https://pages.github.com/).

### Easter eggs

I have hidden a number of easter eggs across this site. How many can you find?

## Some statistics

|                         Count | Section                                         |
| ----------------------------: | :---------------------------------------------- |
|      {{< countposts posts >}} | [Posts]({{< ref "/posts/" >}})                  |
|      {{< countposts trips >}} | [Trips]({{< ref "/trips/" >}})                  |
|    {{< countposts recipes >}} | [Recipes]({{< ref "/recipes/" >}})              |
|    {{< countposts puzzles >}} | [Puzzles]({{< ref "/puzzles/" >}})              |
|      {{< countposts poems >}} | [Poems]({{< ref "/poems/" >}})                  |
|    {{< countposts stories >}} | [Stories]({{< ref "/stories/" >}})              |
|     {{< countposts comics >}} | [Comics]({{< ref "/comics/" >}})                |
|        {{< countposts dev >}} | [Dev articles]({{< ref "/dev/" >}})             |
|      {{< countposts minis >}} | [Minis]({{< ref "/minis/" >}})                  |
| {{< countposts newsletter >}} | [Newsletter issues]({{< ref "/newsletter/" >}}) |
|   {{< countposts thoughts >}} | [Thoughts]({{< ref "/thoughts/" >}})            |
|     **{{< countpostsall >}}** | **Total**                                       |

Last updated: {{< lastupdated >}}

Current colourscheme: **Blue accents**

## Feeds

You can read my posts using a feed reader!
Paste the following address in your favourite feed reader.

{{< highlight shell >}}
https://pranshugaba.com/index.xml
{{< /highlight >}}

You will be notified whenever I publish a new post. You can also subscribe to only select sections.
For more details, visit the [subscribe page]({{< ref "/subscribe" >}}).

## Support

If you like my work, consider supporting me at [ko&#8209;fi.com/pranshugaba](https://ko-fi.com/pranshugaba).
Thanks! :smile:
