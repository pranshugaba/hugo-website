---
title: Subscribe
subtitle: "Keep updated with what's new on this site"
summary: 'Ways to keep updated'
---

## Feed readers

Feed readers are great way to access feeds of your favourite sites in one place. 
- If you are using Linux, then I recommend [Feeds](https://gfeeds.gabmus.org/) (a graphical application) or [newsboat](https://github.com/newsboat/newsboat) (a command-line application).
- If you use an Android device, then [Read You](https://f-droid.org/en/packages/me.ash.reader/) is an excellent feed reader. 

Add the feeds listed below in your feed reader and you will be able to read them in the feed reader itself.
These feed readers keep track of which pages you have already read, and can also notify you when a new post is uploaded.

## Newsletter feed

I publish a newsletter in which I share updates about myself and this site. Here are links to some of the recent issues:

{{< recent-newsletters >}}

Add the following feed to your feed reader to subscribe to my newsletter.

```shell
https://pranshugaba.com/newsletter/index.xml
```

All past issues are also available to read on this website at [https://pranshugaba.com/newsletter]({{< ref "/newsletter" >}}). You can bookmark this page and browse through it anytime you like.

## Other feeds

Here are some feeds for other parts of my website. (Note that some components and figures may not render correctly in your feed reader.)

### Everything

Subscribe to everything on my website with the following feed.

```shell
https://pranshugaba.com/index.xml
```

### Sections

If you are only interested in subscribing to certain sections, you can do that as well. Here are the section wise feeds:

- [posts](/posts/index.xml)
- [trips](/trips/index.xml)
- [recipes](/recipes/index.xml)
- [puzzles](/puzzles/index.xml)
- [poems](/poems/index.xml)
- [stories](/stories/index.xml)
- [comics](/comics/index.xml)
- [thoughts](/thoughts/index.xml)
- [à propos de moi](/a-propos-de-moi/index.xml)
- [minis](/minis/index.xml)
- [dev](/dev/index.xml)

### Tags

You can browse pages on my website by [tags]({{< ref "/tags" >}}).
If you are interested in a particular tag and would like to subscribe to it, append `/index.xml` to the URL of the tag page to get the URL for the corresponding feed.

For example, say you would like to follow the `haiku` tag. It is available at

```shell
https://pranshugaba.com/tags/haiku
```

The feed corresponding to this tag is at

```shell
https://pranshugaba.com/tags/haiku/index.xml
```
