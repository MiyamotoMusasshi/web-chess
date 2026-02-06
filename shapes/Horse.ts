import type { Coordinates } from "@/types/chess";
import type { CoordinatesX } from "@/types/chess";
import type { CoordinatesY } from "@/types/chess";
import type { PieceType } from "@/types/chess";
import type { Color } from "@/types/chess";
import { Figure } from "./figure";

export class Horse extends Figure {
  public hasMoved(figures: Figure[]): Coordinates[] {
    const moves: Coordinates[] = [];

    let xNumber = this.xMap.indexOf(this.getCordinates().x);
    let yNumber = this.getCordinates().y;

    for (let directionX = -2; directionX < 3; directionX++) {
      for (let directionY = -2; directionY < 3; directionY++) {
        if (
          Math.abs(directionX) != Math.abs(directionY) &&
          directionX != 0 &&
          directionY != 0
        ) {
          let possibleX = xNumber + directionX;
          let possibleY = yNumber + directionY;

          const isBlocked = figures.some((figure) => {
            return (
              this.xMap.indexOf(figure.getCordinates().x) == possibleX &&
              possibleY == figure.getCordinates().y
            );
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
            possibleY <= 8
          ) {
            moves.push({
              x: this.xMap[possibleX],
              y: possibleY as CoordinatesY,
            });
          } else if (isBlocked && isOppositeColor) {
            moves.push({
              x: this.xMap[possibleX],
              y: possibleY as CoordinatesY,
            });
          }
        }
      }
    }

    return moves;
  }
}
