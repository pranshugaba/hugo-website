---
title: "Whose turn is it to play?"
subtitle: "Puzzle #3"
summary: "You are given a chess position. Can you determine whose turn it is to play?"

number: 3

date: 2022-02-01T12:30:00+05:30
lastmod: 2022-02-01T12:30:00+05:30

tags: ["chess"]

math: true

draft: true
featured: false
---


We have another chess puzzle!

{{< note >}}
If you are not familiar with the rules of chess, then you can [read the rules on Wikipedia](https://en.wikipedia.org/wiki/Rules_of_chess) or [practice playing on lichess.org](https://lichess.org/learn).
{{</ note >}}

## The Problem

You are organising a chess tournament. 
The games had just started when the clock struck one, and all players promptly left their games and headed for lunch! When they returned, they found to their dismay, they had all forgotten whose turn it was to play. 
Can you help them out?

For each game, you know only the positions of the pieces and nothing else. From this information alone, you need to decide whether it's White or Black to play next. 
You may assume that the players have been playing legal chess moves, but not necessarily optimal ones.

"Is this even possible?", you ask. 
Does a chess position have the information required to deduce which player plays next?  This is what you will try to reason out.  

For each of the following games, find which one of the following statements holds:
- It must be White's turn to play
- It must be Black's turn to play
- It could be either White or Black to play
- It is an impossible position. (i.e. One cannot reach this position by playing legal moves only. Someone might have disturbed the board.)


{{< toc >}}

### Game 1
Here's Game 1 of the tournament. This position looks like the initial position of a game. 

{{< chessboard fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" caption="All pieces are in the initial position.">}}

It might well be the case that the game hasn't started, in which case it would be White to move.
The question remains: Is it possible for this position to be Black to move?

We need to first see if it is necessarily true that the game hasn't started. Could it be the case that the players played some moves and then arrived back at this initial position? 
If not, then we are done. Otherwise, we need to find out if there exists some sequence of moves that results in this position where it's Black to move.

### Game 2
Isn't White supposed to play first? Is this position even posible? Whose turn is it to play?

{{< chessboard fen="rnbqkbnr/pppp1ppp/4p3/8/8/8/PPPPPPPP/RNBQKBNR" >}}

### Game 3
In this game, the knights are huddled in the center.
Whose turn is it to play?

{{< chessboard fen="r1bqkb1r/pppppppp/8/2Nn4/2nN4/8/PPPPPPPP/R1BQKB1R" >}}


### Game 4
One of Black's knights has vanished from the board! 
Whose turn is it to play?

{{< chessboard fen="rnbqkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" >}}

### Game 5
All the knights are gone!
Whose turn is it to play?
{{< chessboard fen="r1bqkb1r/pppppppp/8/8/8/8/PPPPPPPP/R1BQKB1R" >}}

### Game 6
Uh-oh! Black is in trouble. Black has down a lot of material.
Whose turn is it to play?

{{< chessboard fen="2bqkb2/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" >}}

### Game 7
This position is almost identical to the initial position, except that a pawn has moved. 
Whose turn is it to play?

{{< chessboard fen="rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR" >}}


### Game 8
Whose turn is it to play?

{{< chessboard fen="rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR" >}}

### Game 9
White might be preparing for [Fool's mate](https://en.wikipedia.org/wiki/Fool%27s_mate) here.
Whose turn is it to play?

{{< chessboard fen="rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR" >}}

### Game 10
The knight has forked Black's rook and queen!
Whose turn is it to play?

{{< chessboard fen="rnbqkbnr/pppppNpp/8/8/8/8/PPPPPPPP/R1BQKBNR" >}}

### Game 11
Here's the final position in this puzzle. The knights are back and have dispersed out.
Whose turn is it to play?
Be careful: this is a tricky one! 

{{< chessboard fen="r1bqkb1r/pppppppp/3N4/6n1/2n2N2/7P/PPPPPPP1/R1BQKB1R" >}}

## Hints

If you have spent some time thinking about this problem and need some help to proceed, then these hints might be helpful. (Click on a hint to reveal)

{{< hint title="Hint 1" >}}
Given a chess position, how do we show that it's White's turn to play next?
We must show that for all sequences of legal moves that result in the given position, the last move of the sequence must have been played by Black. That would mean that it's White to move in the given position. Moreover, we must also show that at least one such sequence exists. 

Showing that a position is Black to play uses similar reasoning.

How do we show that a position could be either White to move or Black to move? This case is simpler. It is sufficient to show two sequences of legal moves that result in the given position: one ending with a move played by White, and the other ending with a move by Black. There's no way of knowing from the position alone which player must play next, and therefore, the position could be either White or Black to play in the game.

Some positions are impossible in chess. That is, there does not exist any sequence of legal moves that result in the position. To show that a position is impossible, we must show exactly this: There does not exist any sequence of legal moves that results in the position.
{{</ hint >}}

{{< hint title="Hint 2" >}}
At any point of time in a game, look at the parities of the number of moves played by White and the number of moves played by Black. What does it mean if both are odd? What happens when one is odd and one is even?
{{</ hint>}}

## Generalisation

Can you find a nice and simple characterization for positions that must be White to play?
What are the necessary and sufficient conditions for a position to be necessarily White to play? 

Can you come up with a fast algorithm to decide whether a given position is White to play, Black to play, either, or none?

It might help if you try out more positions. 
If you have access to a physical chess board, that's great! Otherwise, you can play with the board online on the [Lichess board editor](https://lichess.org/editor).


{{% puzzles/feedback %}}