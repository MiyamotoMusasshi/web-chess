import { Pawn } from "../shapes/Pawn";

//тесты пешок
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
