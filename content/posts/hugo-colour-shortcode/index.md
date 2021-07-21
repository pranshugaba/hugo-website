---
title: "Hugo Colour Shortcode"
subtitle: "A fun way to show previews of colours in Hugo"
summary: "Names of colours do not convey their image very well. What does #714825 looks like? I wrote a shortcode that shows previews of colours in Hugo, so you can see them and don't have to imagine them."

date: 2021-07-14T01:53:47+05:30
lastmod: 2021-07-14T01:53:47+05:30

tags: ["hugo", "shortcodes", "colours"]

math: false

draft: false
featured: false
---

I was writing a [post about my new Hugo website]({{< ref "/posts/moving-back-to-hugo" >}}), and I wanted to describe the colours used on this site. I wrote the names of the colours, but names cannot convey the colour very well. Can you imagine what the colour #714825 looks like? What about rgb(0, 100, 255)?

I thought it would be great if the reader could also see a preview of the colours. I could add images of the colours that I am describing, but that is a lot of work and not very flexible.  This is what led me to write this Hugo shortcode.

## Usage

The following code in Markdown
{{< highlight text >}}
This is a colour shortcode {{</* colour "#ff0000" */>}}.
{{< /highlight >}}

renders as 

This is a colour shortcode {{< colour "#ff0000" >}}.

This works with all valid CSS colour syntaxes, not just hexcodes. Here are some examples:

- {{< colour "#714285" >}}
- {{< colour "rgb(0, 100, 255)" >}}
- {{< colour "hsl(37.1, 100%, 91.8%)" >}}
- {{< colour "aquamarine" >}}

## Shortcode

I wrote the following shortcode to achieve this. 

```go
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

The shortcode takes in an argument: `$colour`.  We use this parameter to set the text in the `code` tag, and we set both the text colour and the background colour to `$colour`. We then invert the colour of the text and increase the contrast to make the name of the colour legible. The end result is that the text is white if colour is bright, and black if it is dark.

{{< note >}}

While the shortcode syntax is specific to Hugo, most templating languages have a way to pass variables. It should be possible to adapt this code for the templating language that you use.

{{< /note >}}

## Limitations

This works well in most cases, but it has some limitations.

- When the luminosity of the colour is close to 50% and the saturation is low, neither black nor white text has enough contrast with the chosen colour, and the text is not as legible. Example: {{< colour "hsl(180, 10%,  50%)" >}}

- The text is not legible when the colour is transparent. This is because the text is transparent too, and does not have enough contrast with the background. Example: {{< colour "rgba(120, 0, 240, 0.3)" >}}

## Alternate style

Here's another style of previewing colours. 

- {{< colour-preview "#714285" >}}
- {{< colour-preview "rgb(0, 100, 255)" >}}
- {{< colour-preview "hsl(37.1, 100%, 91.8%)" >}}
- {{< colour-preview "aquamarine" >}}

The text is always legible, but the colour preview is smaller.

Here's the shortcode for this style:

```go
{{ $colour := .Get 0 | safeCSS }}
<code>
<span style="display: inline-block;
    width: 1.6ch;
    height: 1.6ch;
    border-radius: 0.1rem;
    background-color: {{ $colour }};
    margin-right:5px;"></span>
    {{ $colour }}
</code>
```

---

[Let me know]({{< ref "/contact" >}}) if you liked this shortcode, and which style you liked more. Feel free to use this code in your site and share your implementation with me. If you have any suggestions to improve this code, share those with me too.