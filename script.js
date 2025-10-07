const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
  } catch {
    display.value = "Error";
  }
}

// ✅ Keyboard Support
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || key === ".") {
    appendValue(key); // Numbers and decimal
  } else if (["+", "-", "*", "/", "%"].includes(key)) {
    appendValue(key); // Operators
  } else if (key === "Enter") {
    event.preventDefault(); // avoid form submission
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
