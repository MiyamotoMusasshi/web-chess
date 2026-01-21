import type { Coordinates } from "@/types/chess";
import type { CoordinatesX } from "@/types/chess";
import type { CoordinatesY } from "@/types/chess";
import type { PieceType } from "@/types/chess";
import type { Color } from "@/types/chess";
import { Figure } from "./figure";

export class Pawn extends Figure {
  public hasMoved(figures: Figure[]): Coordinates[] {
    const moves: Coordinates[] = [];

    let x = this.xMap.indexOf(this.cordinates.x);
    let y = this.cordinates.y;

    if (y == 2) {
      const newY = this.color == "white" ? y + 1 : y - 1;
      const newY2 = this.color == "white" ? y + 2 : y - 2;

      if (newY >= 1 && newY <= 8 && newY2 >= 1 && newY2 <= 8) {
        const newYValue = newY as CoordinatesY;
        const newY2Value = newY as CoordinatesY;
        moves.push({ x: this.cordinates.x, y: newYValue });
        moves.push({ x: this.cordinates.x, y: newY2Value });
      }
    } else {
      const newY = this.color == "white" ? y + 1 : y - 1;

      if (newY >= 1 && newY <= 8) {
        const newYValue = newY as CoordinatesY;
        moves.push({ x: this.cordinates.x, y: newYValue });
      }
    }

    figures.map((figure: Figure) => {
      const tmpX = this.xMap.indexOf(figure.getCordinates().x);
      const tmpY = figure.getCordinates().y;

      if (
        (this.color == "white" && x + 1 == tmpX && y + 1 == tmpY) ||
        (this.color == "white" && x - 1 == tmpX && y + 1 == tmpY) ||
        (this.color == "black" && x + 1 == tmpX && y - 1 == tmpY) ||
        (this.color == "white" && x - 1 == tmpX && y - 1 == tmpY)
      ) {
        moves.push({
          x: figure.getCordinates().x,
          y: figure.getCordinates().y,
        });
      } else if (
        (this.color == "white" && y + 1 == tmpY) ||
        (this.color == "black" && y - 1 == tmpY) ||
        (this.color == "white" && y == 2 && tmpY == y + 2) ||
        (this.color == "black" && y == 2 && tmpY == y - 2)
      ) {
        moves.splice(moves.indexOf({ x: this.cordinates.x, y: tmpY }));
      }
    });

    return moves;
  }
}
