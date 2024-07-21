const {
  setDisplayElement,
  clearDisplay,
  deleteLast,
  appendSymbol,
  calculateResult,
} = require("../script");

describe("Calculator functions", () => {
  let displayElement;

  beforeEach(() => {
    document.body.innerHTML = '<div id="display">0</div>';
    displayElement = document.getElementById("display");
    setDisplayElement(displayElement);
  });

  test("clearDisplay should reset the display to 0", () => {
    displayElement.innerText = "123";
    clearDisplay();
    expect(displayElement.innerText).toBe("0");
  });

  test("deleteLast should delete the last character", () => {
    displayElement.innerText = "123";
    deleteLast();
    expect(displayElement.innerText).toBe("12");
  });

  test("deleteLast should reset to 0 if only one character", () => {
    displayElement.innerText = "1";
    deleteLast();
    expect(displayElement.innerText).toBe("0");
  });

  test("appendSymbol should replace 0 with the symbol when display is 0", () => {
    displayElement.innerText = "0";
    appendSymbol("5");
    expect(displayElement.innerText).toBe("5");
  });

  test("appendSymbol should append the symbol when display is not 0", () => {
    displayElement.innerText = "12";
    appendSymbol("3");
    expect(displayElement.innerText).toBe("123");
  });

  test("calculateResult should calculate the result of the expression", () => {
    displayElement.innerText = "3+2";
    calculateResult();
    expect(displayElement.innerText).toBe("5");
  });

  test("calculateResult should display error for invalid expressions", () => {
    displayElement.innerText = "3+";
    calculateResult();
    expect(displayElement.innerText).toBe("Error");
  });
});
