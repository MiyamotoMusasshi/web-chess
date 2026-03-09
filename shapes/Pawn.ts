import type { Coordinates } from "@/types/chess";
import type { CoordinatesX } from "@/types/chess";
import type { CoordinatesY } from "@/types/chess";
import type { PieceType } from "@/types/chess";
import type { Color } from "@/types/chess";
import { Move } from "@/types/chess";
import { Figure } from "./figure";

export class Pawn extends Figure {
  public hasMoved(
    figures: Figure[],
    isProtection: boolean = false,
  ): Coordinates[] {
    const moves: Coordinates[] = [];

    let xNumber = this.xMap.indexOf(this.getCordinates().x);

    const direction = this.getColor() == "white" ? 1 : -1;
    const startRow = this.getColor() == "white" ? 2 : 7;

    const newY = this.getCordinates().y + direction;

    if (newY <= 8 && newY >= 1 && !isProtection) {
      const isBlocked = figures.some((figure) => {
        return (
          figure.getCordinates().y == newY &&
          figure.getCordinates().x == this.getCordinates().x
        );
      });

      if (!isBlocked) {
        moves.push({ x: this.getCordinates().x, y: newY as CoordinatesY });
      }

      if (this.getCordinates().y === startRow) {
        const newY2 = this.getCordinates().y + 2 * direction;

        const isBlocked2 = figures.some((figure) => {
          return (
            figure.getCordinates().y == newY2 &&
            figure.getCordinates().x == this.getCordinates().x
          );
        });

        if (!isBlocked2 && !isBlocked) {
          moves.push({ x: this.getCordinates().x, y: newY2 as CoordinatesY });
        }
      }
    }

    const captureMoves = [
      { x: xNumber - 1, y: this.getCordinates().y + direction },
      { x: xNumber + 1, y: this.getCordinates().y + direction },
    ];

    captureMoves.map((move) => {
      const targetFigure = figures.find((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == move.x &&
          move.y == figure.getCordinates().y &&
          figure.getColor() != this.getColor()
        );
      });

      if (targetFigure) {
        moves.push({
          x: this.xMap[move.x] as CoordinatesX,
          y: move.y as CoordinatesY,
        });
      }
      if (
        isProtection &&
        move.x < 8 &&
        move.x >= 0 &&
        move.y <= 8 &&
        move.y >= 1
      ) {
        moves.push({
          x: this.xMap[move.x] as CoordinatesX,
          y: move.y as CoordinatesY,
        });
      }
    });

    return moves;
  }

  isPassant(moves: Move[], figures: Figure[]): Coordinates | Object {
    let move = {};
    if (
      (this.getCordinates().y == 5 && this.getColor() == "white") ||
      (this.getCordinates().y == 4 && this.getColor() == "black")
    ) {
      const lastMove = moves[moves.length - 1];
      const isPotentialPassant = figures.find((figure) => {
        return (
          (this.xMap.indexOf(this.getCordinates().x) + 1 ==
            this.xMap.indexOf(figure.getCordinates().x) &&
          this.getColor() != figure.getColor() &&
          figure.getType() == "pawn" &&
          this.getColor() == "white"
            ? figure.getCordinates().y == 5
            : figure.getCordinates().y == 4) ||
          (this.xMap.indexOf(this.getCordinates().x) - 1 ==
            this.xMap.indexOf(figure.getCordinates().x) &&
          this.getColor() != figure.getColor() &&
          figure.getType() == "pawn" &&
          this.getColor() == "white"
            ? figure.getCordinates().y == 5
            : figure.getCordinates().y == 4)
        );
      });

      const isPotentialPassant2 =
        this.getColor() == "white"
          ? lastMove.from.y == 7 &&
            lastMove.type == "pawn" &&
            lastMove.color != this.getColor() &&
            lastMove.to.y == 5
          : lastMove.from.y == 2 &&
            lastMove.type == "pawn" &&
            lastMove.color != this.getColor() &&
            lastMove.to.y == 4;
      if (isPotentialPassant && isPotentialPassant2) {
        move = { x: lastMove.from.x, y: this.getColor() == "white" ? 6 : 3 };
      }
    }
    return move;
  }
}
