import { Pawn } from "../shapes/Pawn";
import type { Coordinates } from "@/types/chess";

//тесты белых пешок
describe("белые пешки", () => {
  const testPawn1forFirstTest = new Pawn({ x: "c", y: 2 }, "white", "pawn");
  const testPawn2forFirstTest = new Pawn({ x: "d", y: 3 }, "black", "pawn");
  const testPawn3forFirstTest = new Pawn({ x: "b", y: 3 }, "white", "pawn");

  const testArrayforFirstTest = [
    testPawn1forFirstTest,
    testPawn2forFirstTest,
    testPawn3forFirstTest,
  ];
  const resultArrayForFirstTest = [
    { x: "c", y: 3 },
    { x: "c", y: 4 },
    { x: "d", y: 3 },
  ];

  test("Белая пешка на c2,b3, черная пешка на d3.Пешка с c2 может пойти на c3,c4 и съесть на d3", () => {
    expect(testPawn1forFirstTest.hasMoved(testArrayforFirstTest)).toEqual(
      resultArrayForFirstTest,
    );
  });

  const testPawn1forSecondTest = new Pawn({ x: "c", y: 2 }, "white", "pawn");
  const testPawn2forSecondTest = new Pawn({ x: "c", y: 3 }, "white", "pawn");
  const testPawn3forSecondTest = new Pawn({ x: "b", y: 3 }, "black", "pawn");

  const testArrayforSecondTest = [
    testPawn1forSecondTest,
    testPawn2forSecondTest,
    testPawn3forSecondTest,
  ];
  const resultArrayForSecondTest = [{ x: "b", y: 3 }];

  test("Белая пешка на c2,c3, черная пешка на b3.Пешка с c2 может съесть на b3", () => {
    expect(testPawn1forSecondTest.hasMoved(testArrayforSecondTest)).toEqual(
      resultArrayForSecondTest,
    );
  });

  const testPawn1forThirdTest = new Pawn({ x: "h", y: 7 }, "white", "pawn");
  const testPawn2forThirdTest = new Pawn({ x: "g", y: 8 }, "black", "pawn");
  const testPawn3forThirdTest = new Pawn({ x: "h", y: 6 }, "black", "pawn");

  const testArrayforThirdTest = [
    testPawn1forThirdTest,
    testPawn2forThirdTest,
    testPawn3forThirdTest,
  ];
  const resultArrayForThirdTest = [
    { x: "h", y: 8 },
    { x: "g", y: 8 },
  ];

  test("Белая пешка на h7, черные пешки на g8,h6.Пешка с h7 может съесть на g8 и пойти на h8", () => {
    expect(testPawn1forThirdTest.hasMoved(testArrayforThirdTest)).toEqual(
      resultArrayForThirdTest,
    );
  });

  const testPawn1forFourthTest = new Pawn({ x: "a", y: 8 }, "white", "pawn");

  const testArrayforFourthTest = [testPawn1forFourthTest];
  const resultArrayForFourthTest: Coordinates[] = [];

  test("Белая пешка на a8, нет ходов", () => {
    expect(testPawn1forFourthTest.hasMoved(testArrayforFourthTest)).toEqual(
      resultArrayForFourthTest,
    );
  });

  const testPawn1forFifthTest = new Pawn({ x: "d", y: 2 }, "white", "pawn");
  const testPawn2forFifthTest = new Pawn({ x: "d", y: 4 }, "white", "pawn");

  const testArrayforFifthTest = [testPawn1forFifthTest, testPawn2forFifthTest];
  const resultArrayForFifthTest: Coordinates[] = [{ x: "d", y: 3 }];

  test("Белые пешки на d2,d4, пешка с d2 может пойти на d3", () => {
    expect(testPawn1forFifthTest.hasMoved(testArrayforFifthTest)).toEqual(
      resultArrayForFifthTest,
    );
  });
});

//тесты черных пешок(аналогичные)

describe("Черные пешки", () => {
  const testBPawn1forFirstTest = new Pawn({ x: "f", y: 7 }, "black", "pawn");
  const testBPawn2forFirstTest = new Pawn({ x: "e", y: 6 }, "black", "pawn");
  const testBPawn3forFirstTest = new Pawn({ x: "g", y: 6 }, "white", "pawn");

  const testBArrayforFirstTest = [
    testBPawn1forFirstTest,
    testBPawn2forFirstTest,
    testBPawn3forFirstTest,
  ];
  const resultBArrayForFirstTest = [
    { x: "f", y: 6 },
    { x: "f", y: 5 },
    { x: "g", y: 6 },
  ];

  test("Черные пешки на f7 и e6, белая на g6, пешка с f7 может походить на f6,f5,g6", () => {
    expect(testBPawn1forFirstTest.hasMoved(testBArrayforFirstTest)).toEqual(
      resultBArrayForFirstTest,
    );
  });

  const testBPawn1forSecondTest = new Pawn({ x: "a", y: 7 }, "black", "pawn");
  const testBPawn2forSecondTest = new Pawn({ x: "b", y: 6 }, "white", "pawn");
  const testBPawn3forSecondTest = new Pawn({ x: "a", y: 6 }, "black", "pawn");

  const testBArrayforSecondTest = [
    testBPawn1forSecondTest,
    testBPawn2forSecondTest,
    testBPawn3forSecondTest,
  ];
  const resultBArrayForSecondTest = [{ x: "b", y: 6 }];

  test("Черные пешки на a7 и a6, белая на b6, с a7 можно пойти на b6", () => {
    expect(testBPawn1forSecondTest.hasMoved(testBArrayforSecondTest)).toEqual(
      resultBArrayForSecondTest,
    );
  });

  const testBPawn1forThirdTest = new Pawn({ x: "a", y: 2 }, "black", "pawn");
  const testBPawn2forThirdTest = new Pawn({ x: "a", y: 3 }, "white", "pawn");
  const testBPawn3forThirdTest = new Pawn({ x: "b", y: 1 }, "white", "pawn");

  const testBArrayforThirdTest = [
    testBPawn1forThirdTest,
    testBPawn2forThirdTest,
    testBPawn3forThirdTest,
  ];
  const resultBArrayForThirdTest = [
    { x: "a", y: 1 },
    { x: "b", y: 1 },
  ];

  test("Черная пешка a2 и белые на a3 и b1, черная может пойти на a1,b1", () => {
    expect(testBPawn1forThirdTest.hasMoved(testBArrayforThirdTest)).toEqual(
      resultBArrayForThirdTest,
    );
  });

  const testBPawn1forFourthTest = new Pawn({ x: "h", y: 1 }, "black", "pawn");

  const testBArrayforFourthTest = [testBPawn1forFourthTest];
  const resultBArrayForFourthTest: Coordinates[] = [];

  test("Черная пешка на h1, нет ходов", () => {
    expect(testBPawn1forFourthTest.hasMoved(testBArrayforFourthTest)).toEqual(
      resultBArrayForFourthTest,
    );
  });

  const testBPawn1forFifthTest = new Pawn({ x: "d", y: 7 }, "black", "pawn");
  const testBPawn2forFifthTest = new Pawn({ x: "d", y: 5 }, "white", "pawn");

  const testBArrayforFifthTest = [
    testBPawn1forFifthTest,
    testBPawn2forFifthTest,
  ];
  const resultBArrayForFifthTest: Coordinates[] = [{ x: "d", y: 6 }];

  test("Черная на d7 и белая на d5, черная может пойти на d6", () => {
    expect(testBPawn1forFifthTest.hasMoved(testBArrayforFifthTest)).toEqual(
      resultBArrayForFifthTest,
    );
  });
});
