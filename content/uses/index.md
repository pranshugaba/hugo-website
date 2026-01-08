---
title: Uses
subtitle: The software that I use on a daily basis
summary: Where I talk about the software that I use on my devices
---

I list below the software that I use on my devices. 
This list is dynamic: it evolves as my needs and tastes change over time, as old applications become unsupported and new ones become available.
What you see below is what I find optimal currently, and I have arrived upon this after a great deal of discovery and experimentation.
I try to use free and open-source software wherever possible.

[Let me know]({{< ref "/contact" >}}) if you find any of these helpful and if you have started using them yourself.
I also welcome suggestions for alternatives to the applications listed below that you think do the job better.

{{< toc >}}

## Laptop

### Operating system

I use a distribution of Linux called [Fedora Workstation](https://fedoraproject.org/workstation/) on my laptop.
I mostly use it with [niri](https://yalter.github.io/niri/), a beautiful scrollable tiling Wayland compositor.
Niri is very light on resource consumption, extremely customizable, and a joy to use using just the keyboard.
As the name suggests, if you open a new window, niri neatly places it next to the existing ones like tiles instead of opening over them.
This way, windows never overlap (unless you want them to) and window management is easy and efficient.

The default install of niri is pretty barebones. 
You have to install additional software and play around with the config to get it to work the way you want it to work, so niri is recommended only if you have at least a moderate proficiency in Linux and you love tinkering with things.

Before niri, I used to use (and still sometimes use)[^1] the [GNOME desktop environment](https://www.gnome.org/). 
It is simple, elegant, stable, and a joy to use.
It is easy to get started with and works great out of the box.
This is the desktop environment (DE) that comes by default with distros such as Fedora and Ubuntu, and if you are new to Linux, this is the DE that I recommend that you start with.

[^1]: There are some features that I do not know how to get working in niri such as remote input with KDE Connect and file sharing over network. When I need these features, I briefly use GNOME.


Previously, I ran [Arch Linux](https://archlinux.org) (btw) with [hyprland](https://hyprland.org/), another tiling Wayland compositor.
Even more previously, I have used the tiling window managers [XMonad](https://xmonad.org), [herbsluftwm](https://herbstluftwm.org/), and [awesomewm](https://awesomewm.org/).
However, I had to switch away from them as they do not support Wayland.

### Text Editor

I used to use [Neovim](https://neovim.io) to edit my text files.
Neovim was easily my favourite text editor.
I could not imagine using any other text editor, ever.

But ever since I switched my [keyboard layout](#keyboard-remapping), vim motions became inconvenient and emacs became a lot more ergonomic.
So I switched to [emacs](https://www.gnu.org/savannah-checkouts/gnu/emacs/emacs.html).
It is now my favourite text editor, by far, and I cannot imagine using any other text editor, ever.

### Keyboard remapping

I use [Kanata](https://github.com/jtroo/kanata/) to remap all the keys on my laptop.
More details on how and why coming soon...

### Browser

I use Firefox with the following extensions:

- [uBlock Origin](https://ublockorigin.com/) to block all pesky ads, warn me about dangerous redirects, and to block any element from any website that I do not want to see.
- [LeechBlock NG](https://www.proginosko.com/leechblock/) to add time limits and blocks to websites that are addictive timesinks.
- [Bitwarden Password Manager](https://bitwarden.com/) to generate and store all my passwords.
- [Enhancer for YouTube](https://www.mrfdev.com/enhancer-for-youtube) for cool customizations on YouTube such as adding a mini popup player, hiding shorts and recommended videos, and so much more.
- [SponsorBlock](https://sponsor.ajay.app/) to skip over sponsored segments in videos on YouTube.

### Reading
- I use [Zathura](https://pwmt.org/projects/zathura/) when I am using niri and [GNOME Papers](https://apps.gnome.org/Papers/) when I using GNOME to read PDF files.
I love that Zathura supports SyncTeX so when I am writing a document in LaTeX, I can click on the PDF to find the corresponding line of LaTeX code in emacs.
- I rarely read ebooks on my laptop since I have an e-Ink ebook reader, but when I do read ebooks on my laptop, I use [Foliate](https://johnfactotum.github.io/foliate/). It is a beautiful and well-designed ePUB reader.
- I manage my ebook libary using [Calibre](https://calibre-ebook.com/).
- I use [Zotero](https://www.zotero.org/) to manage the research papers that I want to read.

### Note-taking

- Almost all of my typed note-taking occurs in emacs, in [Org Mode](https://orgmode.org/).
I find that it is hands down the best way to capture, write, organize, and export your notes.

- When I want to take handwritten notes or want to annotate PDFs, I use [Xournal++](https://xournalpp.github.io/) and use my drawing tablet to draw/write.

### Miscellaneous

#### Terminal emulator
- When I am in emacs (which is most of the time) I use the inbuilt shell:  
`M-x shell` or `M-x project-shell`. 
- When I am not in emacs, I use [Kitty](https://sw.kovidgoyal.net/kitty/): it is fast, performant, and customizable, and featureful.

#### Graphics

- I make vector graphics using [Inkscape](https://inkscape.org/).
- I edit raw images taken on my DSLR using [RawTherapee](https://rawtherapee.com/).

#### Music

- I sometimes listen to online radio stations using [Shortwave](https://apps.gnome.org/Shortwave/).

#### Email
- Thunderbird
- mu4e

#### Network File sharing
- Packet

#### GNOME extensions
While I no longer use GNOME, these were the extensions that I found useful (or made the GNOME shell look more beautiful).

- AppIndicator and KStatusNotifierItem Support
- Battery time
- Blur my Shell
- Gnome 4x UI improvements
- Net speed Simplified
- Night Theme Switcher

## Phone

I use an Android phone and an Android tablet. 
I install apps through [F-Droid](https://f-droid.org/packages/org.fdroid.basic/) whenever possible. 
Some notable apps that I use:

### Authentication
- Aegis Authenticator
- Bitwarden

### Media
- AntennaPod
- URL Radio
- Auxio
- Aves Libre
- mpv-android

### Productivity
- Goodtime Productivity
- AnkiDroid
- PTO
- Habits
- Simple Time Tracker

### Tools
- Compass
- Cirrus
- Barcode Scanner
- Luftlinie
- QDict
- Chooser
- Tuner
- Organic Maps
- Survival Manual
- Trail Sense
- Stellarium
- FitoTrack
- Dropsync
- Audio Spectrum Analyzer
- Notification dictionary

### Reading
- Capy Reader
- Firefox
- Librera Reader
- MJ PDF
- KOReader
- Read You
- Markor

### Keyboard
- Unexpected Keyboard

### Privacy
- Tracker Control
- URLCheck

### Launcher
- Dragon Launcher
- Pie Launcher
- Niagara Launcher

### Terminal emulator
- Termux
- Termux: X11

### Communication
- Thunderbird
- Signal

### Fun
- Shader Editor
- PlantNet


Last updated on {{< lastmodified >}}.  
