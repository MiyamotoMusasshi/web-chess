import type { Coordinates } from "@/types/chess";
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
}
