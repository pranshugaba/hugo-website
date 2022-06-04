---
title: 'Zero Shadow Day'
subtitle: 'No shadows today at local noon (in some parts of the world)'
summary: 'An interesting phenomenon that occurs only twice a year (or maybe not at all depending on where you live)'

date: 2022-05-15T12:35:00+05:30
lastmod: 2022-05-15T12:35:00+05:30

tags: ['astronomy', 'mumbai']

location:
  name: Mumbai, India
  coords: [19.0769, 72.8761]

math: true

draft: false
featured: false
---

When the clock strikes twelve during the day, we say it's noon. We may perceive this to be the time when the Sun is at its highest point in the sky. However, this is rarely, if ever, true.

To avoid confusion, let's say when the clock reads 12:00, it is _noon_, and when the Sun is at its highest, it is _local noon_. It will soon be clear why it's called it local noon.

## Why is noon not the same as local noon?

The earth rotates about its axis, making a complete turn every 24 hours. Because of this, we see the Sun rise and set every day. The Earth rotates from west to east, so the Sun appears to rise in the east and set in the west.

Places that are in the east experience events like sunrise and sunset before places in the west. Consider Mumbai and Pune, two cities in Maharashtra, India. Because Pune is roughly 1 degree east of Mumbai, the day begins and ends in Pune slightly earlier than it does in Mumbai. We can calculate how much earlier:

The Earth rotates about 360 degrees in 24 hours[^sidereal]. Dividing 24 hours by 360 tells us that the Earth rotates 1 degree in 4 minutes. It follows that local noon in Pune is 4 minutes before local noon in Mumbai. You can find out the sunrise and sunset times in these two cities and verify that these events occur 4 minutes earlier in Pune compared to Mumbai.

