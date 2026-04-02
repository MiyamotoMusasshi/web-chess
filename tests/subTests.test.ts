import checkAllAtackedCell from "../sub-function/checkAllAtackedCell";
import { Pawn } from "../shapes/Pawn";
import { Rook } from "../shapes/Rook";
import { Bishop } from "../shapes/Bishop";
import { Queen } from "../shapes/Queen";
import { Horse } from "../shapes/Horse";
import type { Move } from "../types/chess";
import type { Coordinates } from "@/types/chess";
import { King } from "../shapes/King";
import { Figure } from "../shapes/figure";

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

  const moves: Move[] = [
    {
      from: { x: "h", y: 7 },
      to: { x: "h", y: 5 },
      type: "pawn",
      color: "black",
    },
  ];
  const testPawn1 = new Pawn({ x: "g", y: 5 }, "white", "pawn");

  const figures = [testPawn1, new Pawn({ x: "h", y: 5 }, "black", "pawn")];

  test("Проверка взятия на проходе для белой пешки с g5, черная пошла с h7 на h5", () => {
    expect(testPawn1.isPassant(moves, figures)).toEqual({ x: "h", y: 6 });
  });

  const moves2: Move[] = [
    {
      from: { x: "a", y: 2 },
      to: { x: "a", y: 4 },
      type: "pawn",
      color: "white",
    },
  ];
  const testPawn2 = new Pawn({ x: "b", y: 4 }, "black", "pawn");

  const figures2 = [testPawn2, new Pawn({ x: "a", y: 4 }, "white", "pawn")];

  test("Проверка взятия на проходе для черной пешки с a4, белая пошла с a2 на a4", () => {
    expect(testPawn2.isPassant(moves2, figures2)).toEqual({ x: "a", y: 3 });
  });

  const testKingWhite = new King({ x: "e", y: 1 }, "white", "king");
  const testKingBlack = new King({ x: "e", y: 8 }, "black", "king");
  const testArray3: Figure[] = [
    testKingWhite,
    testKingBlack,
    new Rook({ x: "h", y: 1 }, "white", "rook"),
    new Rook({ x: "a", y: 1 }, "white", "rook"),
    new Rook({ x: "h", y: 8 }, "black", "rook"),
    new Rook({ x: "a", y: 8 }, "black", "rook"),
    new Pawn({ x: "h", y: 2 }, "white", "pawn"),
    new Pawn({ x: "a", y: 2 }, "white", "pawn"),
    new Pawn({ x: "h", y: 7 }, "black", "pawn"),
    new Pawn({ x: "a", y: 7 }, "black", "pawn"),
  ];

  const testAtackedCellsWhite: Coordinates[] = checkAllAtackedCell(
    testArray3,
    "white",
  );
  const testAtackedCellsBlack: Coordinates[] = checkAllAtackedCell(
    testArray3,
    "black",
  );

  const testMoves2: Move[] = [];

  test("Проверка рокировки короткой для белых(пусто)", () => {
    expect(
      testKingWhite.isCastlingSmall(
        testArray3,
        testAtackedCellsBlack,
        testMoves2,
        "white",
      ),
    ).toEqual([{ x: "g", y: 1 }]);
  });

  test("Проверка рокировки длинной для белых(пусто)", () => {
    expect(
      testKingWhite.isCastlingBig(
        testArray3,
        testAtackedCellsBlack,
        testMoves2,
        "white",
      ),
    ).toEqual([{ x: "c", y: 1 }]);
  });

  test("Проверка рокировки короткой для белых(пусто)", () => {
    expect(
      testKingWhite.isCastlingSmall(
        testArray3,
        testAtackedCellsWhite,
        testMoves2,
        "black",
      ),
    ).toEqual([{ x: "g", y: 8 }]);
  });

  test("Проверка рокировки длинной для белых(пусто)", () => {
    expect(
      testKingWhite.isCastlingBig(
        testArray3,
        testAtackedCellsWhite,
        testMoves2,
        "black",
      ),
    ).toEqual([{ x: "c", y: 8 }]);
  });
});
