
// const display = document.querySelector("#display");
// function appendToDisplay(value) {
//     display.value += value;
// }
// document.querySelector("button:nth-child(1)").onclick = function () {
//     display.value = "";
// };
// document.querySelector("button:nth-child(2)").onclick = function () {
//     display.value = display.value.slice(0, -1);
// };
// document.querySelector("button:nth-child(3)").onclick = function () {
//     appendToDisplay('.');
// };

// document.querySelector("button:nth-child(5)").onclick = function () {
//     try {
//         display.value = Math.sin(eval(display.value));
//     } catch {
//         display.value = "Error";
//     }
// };

// document.querySelector("button:nth-child(6)").onclick = function () {
//     try {
//         display.value = Math.cos(eval(display.value));
//     } catch {
//         display.value = "Error";
//     }
// };

// // Tan function
// document.querySelector("button:nth-child(7)").onclick = function () {
//     try {
//         display.value = Math.tan(eval(display.value));
//     } catch {
//         display.value = "Error";
//     }
// };

// // Square root (√)
// document.querySelector("button:nth-child(8)").onclick = function () {
//     try {
//         display.value = Math.sqrt(eval(display.value));
//     } catch {
//         display.value = "Error";
//     }
// };
// const display = document.querySelector("#display");

// function appendToDisplay(value) {
//     display.value += value;
// }

// // Clear All (AC)
// document.querySelector("button:nth-child(1)").onclick = function () {
//     display.value = "";
// };

// // Delete last character (Del)
// document.querySelector("button:nth-child(2)").onclick = function () {
//     display.value = display.value.slice(0, -1);
// };

// // Dot
// document.querySelector("button:nth-child(3)").onclick = function () {
//     appendToDisplay('.');
// };

// // SIN in degrees
// document.querySelector("button:nth-child(5)").onclick = function () {
//     try {
//         let radians = eval(display.value) * Math.PI / 180;
//         display.value = Math.sin(radians).toFixed(5);
//     } catch {
//         display.value = "Error";
//     }
// };

// // COS in degrees
// document.querySelector("button:nth-child(6)").onclick = function () {
//     try {
//         let radians = eval(display.value) * Math.PI / 180;
//         display.value = Math.cos(radians).toFixed(5);
//     } catch {
//         display.value = "Error";
//     }
// };

// // TAN in degrees
// document.querySelector("button:nth-child(7)").onclick = function () {
//     try {
//         let radians = eval(display.value) * Math.PI / 180;
//         display.value = Math.tan(radians).toFixed(5);
//     } catch {
//         display.value = "Error";
//     }
// };

// // Square root (√)
// document.querySelector("button:nth-child(8)").onclick = function () {
//     try {
//         display.value = Math.sqrt(eval(display.value)).toFixed(5);
//     } catch {
//         display.value = "Error";
//     }
// };




const display = document.querySelector("#display");

function appendToDisplay(value) {
    display.value += value;
}

// Clear All (AC)
document.querySelector("button:nth-child(1)").onclick = function () {
    display.value = "";
};

// Delete last character (Del)
document.querySelector("button:nth-child(2)").onclick = function () {
    display.value = display.value.slice(0, -1);
};

// Dot
document.querySelector("button:nth-child(3)").onclick = function () {
    appendToDisplay('.');
};

// SIN in degrees
document.querySelector("button:nth-child(5)").onclick = function () {
    try {
        let radians = eval(display.value) * Math.PI / 180;
        display.value = Math.sin(radians).toFixed(5);
    } catch {
        display.value = "Error";
    }
};

// COS in degrees
document.querySelector("button:nth-child(6)").onclick = function () {
    try {
        let radians = eval(display.value) * Math.PI / 180;
        display.value = Math.cos(radians).toFixed(5);
    } catch {
        display.value = "Error";
    }
};

// TAN in degrees
document.querySelector("button:nth-child(7)").onclick = function () {
    try {
        let radians = eval(display.value) * Math.PI / 180;
        display.value = Math.tan(radians).toFixed(5);
    } catch {
        display.value = "Error";
    }
};

// Square root (√)
document.querySelector("button:nth-child(8)").onclick = function () {
    try {
        display.value = Math.sqrt(eval(display.value)).toFixed(5);
    } catch {
        display.value = "Error";
    }
};
