import type { Coordinates } from "@/types/chess";
import type { CoordinatesX } from "@/types/chess";
import type { CoordinatesY } from "@/types/chess";
import type { PieceType } from "@/types/chess";
import type { Color } from "@/types/chess";
import { Figure } from "./figure";

export class Queen extends Figure {
  public hasMoved(figures: Figure[]): Coordinates[] {
    const moves: Coordinates[] = [];

    let xNumber = this.xMap.indexOf(this.getCordinates().x);
    let yNumber = this.getCordinates().y;

    while (xNumber < 7) {
      xNumber = xNumber + 1;

      const isBlocked = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          this.getCordinates().y == figure.getCordinates().y
        );
      });

      const isOppositeColor = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          this.getCordinates().y == figure.getCordinates().y &&
          this.getColor() != figure.getColor()
        );
      });

      if (isBlocked && isOppositeColor) {
        moves.push({ x: this.xMap[xNumber], y: this.getCordinates().y });
        break;
      } else if (isBlocked && !isOppositeColor) {
        break;
      } else {
        moves.push({ x: this.xMap[xNumber], y: this.getCordinates().y });
      }
    }

    xNumber = this.xMap.indexOf(this.getCordinates().x);

    while (xNumber > 0) {
      xNumber = xNumber - 1;

      const isBlocked = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          this.getCordinates().y == figure.getCordinates().y
        );
      });

      const isOppositeColor = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          this.getCordinates().y == figure.getCordinates().y &&
          this.getColor() != figure.getColor()
        );
      });

      if (isBlocked && isOppositeColor) {
        moves.push({ x: this.xMap[xNumber], y: this.getCordinates().y });
        break;
      } else if (isBlocked && !isOppositeColor) {
        break;
      } else {
        moves.push({ x: this.xMap[xNumber], y: this.getCordinates().y });
      }
    }

    while (yNumber < 8) {
      yNumber = yNumber + 1;

      const isBlocked = figures.some((figure) => {
        return (
          this.getCordinates().x == figure.getCordinates().x &&
          yNumber == figure.getCordinates().y
        );
      });

      const isOppositeColor = figures.some((figure) => {
        return (
          this.getCordinates().x == figure.getCordinates().x &&
          yNumber == figure.getCordinates().y &&
          this.getColor() != figure.getColor()
        );
      });

      if (isBlocked && isOppositeColor) {
        moves.push({ x: this.getCordinates().x, y: yNumber as CoordinatesY });
        break;
      } else if (isBlocked && !isOppositeColor) {
        break;
      } else {
        moves.push({ x: this.getCordinates().x, y: yNumber as CoordinatesY });
      }
    }

    yNumber = this.getCordinates().y;

    while (yNumber > 1) {
      yNumber = yNumber - 1;

      const isBlocked = figures.some((figure) => {
        return (
          this.getCordinates().x == figure.getCordinates().x &&
          yNumber == figure.getCordinates().y
        );
      });

      const isOppositeColor = figures.some((figure) => {
        return (
          this.getCordinates().x == figure.getCordinates().x &&
          yNumber == figure.getCordinates().y &&
          this.getColor() != figure.getColor()
        );
      });

      if (isBlocked && isOppositeColor) {
        moves.push({ x: this.getCordinates().x, y: yNumber as CoordinatesY });
        break;
      } else if (isBlocked && !isOppositeColor) {
        break;
      } else {
        moves.push({ x: this.getCordinates().x, y: yNumber as CoordinatesY });
      }
    }
    xNumber = this.xMap.indexOf(this.getCordinates().x);
    yNumber = this.getCordinates().y;

    while (xNumber < 7 && yNumber < 8) {
      xNumber = xNumber + 1;
      yNumber = yNumber + 1;

      const isBlocked = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          yNumber == figure.getCordinates().y
        );
      });

      const isOppositeColor = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          yNumber == figure.getCordinates().y &&
          this.getColor() != figure.getColor()
        );
      });

      if (isBlocked && isOppositeColor) {
        moves.push({ x: this.xMap[xNumber], y: yNumber as CoordinatesY });
        break;
      } else if (isBlocked && !isOppositeColor) {
        break;
      } else {
        moves.push({ x: this.xMap[xNumber], y: yNumber as CoordinatesY });
      }
    }

    xNumber = this.xMap.indexOf(this.getCordinates().x);
    yNumber = this.getCordinates().y;

    while (xNumber > 0 && yNumber < 8) {
      xNumber = xNumber - 1;
      yNumber = yNumber + 1;

      const isBlocked = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          yNumber == figure.getCordinates().y
        );
      });

      const isOppositeColor = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          yNumber == figure.getCordinates().y &&
          this.getColor() != figure.getColor()
        );
      });

      if (isBlocked && isOppositeColor) {
        moves.push({ x: this.xMap[xNumber], y: yNumber as CoordinatesY });
        break;
      } else if (isBlocked && !isOppositeColor) {
        break;
      } else {
        moves.push({ x: this.xMap[xNumber], y: yNumber as CoordinatesY });
      }
    }

    xNumber = this.xMap.indexOf(this.getCordinates().x);
    yNumber = this.getCordinates().y;

    while (yNumber > 1 && xNumber < 7) {
      yNumber = yNumber - 1;
      xNumber = xNumber + 1;

      const isBlocked = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          yNumber == figure.getCordinates().y
        );
      });

      const isOppositeColor = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          yNumber == figure.getCordinates().y &&
          this.getColor() != figure.getColor()
        );
      });

      if (isBlocked && isOppositeColor) {
        moves.push({ x: this.xMap[xNumber], y: yNumber as CoordinatesY });
        break;
      } else if (isBlocked && !isOppositeColor) {
        break;
      } else {
        moves.push({ x: this.xMap[xNumber], y: yNumber as CoordinatesY });
      }
    }

    xNumber = this.xMap.indexOf(this.getCordinates().x);
    yNumber = this.getCordinates().y;

    while (yNumber > 1 && xNumber > 0) {
      yNumber = yNumber - 1;
      xNumber = xNumber - 1;

      const isBlocked = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          yNumber == figure.getCordinates().y
        );
      });

      const isOppositeColor = figures.some((figure) => {
        return (
          this.xMap.indexOf(figure.getCordinates().x) == xNumber &&
          yNumber == figure.getCordinates().y &&
          this.getColor() != figure.getColor()
        );
      });

      if (isBlocked && isOppositeColor) {
        moves.push({ x: this.xMap[xNumber], y: yNumber as CoordinatesY });
        break;
      } else if (isBlocked && !isOppositeColor) {
        break;
      } else {
        moves.push({ x: this.xMap[xNumber], y: yNumber as CoordinatesY });
      }
    }
    return moves;
  }
}
