export type CoordinatesY = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type CoordinatesX = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type Coordinates = { x: CoordinatesX; y: CoordinatesY };
export type Color = "black" | "white";
export type PieceType =
  | "pawn"
  | "rook"
  | "knight"
  | "bishop"
  | "queen"
  | "king"
  | "horse";
