---
title: "A Topology of Infinite Games"
subtitle: ""
summary: ""

date: 2022-01-26T17:30:00+05:30
lastmod: 2022-01-26T17:30:00+05:30

tags: ["topology", "cantor-set", "games"]

math: true

draft: true
featured: false
---

I recently read a paper titled _Infinite Games with Perfect Information_ written by Gale and Stewart in 1953. In this paper, they consider two-player games that may go on forever. There is no hidden information: both player know the rules and the state of the game at all times. 

The players may have strategies that to determine how they play when it's their turn. A player has a _winning strategy_ if they will always win irrespective what strategy the other player employs. Of course, it is not possible for both players to have a winning strategy. However, a surprising result is that there exist games where neither of the players has a winning strategy. 

They showed that there exist games that are not strictly determined. They then tried to characterize games that are determined. I found this really interesting, and I want to share some of the results from the paper.    

## Representing games as trees

A game is represented by an infinite rooted tree $T$. Each vertex of the tree corresponds to a position of the game. Each vertex belong to either player 1 or player 2. A play of the game corresponds to an infinite traversal of states in the tree. 

An objective for player 1 is a set of plays. 

{{< insert-svg filename="states" caption="An example of a rooted tree.">}}

## An infinite game that is not determined

## A topology of games

---

If you found this interesting, I recommend that you give the original paper a read. A follw up is a paper by Donald Martin where he proves that all Borel games are determined. 