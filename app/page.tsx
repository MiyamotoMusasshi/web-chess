import type { Coordinates } from "@/types/chess";
import type { CoordinatesX } from "@/types/chess";
import type { CoordinatesY } from "@/types/chess";
import type { Color } from "@/types/chess";
import type { PieceType } from "@/types/chess";
import { figures } from "@/types/chess";
import { renderFigures } from "@/types/chess";
import { Span } from "next/dist/trace";

//Создаю класс клетки, т.к считаю, что в будущем можно будет использовать для перемещения фигур
class Cell {
  private cordinates: Coordinates;
  private color: string;

  constructor(x: CoordinatesX, y: CoordinatesY, color: string) {
    this.cordinates = { x: x, y: y };
    this.color = color;
  }

  public getCordinates() {
    return this.cordinates;
  }

  public getColor() {
    return this.color;
  }

  public setCordinates(x: CoordinatesX, y: CoordinatesY) {
    this.cordinates = { x: x, y: y };
  }

  public setColor(newColor: Color) {
    this.color = newColor;
  }
}
//Создаю массивы, чтобы нарисовать все клетки на доске
const alfX: CoordinatesX[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
const alfY: CoordinatesY[] = [1, 2, 3, 4, 5, 6, 7, 8];
const blackWhite = ["#b58863", "#f0d9b5"];

//реверсы нужно для правильного расположения клеток
alfX.reverse();
const cells: Cell[] = [];
//добавляем все клетки в массив

alfY.map((y: CoordinatesY) =>
  alfX.map((x: CoordinatesX, index) =>
    cells.push(new Cell(x, y, blackWhite[(index + y) % 2])),
  ),
);

cells.reverse();
export default function Home() {
  return (
    <main>
      <div
        className="w-[600px] h-[600px] m-auto mt-[10%] rounded-[10px] grid"
        style={{
          gridTemplateColumns: "repeat(8, 75px)",
          gridTemplateRows: "repeat(8, 75px)",
        }}
      >
        {cells.map((cell: Cell, index: number) => {
          const figure = figures.find((figure) => {
            return (
              figure.getCordinates().x == cell.getCordinates().x &&
              figure.getCordinates().y == cell.getCordinates().y
            );
          });

          const figureSymbol = figure ? renderFigures[figure.getType()] : null;

          return (
            <div
              className="w-[75px] h-[75px] bg-black rounded-[1px]"
              key={index}
              style={{
                backgroundColor: cell.getColor(),
                color: "gray",
                userSelect: "none",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "2px",
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                {cell.getCordinates().x + "," + cell.getCordinates().y}
              </div>
              {figure ? (
                <span
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "56px",
                    cursor: "pointer",
                    color: figure.getColor(),
                  }}
                >
                  {figureSymbol}
                </span>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
