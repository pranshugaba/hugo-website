---
title: "Toggleable Dark Mode that persists"
subtitle: "Create a dark mode toggle that perists"
summary: "Implement dark mode using Sass and CSS variables"

date: 2021-08-03T17:30:00+05:30
lastmod: 2021-08-03T17:30:00+05:30

tags: ["webdev", "dark-mode"]

math: false

draft: true
featured: false
---

We show the website in light mode by default. 

We save the dark mode in `localStorage`. 

We can switch colours by adding a `dark` class  to `body` tag. 
We will have two CSS variables to store the colours. 

We can add and remove the `dark` class using Javascript. 

We add this code inline to the end of the body tag to reduce flash of incorrect theme. 
