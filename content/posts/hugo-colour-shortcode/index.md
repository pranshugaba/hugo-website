---
title: "Hugo Colour Shortcode"
subtitle: "A fun way to show the colours you are naming"
summary: "A fun way to show the colours you are naming"

date: 2021-07-14T01:53:47+05:30
lastmod: 2021-07-14T01:53:47+05:30

tags: ["hugo", "shortcodes"]

math: false

draft: true
featured: false
---

I have written a shortcode to display the color of the colors. 



This works for 
- hexcodes, {{< colour "#696969" >}}, 
- rgb {{< colour "rgb(0, 100, 255)" >}}, 
- hsl {{< colour "hsl(37.1, 100%, 91.8%)" >}},
- and named colours as well {{< colour "aquamarine" >}}. 

To use the shortcode in the markdown, we write 
{{< highlight text >}}
This is a colour shortcode {{</* colour "#ff0000" */>}}.
{{< /highlight >}}

renders as 

This is a colour shortcode {{< colour "#ff0000" >}}.

I wrote the following shortcode to achieve this. 

``` go
{{ $colour := .Get 0 | safeCSS }}
<code style="background-color: {{ $colour }};"> 
  <span style="
      color: {{ $colour }};
      filter:  grayscale(1) invert(1) contrast(100);
      ">
      {{ $colour }}
  </span>
</code>
```