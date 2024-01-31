---
title: 'An Introduction to Gale-Stewart Games'
subtitle: 'A way to represent games as trees'
summary: 'A way to represent games as trees'

date: 2022-06-09T17:30:00+05:30
lastmod: 2022-06-09T17:30:00+05:30

tags: ['game-theory']

math: true

draft: true
featured: false
---

I recently read a 1953 paper on _Infinite Games with Perfect Information_ by Gale and Stewart[^gs53]. In this paper, they look at two-player games with perfect information and ask when is such a game determined. That is, does one of the players have a strategy such that they always win, irrespective of how the other player plays?

In this article, I share some results from the paper that I found interesting.
They showed that all finite games are determined, but there exist infinite games that are not determined.

{{% toc %}}

## Introduction

Why are we interested in studying games? The answer is simple: It's because games are fun! We have been playing games for millenia. When we are playing a game, we sure would like to win. If we study games, we can better understand how the game works, and what would be a good strategy to win it. But, first, we should ask is it even possible to win? Or is the game rigged against you. Determining whether it is possible to win will be the main concern for us in this article.

Here are some examples of games:

- Chess
- Checkers
- Go
- Nim
- Tic-tac-toe

Here are some more:

- Poker
- Battleship
- Ludo
- Snakes and ladders
- Stone, Paper, Scissors

In this article, we will only look at games of the first kind. In particular, we want games that satisfy the following five properties:

- _two-player:_ The games are played by two players: Player 1 and Player 2. We will call them \(\mathcal{P}_1\) and \(\mathcal{P}_2\) for short.
- _turn-based:_ The moves are made turn by turn, and not simulataneously. Note that we don't require the turns to alternate between players. It is possible for the same player to play multiple turns in a row. Stone, Paper, Scissors is an example of simultaneous moves.
- _perfect information:_ This means that no information is hidden from the players. Both players know the rules and the state of the game at all times. This excludes games like Poker and Battleship.
- _no chance moves:_ There is no luck involved in the game. The way the game proceeds is completely determined by the initial position and the decisions taken by the players. We rule out games such as Snakes and Ladders, Ludo, and Catan where dice are rolled or cards are drawn.
- _zero sum:_ If one player wins, then the other player loses. We will not allow ties / draws. You may object: chess does have draws. We can resolve this issue by redefining the game. We may say that if the game is a draw, then it is a victory for Black.

## Game trees

Games can be quite varied. Chess is quite different from Nim. We will develop a definition of a game that will abstract away the extraneous details and focus on the underlying structure of the games.

We will define a game to be a _rooted tree_ \(T\). We now describe what the vertices and the edges of the tree represent.

### States

The vertices of \(T\) correspond to the _states_ of the game.

We think of a game as a set of states and some relation between them. The game begins in an initial state. One of the players plays a turn, and that changes the state of the game to a new state.

A game can be thought of as a set of states \(X\). A state (also called position or configuration) contains information about the history of moves that the players have played so far in order to reach the current state.
As a game is played, the game goes through different states.

We partition the set \(X\) into two sets: \(X_1\) and \(X_2\). If the game is in state \(x\), and \(x \in X_i\), then it is Player \(i\)'s turn to play next.

It will be convenient to represent this information as a directed graph \(T\). The vertices of the graph are the states of the game.
Let \(x_0\) be the initial state of the game.

### Plays

In addition to the set of states, we also need a set of rules to describe the rules of the game. The rules tell us that if the game is in state \(x\), then what are the possible next states the game could go to. In order words, theses are the legal moves available to the players.

### Objectives

### Strategies

For each state \(x\), if there is a legal move that move the game to a different state \(x'\), then the graph has an directed edge from \(x\) to \(x'\). The out-neighbours of \(x\) are all the states that one is allowed to go to from \(x\).
Note that \(x_0\) has no in-edges. All other states have exactly one in-edge each.

For each state \(x\) that is not the initial state, we denote by \(f(x)\) the _predecessor state_ of \(x\). That is, if the game is in state \(x\), then it must have been in state \(f(x)\) in the previous turn. Now, for each state \(x\), the inverse \(f^{-1}(x)\) denotes the set of states that can be the next-states of \(x\).

We will look at both finite games and infinite games. Finite games are those that end after finitely many moves, whereas infinite games go on for infinitely many moves. Most games that we play end are finite.

For each state \(x\) in \(X\), there is exactly one path from \(x_0\) to \(x\) in the graph. We can find this path by repeatedly applying \(f\) starting from \(x\) until we eventually reach \(x_0\). Therefore, the graph \(T\) is a tree rooted at \(x_0\). The notation \(T\) now makes sense.

{{< insert-svg filename="states" caption="An example of a rooted tree.">}}

The game begins at the root, and the player whose turn it is to play picks a neighbour to move the state to.

If the game is in state \(x\), and \(x \in X_i\), then Player \(i\) picks a state from \(f^{-1}(x)\).

A _play_ of the game corresponds to a traversal of states in the tree starting from \(x_0\). Let \(S\) denote the set of all plays.

For example in chess, the state of the game is completely described by the position of the pieces, whether the players have castled, and whose turn it is to play next. Unlike chess, we do not require that both players play alternating turns in our games.

An _objective_ for a player is a set of plays. Out of the many directed paths in the game tree \(T\), each player has a subset of these that they would like to follow. Let \(S_1\) denote the objective of Player 1 and \(S_2\) denote the objective set of Player 2.
A special interest are _zero-sum_ games. Player 1 wins if and only if Player 2 doesn't. We can write this as \(S_1 = S \setminus S_2\).

The players have _strategies_ that determine how they would play when it's their turn. A strategy of Player 1 is a function \(\sigma \colon X_1 \to X\).

A player has a _winning strategy_ if they can always win irrespective of which strategy the other player employs. It is not possible for both players to have a winning strategy. However, a surprising result is that there exist games where neither of the players has a winning strategy.


[^gs53]: Gale, David and Stewart, F. M.. "13. Infinite Games with Perfect Information". _Contributions to the Theory of Games, Volume II_, Princeton University Press, 1953, pp. 245-266. https://doi.org/10.1515/9781400881970-014
