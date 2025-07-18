---
title: "A Chess Puzzle"
subtitle: "How many chess pieces can you place so no piece attacks any other piece?"
summary: "How many chess pieces can you place so no piece attacks any other piece?"

tags: ["chess"]

date: 2021-04-06T00:30:00+05:30
lastmod: 2021-04-06T00:30:00+05:30

math: true

draft: false
featured: false

image:
  preview_only: true

---


For the second puzzle, we have a chess puzzle!

{{< note >}}
Recall how chess pieces move:
- Rooks move in straight lines up, down, left, or right. 
- Bishops can move diagonally. 
- Queens can move up, down, left, right, or diagonally. 
- Kings can move one step in any direction. 
- Pawns attack forward-left or forward-right.
- Knight move in an L-shaped pattern. Two steps forward and one step sideways.

You can practice the pieces' movements on [lichess.org](https://lichess.org/learn).
{{< /note >}}

## The Problem
You are trying to place as many white pieces on the board as possible such that no piece attacks any other piece. 
For the sake of this problem, assume that pieces can attack other pieces of the same colour. 

{{< note title="Tip" >}}
You may find it helpful to play around with pieces on a board on the [lichess board editor](https://lichess.org/editor/8/8/8/8/8/8/8/8_w_-_-_0_1).
{{< /note >}}

Here are 7 variants of this problem:

### 1
What is the maximum number of rooks you can place on a \(8\times 8\) chessboard such that no two rooks attack each other?
<img src="white-rook.svg" class="float-right"/>

{{< chessboard fen="6R/2R/8/6R/1R/3R/5R/8" caption="This arrangement does not work because the rooks on g5 and g8 attack each other." >}}

### 2
What is the maximum number of knights you can place on an \(8 \times 8\) chessboard such that no two knights attack each other? 
<img src="white-knight.svg" class="float-right"/>


### 3
What is the maximum number of bishops you can place on an \(8\times 8\) chessboard such that no two bishops attack each other?
<img src="white-bishop.svg" class="float-right"/>

### 4
What is the maximum number of kings you can place on an \(8\times 8\) chessboard such that no two kings attack each other?
<img src="white-king.svg" class="float-right"/>

### 5
What is the maximum number of pawns you can place on an \(8 \times 8\) chessboard such that no pawn attacks any other pawn? 
<img src="white-pawn.svg" class="float-right"/>

### 6
What is the maximum number of queens you can place on an \(8 \times 8\) chessboard such that no two queens attack each other? 
<img src="white-queen.svg" class="float-right"/>



### 7
What is the maximum number of chess pieces you can place on an \(8\times 8\) chessboard such that no piece attacks any other piece? You are free to use kings, queens, rooks, bishops, knights, and pawns. 
<div align=center>
<img src="white-king.svg"/>
<img src="white-queen.svg"/>
<img src="white-rook.svg"/>
<img src="white-bishop.svg"/>
<img src="white-knight.svg"/>
<img src="white-pawn.svg"/>
</div>



{{% feedback %}}

---

[Chess pieces](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces) by [Cburnett](https://en.wikipedia.org/wiki/User:Cburnett) are licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.en). 
