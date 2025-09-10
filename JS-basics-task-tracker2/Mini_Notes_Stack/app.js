// Get references to elements
const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const noteList = document.getElementById("noteList");


function clearAllNotes() {
 const clearBtn = document.getElementById("clearBtn");
 noteList.innerHTML = "";
}
// ...existing code...
addBtn.addEventListener("click", function () {
  const note = input.value.trim();

  if (note === "") {
    emptyMessage.textContent = "No notes available";
    emptyMessage.style.display = "block";
    input.focus();
    return;
  }

  // ...existing code for adding note...
 if (note.length > 0) {
   // ── TEACHING-BUG #2 (logic) ──
   noteList.innerHTML +="<br>" + note + "<br>";
 }


 // This "clears the noteList"
 input.value = "";
});
clearBtn.addEventListener("click", clearAllNotes);
