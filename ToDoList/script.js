document.addEventListener('DOMContentLoaded', function() {
  const todoList = document.getElementById('todo-list');
  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');

  addButton.addEventListener('click', addTask);

  todoList.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
      toggleTask(event.target);
    }
  });

  todoList.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
      deleteTask(event.target);
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      return;
    }

    const taskElement = createTaskElement(taskText);
    todoList.appendChild(taskElement);

    taskInput.value = '';
  }

  function createTaskElement(taskText) {
    const taskElement = document.createElement('li');
    taskElement.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskSpan);
    taskElement.appendChild(deleteButton);

    return taskElement;
  }

  function toggleTask(checkbox) {
    const taskSpan = checkbox.nextElementSibling;
    taskSpan.classList.toggle('completed');
  }

  function deleteTask(button) {
    const taskElement = button.parentElement;
    taskElement.remove();
  }
});
