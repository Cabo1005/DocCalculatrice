let displayElement;

function setDisplayElement(element) {
  displayElement = element;
}

function clearDisplay() {
  displayElement.innerText = "0";
}

function deleteLast() {
  if (displayElement.innerText.length === 1) {
    displayElement.innerText = "0";
  } else {
    displayElement.innerText = displayElement.innerText.slice(0, -1);
  }
}

function appendSymbol(symbol) {
  if (displayElement.innerText === "0") {
    displayElement.innerText = symbol;
  } else {
    displayElement.innerText += symbol;
  }
}

function calculateResult() {
  try {
    const result = eval(displayElement.innerText);
    displayElement.innerText = String(result); // Convertir le résultat en chaîne de caractères
  } catch {
    displayElement.innerText = "Error";
  }
}

module.exports = {
  setDisplayElement,
  clearDisplay,
  deleteLast,
  appendSymbol,
  calculateResult,
};
