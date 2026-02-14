import checkAllAtackedCell from "../sub-function/checkAllAtackedCell";
import { Pawn } from "../shapes/Pawn";
import { Rook } from "../shapes/Rook";
import { Bishop } from "../shapes/Bishop";
import { Queen } from "../shapes/Queen";
import { Horse } from "../shapes/Horse";
import type { Coordinates } from "@/types/chess";

describe("Различные функции", () => {
  const testArray1 = [
    new Pawn({ x: "a", y: 3 }, "white", "pawn"),
    new Pawn({ x: "b", y: 2 }, "white", "pawn"),
    new Pawn({ x: "c", y: 1 }, "white", "pawn"),
    new Pawn({ x: "d", y: 2 }, "white", "pawn"),
    new Pawn({ x: "d", y: 4 }, "white", "pawn"),
    new Pawn({ x: "e", y: 1 }, "white", "pawn"),
    new Pawn({ x: "f", y: 2 }, "white", "pawn"),
    new Pawn({ x: "g", y: 3 }, "white", "pawn"),
    new Horse({ x: "c", y: 2 }, "white", "horse"),
    new Horse({ x: "e", y: 2 }, "white", "horse"),
    new Rook({ x: "d", y: 1 }, "white", "rook"),
  ];

  const resultArray1: Coordinates[] = [
    { x: "b", y: 4 },
    { x: "a", y: 3 },
    { x: "c", y: 3 },
    { x: "b", y: 2 },
    { x: "d", y: 2 },
    { x: "e", y: 3 },
    { x: "c", y: 5 },
    { x: "e", y: 5 },
    { x: "f", y: 2 },
    { x: "g", y: 3 },
    { x: "f", y: 4 },
    { x: "h", y: 4 },
    { x: "a", y: 1 },
    { x: "d", y: 4 },
    { x: "e", y: 1 },
    { x: "c", y: 1 },
    { x: "g", y: 1 },
  ];

  test("Белые пешки стоят на a3,b2,c1,d2,d4,e1,f2,g3. Белая ладья стоит на d1, белые кони на c2,e2.", () => {
    expect(checkAllAtackedCell(testArray1, "white")).toEqual(resultArray1);
  });

  const testArray2 = [
    new Pawn({ x: "d", y: 6 }, "black", "pawn"),
    new Pawn({ x: "e", y: 5 }, "black", "pawn"),
    new Pawn({ x: "f", y: 6 }, "black", "pawn"),
    new Pawn({ x: "d", y: 5 }, "black", "pawn"),
    new Pawn({ x: "f", y: 5 }, "black", "pawn"),
    new Queen({ x: "e", y: 6 }, "black", "queen"),
    new Bishop({ x: "e", y: 7 }, "black", "bishop"),
  ];

  const resultArray2 = [
    { x: "c", y: 5 },
    { x: "e", y: 5 },
    { x: "d", y: 4 },
    { x: "f", y: 4 },
    { x: "g", y: 5 },
    { x: "c", y: 4 },
    { x: "e", y: 4 },
    { x: "g", y: 4 },
    { x: "f", y: 6 },
    { x: "d", y: 6 },
    { x: "e", y: 7 },
    { x: "f", y: 7 },
    { x: "g", y: 8 },
    { x: "d", y: 7 },
    { x: "c", y: 8 },
    { x: "f", y: 5 },
    { x: "d", y: 5 },
    { x: "f", y: 8 },
    { x: "d", y: 8 },
  ];

  test("Проверка для черных фигур: пешки,ферзь,слон", () => {
    expect(checkAllAtackedCell(testArray2, "black")).toEqual(resultArray2);
  });
});
