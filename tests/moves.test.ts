import { Pawn } from "../shapes/Pawn";
import { Rook } from "../shapes/Rook";
import { Bishop } from "../shapes/Bishop";
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

describe("ладьи", () => {
  const lzdwzlxghtdsvsngwhjn = new Rook({ x: "a", y: 1 }, "white", "rook");

  const testArrayjtcedacwanwltawafimu = [lzdwzlxghtdsvsngwhjn];

  const resultArraysmjvohvwsbdcuiyeozqw = [
    { x: "b", y: 1 },
    { x: "c", y: 1 },
    { x: "d", y: 1 },
    { x: "e", y: 1 },
    { x: "f", y: 1 },
    { x: "g", y: 1 },
    { x: "h", y: 1 },
    { x: "a", y: 2 },
    { x: "a", y: 3 },
    { x: "a", y: 4 },
    { x: "a", y: 5 },
    { x: "a", y: 6 },
    { x: "a", y: 7 },
    { x: "a", y: 8 },
  ];

  test("белая(ый) ладья стоит на a1,белая(ый) ладья может пойти на b1,c1,d1,e1,f1,g1,h1,a2,a3,a4,a5,a6,a7,a8,", () => {
    expect(
      lzdwzlxghtdsvsngwhjn.hasMoved(testArrayjtcedacwanwltawafimu),
    ).toEqual(resultArraysmjvohvwsbdcuiyeozqw);
  });
  const mxzsubsugqrcvppuxiyd = new Rook({ x: "d", y: 4 }, "white", "rook");

  const testArrayrkrrdjppgrskeawwpkiz = [mxzsubsugqrcvppuxiyd];

  const resultArrayxyampmqmptdyootflgwi = [
    { x: "e", y: 4 },
    { x: "f", y: 4 },
    { x: "g", y: 4 },
    { x: "h", y: 4 },
    { x: "c", y: 4 },
    { x: "b", y: 4 },
    { x: "a", y: 4 },
    { x: "d", y: 5 },
    { x: "d", y: 6 },
    { x: "d", y: 7 },
    { x: "d", y: 8 },
    { x: "d", y: 3 },
    { x: "d", y: 2 },
    { x: "d", y: 1 },
  ];

  test("белая(ый) ладья стоит на d4,белая(ый) ладья может пойти на e4,f4,g4,h4,c4,b4,a4,d5,d6,d7,d8,d3,d2,d1,", () => {
    expect(
      mxzsubsugqrcvppuxiyd.hasMoved(testArrayrkrrdjppgrskeawwpkiz),
    ).toEqual(resultArrayxyampmqmptdyootflgwi);
  });
  const lwfxxvlkgqpagyngoacz = new Rook({ x: "e", y: 4 }, "white", "rook");

  const nhebxhurwwwasghynhba = new Rook({ x: "e", y: 5 }, "white", "rook");

  const qgyvitvaugbgzyfmdhoa = new Rook({ x: "d", y: 4 }, "black", "rook");

  const qltkvswsyvluiopvcnhr = new Rook({ x: "f", y: 4 }, "black", "rook");

  const mnmkukxofzcogxbhejgi = new Rook({ x: "e", y: 3 }, "black", "rook");

  const testArrayerugxpiwofvtmqtarabe = [
    lwfxxvlkgqpagyngoacz,
    nhebxhurwwwasghynhba,
    qgyvitvaugbgzyfmdhoa,
    qltkvswsyvluiopvcnhr,
    mnmkukxofzcogxbhejgi,
  ];

  const resultArraywlatmihfvxrxksspzxgx = [
    { x: "f", y: 4 },
    { x: "d", y: 4 },
    { x: "e", y: 3 },
  ];

  test("белая(ый) ладья стоит на e4,белая(ый) ладья стоит на e5,черная(ый) ладья стоит на d4,черная(ый) ладья стоит на f4,черная(ый) ладья стоит на e3,белая(ый) ладья может пойти на f4,d4,e3,", () => {
    expect(
      lwfxxvlkgqpagyngoacz.hasMoved(testArrayerugxpiwofvtmqtarabe),
    ).toEqual(resultArraywlatmihfvxrxksspzxgx);
  });
  const fddxsdirgfccgpsyitzs = new Rook({ x: "e", y: 8 }, "white", "rook");

  const ujiecjmrdlaczbndjsyu = new Rook({ x: "f", y: 8 }, "white", "rook");

  const imgzglcfbunniovqpbmz = new Rook({ x: "d", y: 8 }, "white", "rook");

  const drrcvhkhadmbbnljxpqx = new Rook({ x: "e", y: 7 }, "white", "rook");

  const testArrayqntggprbxamgnfcrmvvx = [
    fddxsdirgfccgpsyitzs,
    ujiecjmrdlaczbndjsyu,
    imgzglcfbunniovqpbmz,
    drrcvhkhadmbbnljxpqx,
  ];

  const resultArrayqykfvmlgmimcrpxzbctt: Coordinates[] = [];

  test("белая(ый) ладья стоит на e8,белая(ый) ладья стоит на f8,белая(ый) ладья стоит на d8,белая(ый) ладья стоит на e7,белая(ый) ладья может пойти на ", () => {
    expect(
      fddxsdirgfccgpsyitzs.hasMoved(testArrayqntggprbxamgnfcrmvvx),
    ).toEqual(resultArrayqykfvmlgmimcrpxzbctt);
  });
  const imoagoqhhvauylorlhtm = new Rook({ x: "g", y: 7 }, "black", "rook");

  const bhpmwfpaykkffffmlbpa = new Rook({ x: "g", y: 8 }, "black", "rook");

  const mjvttoyzpyutnqcxysjy = new Rook({ x: "h", y: 7 }, "black", "rook");

  const pnksqxwvhfbljszrydnp = new Rook({ x: "g", y: 4 }, "white", "rook");

  const ctggsnlzgylrmtgizfzk = new Rook({ x: "c", y: 7 }, "white", "rook");

  const testArrayhgzumislumujfrkcwtsf = [
    imoagoqhhvauylorlhtm,
    bhpmwfpaykkffffmlbpa,
    mjvttoyzpyutnqcxysjy,
    pnksqxwvhfbljszrydnp,
    ctggsnlzgylrmtgizfzk,
  ];

  const resultArraydxdjrsxffvbtmgbsawrj = [
    { x: "f", y: 7 },
    { x: "e", y: 7 },
    { x: "d", y: 7 },
    { x: "c", y: 7 },
    { x: "g", y: 6 },
    { x: "g", y: 5 },
    { x: "g", y: 4 },
  ];

  test("черная(ый) ладья стоит на g7,черная(ый) ладья стоит на g8,черная(ый) ладья стоит на h7,белая(ый) ладья стоит на g4,белая(ый) ладья стоит на c7,черная(ый) ладья может пойти на f7,e7,d7,c7,g6,g5,g4,", () => {
    expect(
      imoagoqhhvauylorlhtm.hasMoved(testArrayhgzumislumujfrkcwtsf),
    ).toEqual(resultArraydxdjrsxffvbtmgbsawrj);
  });
});

