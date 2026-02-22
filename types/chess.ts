import { King } from "@/shapes/King";
import { Queen } from "@/shapes/Queen";
import { Bishop } from "@/shapes/Bishop";
import { Horse } from "@/shapes/Horse";
import { Rook } from "@/shapes/Rook";
import { Pawn } from "@/shapes/Pawn";
import { Figure } from "@/shapes/figure";

export type CoordinatesY = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type CoordinatesX = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type Coordinates = { x: CoordinatesX; y: CoordinatesY };
export type Color = "black" | "white";
export type PieceType =
  | "pawn"
  | "rook"
  | "king"
  | "bishop"
  | "queen"
  | "king"
  | "horse";

export interface Move {
  from: Coordinates;
  to: Coordinates;
  type: PieceType;
  color: Color;
}

export const renderFigures = {
  "king": "♚",
  "queen": "♛	",
  "rook": "♜",
  "bishop": "♝",
  "horse": "♞",
  "pawn": "♟",
};

export const figures: Figure[] = [
  new King({ x: "e", y: 1 }, "white", "king"),
  new Queen({ x: "d", y: 1 }, "white", "queen"),
  new Bishop({ x: "c", y: 1 }, "white", "bishop"),
  new Bishop({ x: "f", y: 1 }, "white", "bishop"),
  new Horse({ x: "b", y: 1 }, "white", "horse"),
  new Horse({ x: "g", y: 1 }, "white", "horse"),
  new Rook({ x: "a", y: 1 }, "white", "rook"),
  new Rook({ x: "h", y: 1 }, "white", "rook"),
  new Pawn({ x: "a", y: 2 }, "white", "pawn"),
  new Pawn({ x: "b", y: 2 }, "white", "pawn"),
  new Pawn({ x: "c", y: 2 }, "white", "pawn"),
  new Pawn({ x: "d", y: 2 }, "white", "pawn"),
  new Pawn({ x: "e", y: 2 }, "white", "pawn"),
  new Pawn({ x: "f", y: 2 }, "white", "pawn"),
  new Pawn({ x: "g", y: 2 }, "white", "pawn"),
  new Pawn({ x: "h", y: 2 }, "white", "pawn"),
  new King({ x: "e", y: 8 }, "black", "king"),
  new Queen({ x: "d", y: 8 }, "black", "queen"),
  new Bishop({ x: "c", y: 8 }, "black", "bishop"),
  new Bishop({ x: "f", y: 8 }, "black", "bishop"),
  new Horse({ x: "b", y: 8 }, "black", "horse"),
  new Horse({ x: "g", y: 8 }, "black", "horse"),
  new Rook({ x: "a", y: 8 }, "black", "rook"),
  new Rook({ x: "h", y: 8 }, "black", "rook"),
  new Pawn({ x: "a", y: 7 }, "black", "pawn"),
  new Pawn({ x: "b", y: 7 }, "black", "pawn"),
  new Pawn({ x: "c", y: 7 }, "black", "pawn"),
  new Pawn({ x: "d", y: 7 }, "black", "pawn"),
  new Pawn({ x: "e", y: 7 }, "black", "pawn"),
  new Pawn({ x: "f", y: 7 }, "black", "pawn"),
  new Pawn({ x: "g", y: 7 }, "black", "pawn"),
  new Pawn({ x: "h", y: 7 }, "black", "pawn"),
];
