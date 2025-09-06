function showNote() {
  const input = document.getElementById("quoteInput");
  const output = document.getElementById("Board");
  output.innerText = input.value;

}

function makeBold() {
  const output = document.getElementById("Board");
  output.style.fontWeight = "bold";

}
function tryHTML() {
 const output = document.getElementById("Board");
 output.innerHTML = "<b>" + output.innerText + "</b>";
}
function clearNote() {
 const output = document.getElementById("Board");
 output.textContent = "";
}
function makeItalic(){
    const output = document.getElementById("Board");
    output.style.fontStyle = "italic";
}