[^sidereal]: Actually, the Earth rotates slightly more than 360 degrees in 24 hours. It completes a full rotation in roughly 23 hours, 56 minutes, and 4 seconds. However, since the Earth is also orbiting the sun, it needs to rotate a bit more for the sun to be overhead again. You can read the Wikipedia pages of [sidereal day](https://en.wikipedia.org/wiki/Sidereal_time) and [synodic day](https://en.wikipedia.org/wiki/Synodic_day) for more information. Since we are interested in the time at which local noon occurs, we will consider synodic period.

India is a big country; it is the seventh largest in the world by area. It spans about 30 degrees from west to east. The westernmost point of India is Sir Creek, Gujarat at 68 degrees east of the [prime meridian](https://en.wikipedia.org/wiki/Prime_meridian) (the meridian that passes through Greenwich, London and is taken to be the zero longitude), and the easternmost point of India is in Arunachal Pradesh at 97.5 degrees east of the prime meridian. As a result, Arunachal Pradesh is about 2 hours ahead of Gujarat. Indeed, local noon is at 10:27 AM in Arunachal Pradesh and at 12:24 PM in Gujarat today.

Since all of India follows the same timezone (Indian Standard Time UTC+05:30), it follows that local noon does not occur at noon in most places.
The time at which local noon occurs at a place depends on the difference between the longitude of that place and the longitude corresponding to the timezone offset of that place.

In particular, given the timezone offset and the longitude of a place, the following formula calculates when local noon occurs there:
$$LN(z, \ell) = \left( \frac{z}{24}  - \frac{\ell}{360} \right) \times 24 \times 60$$
Here,

- $z$ is the timezone offset of the place. It is the number of hours the local timezone is ahead of UTC. It is a number between -12 and +12.
- $\ell$ is the longitude of the place. It must be a number between -180 and +180.
- $LN(z, \ell)$ is the number of minutes after 12:00 that local noon occurs at. If this value is negative, then local noon occurs before 12:00.

We can look at an example. The timezone in Mumbai is +5:30, so we have $z_{\text{Mumbai}} = 5.5$. The longitude of Mumbai is 72.8 degrees east, therefore, $l_{\text{Mumbai}} = 72.8$. Substituting these values in the above formula gives
$$ LN(5.5, 72.8) = \left( \frac{5.5}{24} - \frac{72.8}{360} \right) \times 24 \times 60,$$
which is approximately equal to 38. This tells us that local noon in Mumbai should be around 12:38 PM.

Why does this formula work? The difference in the parentheses indicates a fraction of Earth's complete rotation. The term $\frac{z}{24}$ is the fraction of a rotation that timezone is ahead of UTC, and $\frac{\ell}{360}$ is the fraction of a rotation that the longitude is ahead of the prime meridian.
The difference shows the fraction of a turn that Earth must rotate for the longitude of the place to reach the longitude corresponding to the timezone of the place.

We multiply this difference by $24 \times 60$ to convert the fraction into minutes (since there are $24 \times 60$ minutes in a day). This formula also agrees with the observation we made: the further east you go in the same timezone, the earlier local noon occurs.

The formula makes one assumption. It assumes that if the difference $\frac{z}{24} - \frac{\ell}{360}$ at a place is zero, then $LN(z, \ell)$ is also zero there, and local noon coincides with noon.
Is this a valid assumption to make?

For every timezone, there exists a longitude for which this difference is zero. We call this the longitude corresponding to the timezone, and it is equal to $\frac{z}{24} \times 360$.
For example, the longitude corresponding to the Indian timezone is
$$\frac{5.5}{24} \times 360,$$
which is equal to $82.5^{\circ} \text{E}$.
The city of Vindhyachal in Uttar Pradesh, India lies on the 82.5 degrees east meridian.
Is it true that local noon is at 12:00 everyday in Vindhyachal?
Equivalently, is local noon in Mumbai at 12.38 PM everyday?
The answer to these questions is no, it's not that simple.

### Local noon also depends on the time of the year

It turns out that local noon at a place changes from day to day across the year. In Mumbai, it ranges between 12.10 PM and 12.40 PM over the course of the year.[^local-noon-calendar]
Why does this happen?

[^local-noon-calendar]: You can find when local noon occurs at your place on any day of the year at <http://www.solar-noon.com/>.

The answer has got to do with the eccentricity of Earth's orbit. The orbit of the Earth is not perfectly circular, but is slightly squished. Kepler found out that Earth's orbit is elliptical with the Sun at one of the ellipse's foci. The distance between the Earth and the Sun increases and decreases over the course of a year. Kepler also observed that the line joining the Earth and the Sun, the area that it sweeps per unit time is constant and is independent of where Earth is on the ellipse. Therefore, when the Earth is closer to the Sun, it moves faster, and when it is further away, it moves slower.

This means that the time between two consecutive local noons at a place is not always 24 hours. When the Earth is closer to the Sun and it moves faster, after it makes one complete rotation, it overshoots the sun by a greater amount, and thus must rotate by a greater angle for it to be local noon again. The gap between two local noons is longer. Conversely, when the Earth is further from the Sun and it is moving slowly, it overshoots the Sun by a smaller amount, and must rotate by a smaller angle for the Sun to become overhead again. Local noons are closer together during this time.

It would be quite inconvenient if the length of the day was different everyday, and some days of the year were shorter than others. The solution that people came up with was to take the average length of the day and have the day be that long every day. We took the total time duration of the year, and divided it into 365 equal parts (366 in leap years). This way, every day is 24 hours long.
The downside of this approach is that local noon time changes from day to day, but that's not an issue for most of us.

## Shadow length at local noon

Okay, so say you have found out the time of local noon at your place today. In Mumbai, it is at 12.20 PM today.
At local noon, the Sun would be overhead, the highest it will ever be in the day, and this is the time of the day when your shadow will be the shortest.
Does this necessarily mean that your shadow will be exactly below your feet and therefore, not visible at all? The answer is no, you will still be able to see a shadow of yourself in most places.

At any time, there is a meridian --- a semicircle joining the north and the south poles on the surface of the Earth --- where it is local noon.
This "meridian of local noon" constantly shifts west as the Earth rotates about its axis.
This is the meridian passing through the point on Earth that is closest to the Sun.
You can convince yourself that the closest point is also the unique point on Earth's surface that lies on the line segment joining the centres of the Earth and the Sun. This point is also known as the subsolar point of Earth.

If you are on the meridian where it's currently local noon, then the Sun would be neither east nor west. You would see that your shadow has no component in the east-west direction.

Furthermore, if you are at the point that is closest to the sun, then the Sun be exactly overhead above you, and your shadow will not have any component in the north-south direction either. For a moment, you will experience the "Zero Shadow" effect. Shadows of objects would be exactly below them giving the illusion that they don't have shadows at all.
Things looks surreal; it feels like you are in a video game where the shadows did not render.

At all other points on the "meridian of local noon", the Sun will be to the north or south depending on whether you are to the south or the north of the subsolar point. Any object will cast a shadow in the north-south direction even at local noon.

## Latitudes where Zero Shadow is observed

The Earth rotates about its axis and revolves around the Sun. If the Earth's axis was perpendicular to the plane of Earth's orbit, then at any given time, the location on Earth closest to the Sun would lie on the Equator. Only places on the equator would experience Zero Shadow (and they would do so everyday) and no other latitude would ever experience the Zero Shadow effect.

However, Earth's axis is not perpendicular to plane of Earth's orbit. Earth's axis makes an angle of 23.5 degrees with the plane of Earth's orbit. Because of this, the latitude of the subsolar point moves between 23.5 degrees north and 23.5 degrees south through the course of a year. These latitudes are also known as Tropic of Cancer and Tropic of Capricorn respectively.

On the summer solstice (June 21), the subsolar point lies on the Tropic of Cancer (23.5 degrees north), and on the winter solstice (December 21), the subsolar point lies on the Tropic of Capricorn (23.5 degrees south). Throughout the rest of the year, the latitude of Zero Shadow moves between the tropics.

The day when Zero Shadow is observed at a place is called "Zero Shadow Day".
All places that lie between the Tropic of Cancer and Tropic of Capricorn experience Zero Shadow Day twice a year.
The tropics observe Zero Shadow Day only once a year. The Tropic of Cancer sees Zero Shadow Day on the summer solstice and the Tropic of Capricorn sees it on the winter solstice.
Places outside the tropics never observe Zero Shadow Day as the Sun can never be overhead those places.

### Zero Shadow Day in Mumbai

I stay in Mumbai, which is at latitude $19.1^{\circ} \text{N} $. At this latitude, the Zero Shadow Days are 15 May and 28 August.
Around local noon, (which happens to be around 12.20 PM), if it is sunny, we will get to experience Zero Shadow.

It usually rains in Mumbai in August. The sky is covered with grey clouds which diffuse the sunlight, and objects don't have distinct shadows. In a way, this is also "Zero Shadow", but there is no interesting astronomical phenomenon at play here.

### Zero Shadow Day at your location

[This site by Alok Mandavgane](https://alokm.com/zsd.html) shows the Zero Shadow Days of any place on Earth. You can double click on a point on a map to see which days are Zero Shadow Days there.
[They have made an Android app](https://play.google.com/store/apps/details?id=com.alokm.zsd) as well that you can play with.

## Further Reading

When, if at all, are the Zero Shadow Days at your place? Click some pictures on Zero Shadow Day and share them!
If you liked this post, [let me know]({{< ref "/contact" >}}) and share it with your friends.
It encourages me to write more.


If you found this topic interesting and would like to read more about it, here are some links for you:

- [Equation of Time](https://en.wikipedia.org/wiki/Equation_of_time)
- [Sundials](https://en.wikipedia.org/wiki/Sundial)
- [Subsolar point](https://en.wikipedia.org/wiki/Subsolar_point)