describe("Тесты слонов", () => {
  const qtwbugypmgcbnjkrcvii = new Bishop({ x: "d", y: 5 }, "white", "bishop");

  const testArraysnkaxbszlpapajywtywl = [qtwbugypmgcbnjkrcvii];

  const resultArrayxagvudjepjzvdjiloylv = [
    { x: "e", y: 6 },
    { x: "f", y: 7 },
    { x: "g", y: 8 },
    { x: "c", y: 6 },
    { x: "b", y: 7 },
    { x: "a", y: 8 },
    { x: "e", y: 4 },
    { x: "f", y: 3 },
    { x: "g", y: 2 },
    { x: "h", y: 1 },
    { x: "c", y: 4 },
    { x: "b", y: 3 },
    { x: "a", y: 2 },
  ];

  test("белая(ый) слон стоит на d4,белая(ый) слон может пойти на e6,f7,g8,c6,b7,a8,e4,f3,g2,h1,c4,b3,a2,", () => {
    expect(
      qtwbugypmgcbnjkrcvii.hasMoved(testArraysnkaxbszlpapajywtywl),
    ).toEqual(resultArrayxagvudjepjzvdjiloylv);
  });
  const uuyhtncjhasphjliccrp = new Bishop({ x: "a", y: 8 }, "black", "bishop");

  const lacsdeckovogfnztllta = new Bishop({ x: "d", y: 5 }, "white", "bishop");

  const testArrayiqwzvorwpfdaahyeutcu = [
    uuyhtncjhasphjliccrp,
    lacsdeckovogfnztllta,
  ];

  const resultArrayzrficlnpiwyjiwosvfpo = [
    { x: "b", y: 7 },
    { x: "c", y: 6 },
    { x: "d", y: 5 },
  ];

  test("черная(ый) слон стоит на a8,белая(ый) слон стоит на d5,черная(ый) слон может пойти на b7,c6,d5,", () => {
    expect(
      uuyhtncjhasphjliccrp.hasMoved(testArrayiqwzvorwpfdaahyeutcu),
    ).toEqual(resultArrayzrficlnpiwyjiwosvfpo);
  });
  const iunlzcanmlkyjxlfjbtn = new Bishop({ x: "d", y: 5 }, "white", "bishop");

  const xbzmezytvsydjdebfpkh = new Bishop({ x: "e", y: 4 }, "white", "bishop");

  const ekrxxityoccafccksepm = new Bishop({ x: "e", y: 6 }, "white", "bishop");

  const rtkmrbpykldztacmbemt = new Bishop({ x: "c", y: 6 }, "white", "bishop");

  const rzovsgtrgbrnrfjxghud = new Bishop({ x: "c", y: 4 }, "black", "bishop");

  const testArrayqqayvcellwoxfaysaidk = [
    iunlzcanmlkyjxlfjbtn,
    xbzmezytvsydjdebfpkh,
    ekrxxityoccafccksepm,
    rtkmrbpykldztacmbemt,
    rzovsgtrgbrnrfjxghud,
  ];

  const resultArrayfqlfxrrkxworxjvgkqhv = [{ x: "c", y: 4 }];

  test("белая(ый) слон стоит на d5,белая(ый) слон стоит на e4,белая(ый) слон стоит на e6,белая(ый) слон стоит на c6,черная(ый) слон стоит на c4,белая(ый) слон может пойти на c4,", () => {
    expect(
      iunlzcanmlkyjxlfjbtn.hasMoved(testArrayqqayvcellwoxfaysaidk),
    ).toEqual(resultArrayfqlfxrrkxworxjvgkqhv);
  });
  const bomcjhcqmrvcnuyqlouy = new Bishop({ x: "h", y: 8 }, "black", "bishop");

  const lrmlruchtqytzskekrvw = new Bishop({ x: "g", y: 7 }, "black", "bishop");

  const testArrayqyvhyiqttioniejglury = [
    bomcjhcqmrvcnuyqlouy,
    lrmlruchtqytzskekrvw,
  ];

  const resultArrayljkjqjkmbzbafsqjyswa: Coordinates[] = [];

  test("черная(ый) слон стоит на h8,черная(ый) слон стоит на g7,черная(ый) слон может пойти на ", () => {
    expect(
      bomcjhcqmrvcnuyqlouy.hasMoved(testArrayqyvhyiqttioniejglury),
    ).toEqual(resultArrayljkjqjkmbzbafsqjyswa);
  });
  const hderimlmounhsownyksz = new Bishop({ x: "f", y: 3 }, "white", "bishop");

  const yixhnbkcxrarlainbfjm = new Bishop({ x: "g", y: 2 }, "white", "bishop");

  const najiuwodeqswituyntzx = new Bishop({ x: "g", y: 4 }, "white", "bishop");

  const kizwkafllrfvtdutsnob = new Bishop({ x: "e", y: 4 }, "white", "bishop");

  const ybgrkrhbdavvkrqrlgtp = new Bishop({ x: "e", y: 2 }, "white", "bishop");

  const rofhouxlyfgpqbqkvrzm = new Bishop({ x: "g", y: 3 }, "black", "bishop");

  const cgtksrlyiowdrocebeto = new Bishop({ x: "e", y: 3 }, "black", "bishop");

  const testArrayeowgyrewihtvnausvtuj = [
    hderimlmounhsownyksz,
    yixhnbkcxrarlainbfjm,
    najiuwodeqswituyntzx,
    kizwkafllrfvtdutsnob,
    ybgrkrhbdavvkrqrlgtp,
    rofhouxlyfgpqbqkvrzm,
    cgtksrlyiowdrocebeto,
  ];

  const resultArraymnbkzcwvxgleiozvtvjq: Coordinates[] = [];

  test("белая(ый) слон стоит на f3,белая(ый) слон стоит на g2,белая(ый) слон стоит на g4,белая(ый) слон стоит на e4,белая(ый) слон стоит на e2,черная(ый) слон стоит на g3,черная(ый) слон стоит на e3,белая(ый) слон может пойти на ", () => {
    expect(
      hderimlmounhsownyksz.hasMoved(testArrayeowgyrewihtvnausvtuj),
    ).toEqual(resultArraymnbkzcwvxgleiozvtvjq);
  });
});
