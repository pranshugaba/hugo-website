---
title: 'My First Post'
date: 2020-02-21T14:06:32+05:30
summary: 'A trial of features of Hugo'
subtitle: 'A trial of features of Hugo'
draft: false
math: true
---

This is my first post on Hugo. I am going to design my own theme!
Here's a simple footnote[^1], and here's a longer one.

[^1]: This is the first footnote.

$$\sum_{k=1}^{\infty} \frac{1}{k^2} = \frac{\pi^2}{6}$$

This is inline math.  $e^{i\pi} + 1 = 0$. 

{{< highlight go "linenos=table,hl_lines=5-7,linenostart=199" >}}
package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}
{{< /highlight >}}

This is a tasklist

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media