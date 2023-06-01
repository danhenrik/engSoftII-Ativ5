const calculator = require("../src/calculator");

describe("Validate calculator methods", () => {
  it("sum should subtract if the second parameter is negative", () => {
    const res = calculator.sum(10, -5);

    expect(res).toEqual(5);
  });

  it("sum should add if the second parmeter is positive", () => {
    const res = calculator.sum(10, 5);

    expect(res).toEqual(15);
  });

  it("div should divide first parmeter by second parameter", () => {
    const res = calculator.div(8, 2);

    expect(res).toEqual(4);
  });

  it("div should be able to compute floating point division results", () => {
    const res = calculator.div(1, 2);

    expect(res).toEqual(0.5);
  });

  it("mul should multiply both parameters", () => {
    const res = calculator.mul(2, 4);

    expect(res).toEqual(8);
  });

  it("mul should return negative if one of the parameter is negative", () => {
    const res = calculator.mul(2, -4);

    expect(res).toEqual(-8);
  });
});
