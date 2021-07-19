---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "The Picture Hanging Puzzle"
subtitle: "Puzzle #1"
summary: "Can you hang a picture so that it is easy to remove?"
authors: ["pranshu"]
tags: ["puzzles"]
categories: []
date: 2021-03-23T17:30:00+05:30
lastmod: 2021-03-23T17:30:00+05:30
reading_time: false
featured: false
draft: false
math: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: "Top"
  preview_only: true
  placement: 2

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

I will be sharing some interesting maths puzzles here, somewhat semiregularly. If you solve a puzzle -- or make some progress -- do  [share your attempt with me]({{< ref "/contact" >}}). I would love to read your submissions. Interesting and enlightening reader-submitted solutions will be featured along with the following puzzle.

Here's the first puzzle.

## The Problem

You have stolen an exquisite painting from your local art gallery, and given the daring thief that you are, you would like to hang in your living room! You have with you some nails and a long rope.

### Level 1

You would like to hang the painting using two nails. To allow for easy removal, you want the painting to fall if you remove any one of the nails from the wall.

 Is this feat possible? If yes, then how would you hang the painting? If no, then prove that it is impossible.

{{< note class="tip" >}}
Try it out with some pencils and a long string.
 {{< /note >}}

{{< figure class="medium no-border" src="two_nails.png" alt="A painting hanging off two nails."  caption="This method _does not_ work, because if you remove any one nail, the painting still hangs from the other nail." >}}

### Level 2

Now suppose you want to hang the painting using $n$ nails. You would like to painting to fall on removing any one nail.

For what values of $n$ is this possible? 
In the cases it is possible, how would you hang the painting?

### Level 3

Suppose you want to hang the painting using $n$ nails. This time, you would like the painting to fall on removing any $m$ nails. The painting should not fall if you remove fewer than $m$ nails.
You may assume $1 \le m \le n$. 

For what values of $m$ and $n$ is this possible? 
In the cases it is possible, how would you go about hanging the painting?

{{% puzzles/feedback %}}