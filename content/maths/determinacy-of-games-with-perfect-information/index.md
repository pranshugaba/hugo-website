---
title: "Determinacy of Games with Perfect Information"
subtitle: ""
summary: "On the determinacy of two-player turn-based infinite games with perfect information"

date: 2022-03-09T17:30:00+05:30
lastmod: 2022-03-09T17:30:00+05:30

tags: ["topology", "game-theory"]

math: true

draft: false
featured: false
---

I recently read a 1953 paper on _Infinite Games with Perfect Information_ by Gale and Stewart[^GS53]. In this paper, they look at two-player games where both players have perfect information. Given such a game, they ask if one of the players has a winning strategy. That is, does one of the players have a strategy such that they always win, no matter how the other player plays? 

In this post, I share some results from the paper that I found interesting. 

Spoiler alert --- there do exist games in which neither player has a winning strategy. 


{{% toc %}}

## Overview 

In this paper, we only look at two-player turn-based games with perfect information and no chance moves. 

That was a mouthful. Let's look at it again, bit by bit.

- _two-player:_ We look at games played by two-players. They may be co-op or versus.
- _turn-based:_ The game proceeds in discrete steps. We can see the game as a sequence of turns played by the player. It does not necessarily have to alternate between the players. It is possible for the same player to play multiple turns in a row. 
- _perfect information:_ This means that no information is hidden from the players. Both players know the rules and the state of the game at all times. This excludes games like Poker and Battleship. 
- _no chance moves:_ There is no luck involved in the game. The way the game proceeds is completely determined by the initial position and the decisions taken by the players. We rule out games such as Snakes and Ladders, Ludo, and Catan where dice are rolled or cards are drawn. 

We will look at both finite games and infinite games. Finite games are those that end after finitely many moves, whereas infinite games go on for infinitely many moves. Most games that we play end are finite.
Chess, Checkers, Go, and Connect 4 are some examples of finite games, whereas games of cops and robbers is an example of an infinite game. 

We will now formally define a game. We will abstract away the extraneous details and focus on the underlying structure of the games.  

## Defining a game

It will be helpful to look at the _state_ of a game. 

We think of a game as a set of states and some relation between them. The game begins in an initial state. One of the players plays a turn, and that changes the state of the game to a new state. 

A game can be thought of as a set of states $X$. A state (also called position or configuration) contains information about the history of moves that the players have played so far in order to reach the current state.
As a game is played, the game goes through different states. 

We partition the set $X$ into two sets: $X_1$ and $X_2$. If the game is in state $x$, and  $x \in X_i$, then it is Player $i$'s turn to play next. 

In addition to the set of states, we also need a set of rules to describe the rules of the game. The rules tell us that if the game is in state $x$, then what are the possible next states the game could go to. In order words, theses are the legal moves available to the players. 

It will be convenient to represent this information as a directed graph $T$. The vertices of the graph are the states of the game. 
Let $x_0$ be the initial state of the game. 

For each state $x$, if there is a legal move that move the game to a different state $x'$, then the graph has an directed edge from $x$ to $x'$. The out-neighbours of $x$ are all the states that one is allowed to go to from $x$. 
Note that $x_0$ has no in-edges. All other states have exactly one in-edge each.

For each state $x$ that is not the initial state, we denote by $f(x)$ the _predecessor state_ of $x$. That is, if the game is in state $x$, then it must have been in state $f(x)$ in the previous turn. Now, for each state $x$, the inverse $f^{-1}(x)$ denotes the set of states that can be the next-states of $x$. 

For each state $x$ in $X$, there is exactly one path from $x_0$ to $x$ in the graph. We can find this path by repeatedly applying $f$ starting from $x$ until we eventually reach $x_0$. Therefore, the graph $T$ is a tree rooted at $x_0$. The notation $T$ now makes sense. 


{{< insert-svg filename="states" caption="An example of a rooted tree.">}}

The game begins at the root, and the player whose turn it is to play picks a neighbour to move the state to.

> If the game is in state $x$, and $x \in X_i$, then Player $i$ picks a state from $f^{-1}(x)$. 

A _play_ of the game corresponds to a traversal of states in the tree starting from $x_0$. Let $S$ denote the set of all plays. 

For example in chess, the state of the game is completely described by the position of the pieces, whether the players have castled, and whose turn it is to play next. Unlike chess, we do not require that both players play alternating turns in our games. 

An _objective_ for a player is a set of plays. Out of the many directed paths in the game tree $T$, each player has a subset of these that they would like to follow. Let $S_1$ denote the objective of Player 1 and $S_2$ denote the objective set of Player 2.
A special interest are _zero-sum_ games. Player 1 wins if and only if Player 2 doesn't. We can write this as $S_1 = S \setminus S_2$.

The players have _strategies_ that determine how they would play when it's their turn. A strategy of Player 1 is a function $\sigma \colon X_1 \to X$. 

A player has a _winning strategy_ if they can always win irrespective of which strategy the other player employs. It is not possible for both players to have a winning strategy. However, a surprising result is that there exist games where neither of the players has a winning strategy. 


## An infinite game that is not determined

The paper shows an example of a infinite game that is not determined. For every strategy $\sigma$ of Player 1, Player 2 has a strategy such that the resulting play is winning for Player 2. Similarly, no matter what strategy Player 2 picks, Player 1 has a strategy such that they win the game. In other words, none of the players have a winning strategy. The game goes as follows:


## A topology of games

We consider a topology generated by _cones_. 

## Some examples of determined games

Games in which the winning objective is an open set are determined. 

## What's next

If you found this interesting, I recommend that you give the original paper a read. You may also read a follow up paper by Donald Martin[^Mar75] where he proves that all Borel games are determined. 



[^GS53]: Gale, David and Stewart, F. M.. "13. Infinite Games with Perfect Information". _Contributions to the Theory of Games, Volume II_, Princeton University Press, 1953, pp. 245-266. https://doi.org/10.1515/9781400881970-014

[^Mar75]: Donald A. Martin. Borel determinacy. _Annals of Mathematics_, 102(2):363–371, 1975.
