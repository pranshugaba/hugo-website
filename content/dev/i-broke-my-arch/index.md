---
title: "I broke my Arch System"
subtitle: "I updated my system, and now I only see a black screen"
summary: "I updated my Arch system, and all I would get is a black screen. I fixed it by rebuilding some AUR packages."

date: 2021-12-22T17:30:00+05:30
lastmod: 2021-12-22T17:30:00+05:30

tags: ["linux", "arch-linux", "pacman"]

math: false

draft: false
featured: false
---

Today, I updated my system running Arch Linux after a month using `pacman -Syu`. I rebooted my system to find a black screen instead of the SDDM login screen. I tried pressing the Caps Lock key, and I could see its light toggle. This meant that things were not that bad. 

I changed the tty using <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F2</kbd> and logged in to my system. I tried downgrading the Linux kernel but that didn't help. I tried disabling the optimus-manager and sddm services, and tried starting Xorg server using `startx` or `xinit`. None of this worked. 

The fix was to rebuild the optimus-manager package. It turns out that Python was upgraded from 3.9 to 3.10 in the update, and this broke Optimus Manager. I rebuilt it, and I am able to access the login screen and my window manager again.

I could see that some of my AUR packages were still built using older versions of Python using this command:

``` bash
pacman -Qoq /usr/lib/python3.9
```

I rebuilt all those packages to use the latest Python version. 
I also finally installed `yay` to manage all my AUR packages. 