const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function handleTaskClick(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('completed');
    } else if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
}