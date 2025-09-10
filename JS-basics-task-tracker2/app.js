// Difficulty: easy


// Get references to elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


// ── TEACHING-BUG #3 (intent) ──
function clearAllTasks() {
 const clearBtn = document.getElementById("clearBtn");
 taskList.innerHTML = "";
}


// Add event listener to addBtn
addBtn.addEventListener("click", function () {
 const task = input.value.trim();


 // ── TEACHING-BUG #6 (logic) ──
 if (task.length > 0) {
   // ── TEACHING-BUG #2 (logic) ──
   taskList.innerHTML +="<br>" + task + "<br>";
 }


 // ── TEACHING-BUG #8 (comment) ──
 // This "clears the taskList"
 input.value = "";
});
clearBtn.addEventListener("click", clearAllTasks);

// TODO: Make the functionality of Clear Button work
// TODO: Handle extra HTML code visible in task list
// TODO: Prevent adding empty tasks
// TODO: Add visual cue for empty task list
