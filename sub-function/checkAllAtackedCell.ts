import { Figure } from "@/shapes/figure";
import type { Coordinates } from "@/types/chess";
import type { Color } from "@/types/chess";

export default function checkAllAtackedCell(figures: Figure[], color: Color) {
  const atackedCells: Coordinates[] = [];

  figures.map((figure) => {
    if (figure.getColor() == color) {
      figure.hasMoved(figures, true, []).map((cell) => {
        const isDublicate = atackedCells.find((f) => {
          return cell.x == f.x && cell.y == f.y;
        });
        if (!isDublicate) {
          atackedCells.push(cell);
        }
      });
    }
  });

  return atackedCells;
}
