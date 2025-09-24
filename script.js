const character = "#";
const count = 8;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = rows.join("\n");

// Show in console (debug)
console.log(result);

// Show on page
const pre = document.createElement("pre");
pre.textContent = result;
document.body.appendChild(pre);
