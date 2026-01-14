//типы для удобства
type coordinatesY = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type coordinatesX = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
type coordinates = { x: coordinatesX; y: coordinatesY };
type color = "black" | "white";

//Создаю класс клетки, т.к считаю, что в будущем можно будет использовать для перемещения фигур
class Cell {
  private cordinates: coordinates;
  private color: color;

  constructor(x: coordinatesX, y: coordinatesY, color: color) {
    this.cordinates = { x: x, y: y };
    this.color = color;
  }

  public getCordinates() {
    return this.cordinates;
  }

  public getColor() {
    return this.color;
  }

  public setCordinates(x: coordinatesX, y: coordinatesY) {
    this.cordinates = { x: x, y: y };
  }

  public setColor(newColor: color) {
    this.color = newColor;
  }
}
//Создаю массивы, чтобы нарисовать все клетки на доске
const alfX: coordinatesX[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
const alfY: coordinatesY[] = [1, 2, 3, 4, 5, 6, 7, 8];
const blackWhite: color[] = ["white", "black"];

//реверсы нужно для правильного расположения клеток
alfX.reverse();
export default function Home() {
  const cells: Cell[] = [];
  //добавляем все клетки в массив

  alfY.map((y: coordinatesY) =>
    alfX.map((x: coordinatesX, index) =>
      cells.push(new Cell(x, y, blackWhite[(index + y) % 2]))
    )
  );

  cells.reverse();
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
            }}
          >
            {cell.getCordinates().x + "," + cell.getCordinates().y}
          </div>
        ))}
      </div>
    </main>
  );
}
