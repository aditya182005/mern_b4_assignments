
// Difficulty: very easy


function showTask() {
 const input = document.getElementById("taskInput");
 const output = document.getElementById("output");


 // ── TEACHING-BUG #2 (logic) ──
 output.innerText = input.value;


 // ── TEACHING-BUG #5 (style) ──
 output.style.fontSize = "32px";
}


function makeBold() {
 const output = document.getElementById("output");
 output.style.fontWeight = "bold";
 //output.style.color = "red";
}


function tryHTML() {
 const output = document.getElementById("output");
 output.innerHTML = "<b>" + output.innerText + "</b>";
}


function clearTask() {
 const output = document.getElementById("output");
 output.textContent = "";
}



