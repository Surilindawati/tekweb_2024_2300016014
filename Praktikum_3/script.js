// Change Background Color
const bgColorSelect = document.getElementById('bgColor');
bgColorSelect.addEventListener('change', function () {
    document.body.style.backgroundColor = this.value;
});

// Change Font Size
const fontSizeInput = document.getElementById('fontSize');
fontSizeInput.addEventListener('input', function () {
    document.body.style.fontSize = this.value + 'px';
});

// Toggle Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Change Font Style
const fontStyleSelect = document.getElementById('fontStyle');
fontStyleSelect.addEventListener('change', function () {
    document.body.style.fontFamily = this.value;
});
// Reference to the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task functionality
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input field after adding
    }
});

// Function to add task to the list
function addTask(taskText) {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = deleteTask;

    // Append the task and delete button to the li
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Double click to edit task
    taskSpan.addEventListener('dblclick', function() {
        editTask(taskSpan);
    });

    // Mark task as completed when clicked
    taskSpan.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Append li to task list
    taskList.appendChild(li);
}

// Delete task functionality
function deleteTask() {
    this.parentElement.remove();
}

// Edit task functionality
function editTask(taskSpan) {
    const currentText = taskSpan.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;

    taskSpan.replaceWith(input);

    // Save changes when Enter is pressed
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const newText = input.value.trim();
            if (newText !== '') {
                input.replaceWith(taskSpan);
                taskSpan.textContent = newText;
            }
        }
    });
}
