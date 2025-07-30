function display(value) {
    const outputScreen = document.getElementById("output-screen");

    // If the current screen shows 0, replace it with the new value
    if (outputScreen.value === "0") {
        outputScreen.value = value;
    } else {
        outputScreen.value += value; // Append the value
    }
}

function clr() {
    document.getElementById("output-screen").value = "0"; // Clear the screen
}

function del() {
    const outputScreen = document.getElementById("output-screen");
    // Remove the last character from the display
    outputScreen.value = outputScreen.value.slice(0, -1) || "0"; // If empty, show 0
}

function calculate() {
    const outputScreen = document.getElementById("output-screen");
    try {
        outputScreen.value = eval(outputScreen.value) || "0"; // Evaluate the expression
    } catch {
        outputScreen.value = "Error"; // Handle errors
    }
}
