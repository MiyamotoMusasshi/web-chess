import type { Coordinates } from "@/types/chess";
import type { CoordinatesX } from "@/types/chess";
import type { CoordinatesY } from "@/types/chess";
import type { Color } from "@/types/chess";
import type { PieceType } from "@/types/chess";

//Создаю класс клетки, т.к считаю, что в будущем можно будет использовать для перемещения фигур
class Cell {
  private cordinates: Coordinates;
  private color: Color;

  constructor(x: CoordinatesX, y: CoordinatesY, color: Color) {
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
const blackWhite: Color[] = ["black", "white"];

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
        {cells.map((cell: Cell, index: number) => (
          <div
            className="w-[75px] h-[75px] bg-black rounded-[1px]"
            key={index}
            style={{
              backgroundColor: cell.getColor(),
              color: "gray",
              userSelect: "none",
            }}
          >
            {cell.getCordinates().x + "," + cell.getCordinates().y}
          </div>
        ))}
      </div>
    </main>
  );
}
