import type { Coordinates, Move } from "@/types/chess";
import type { CoordinatesX } from "@/types/chess";
import type { CoordinatesY } from "@/types/chess";
import type { PieceType } from "@/types/chess";
import type { Color } from "@/types/chess";
import { Figure } from "./figure";

export class King extends Figure {
  public hasMoved(
    figures: Figure[],
    isProtection: boolean = false,
    atackedCells: Coordinates[],
  ): Coordinates[] {
    const moves: Coordinates[] = [];

    let xNumber = this.xMap.indexOf(this.getCordinates().x);
    let yNumber = this.getCordinates().y;

    for (let directionX = -1; directionX < 2; directionX++) {
      for (let directionY = -1; directionY < 2; directionY++) {
        let possibleX = xNumber + directionX;
        let possibleY = yNumber + directionY;

        const isBlocked = figures.some((figure) => {
          return (
            this.xMap.indexOf(figure.getCordinates().x) == possibleX &&
            possibleY == figure.getCordinates().y
          );
        });

        const isAtacked = atackedCells.some((cell) => {
          return this.xMap[possibleX] == cell.x && possibleY == cell.y;
        });

        const isOppositeColor = figures.some((figure) => {
          return (
            this.xMap.indexOf(figure.getCordinates().x) == possibleX &&
            possibleY == figure.getCordinates().y &&
            this.getColor() != figure.getColor()
          );
        });

        if (
          !isBlocked &&
          possibleX >= 0 &&
          possibleX <= 7 &&
          possibleY >= 1 &&
          possibleY <= 8 &&
          !isAtacked
        ) {
          moves.push({
            x: this.xMap[possibleX],
            y: possibleY as CoordinatesY,
          });
        } else if (
          (isBlocked && isOppositeColor && !isAtacked) ||
          (isBlocked && isProtection && !isOppositeColor)
        ) {
          moves.push({
            x: this.xMap[possibleX],
            y: possibleY as CoordinatesY,
          });
        }
      }
    }

    return moves;
  }

  isCastlingSmall(
    figures: Figure[],
    atackedCells: Coordinates[],
    moves: Move[],
    color: Color,
  ): Coordinates[] {
    const availableMoves: Coordinates[] = [];

    const isNEmptyCells = figures.some((figure) => {
      return (
        (figure.getCordinates().x == "f" &&
          (color == "white"
            ? figure.getCordinates().y == 1
            : figure.getCordinates().y == 8)) ||
        (figure.getCordinates().x == "g" &&
          (color == "white"
            ? figure.getCordinates().y == 1
            : figure.getCordinates().y == 8))
      );
    });

    const isMoves = moves.some((move) => {
      return (
        (move.type == "king" && move.color == color) ||
        (move.type == "rook" &&
          move.color == color &&
          move.from ==
            (color == "white"
              ? ({ x: "h", y: 1 } as Coordinates)
              : ({ x: "h", y: 8 } as Coordinates)))
      );
    });

    const isAtackedCells = atackedCells.some((cell) => {
      return (
        (cell.x == "e" && (color == "white" ? cell.y == 1 : cell.y == 8)) ||
        (cell.x == "f" && (color == "white" ? cell.y == 1 : cell.y == 8)) ||
        (cell.x == "g" && (color == "white" ? cell.y == 1 : cell.y == 8)) ||
        (cell.x == "h" && (color == "white" ? cell.y == 1 : cell.y == 8))
      );
    });

    if (!isNEmptyCells && !isMoves && !isAtackedCells) {
      availableMoves.push(
        color == "white"
          ? ({ x: "g", y: 1 } as Coordinates)
          : ({ x: "g", y: 8 } as Coordinates),
      );
    }
    return availableMoves;
  }

  isCastlingBig(
    figures: Figure[],
    atackedCells: Coordinates[],
    moves: Move[],
    color: Color,
  ): Coordinates[] {
    const availableMoves: Coordinates[] = [];

    const isNEmptyCells = figures.some((figure) => {
      return (
        (figure.getCordinates().x == "b" &&
          (color == "white"
            ? figure.getCordinates().y == 1
            : figure.getCordinates().y == 8)) ||
        (figure.getCordinates().x == "c" &&
          (color == "white"
            ? figure.getCordinates().y == 1
            : figure.getCordinates().y == 8)) ||
        (figure.getCordinates().x == "d" &&
          (color == "white"
            ? figure.getCordinates().y == 1
            : figure.getCordinates().y == 8))
      );
    });

    const isMoves = moves.some((move) => {
      return (
        (move.type == "king" && move.color == color) ||
        (move.type == "rook" &&
          move.color == color &&
          move.from ==
            (color == "white"
              ? ({ x: "a", y: 1 } as Coordinates)
              : ({ x: "a", y: 8 } as Coordinates)))
      );
    });

    const isAtackedCells = atackedCells.some((cell) => {
      return (
        (cell.x == "a" && (color == "white" ? cell.y == 1 : cell.y == 8)) ||
        (cell.x == "b" && (color == "white" ? cell.y == 1 : cell.y == 8)) ||
        (cell.x == "c" && (color == "white" ? cell.y == 1 : cell.y == 8)) ||
        (cell.x == "d" && (color == "white" ? cell.y == 1 : cell.y == 8)) ||
        (cell.x == "e" && (color == "white" ? cell.y == 1 : cell.y == 8))
      );
    });

    if (!isNEmptyCells && !isMoves && !isAtackedCells) {
      availableMoves.push(
        color == "white"
          ? ({ x: "c", y: 1 } as Coordinates)
          : ({ x: "c", y: 8 } as Coordinates),
      );
    }

    return availableMoves;
  }
}
