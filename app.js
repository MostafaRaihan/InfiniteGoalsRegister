document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('btn');
  const taskInput = document.getElementById('taskInput');
  const incompleteDiv = document.getElementById('incompleteTasks');
  const completedDiv = document.getElementById('completedTasks');

  // Add Task
  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = taskText;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        moveToCompleted(taskText, taskItem);
      }
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);

    incompleteDiv.appendChild(taskItem);
    taskInput.value = '';
  });

  // Move to completed
  function moveToCompleted(taskText, originalItem) {
    // Remove from incomplete
    originalItem.remove();

    const completedItem = document.createElement('div');
    completedItem.classList.add('item');

    const taskName = document.createElement('h4');
    taskName.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.addEventListener('click', () => {
      completedItem.remove();
    });

    completedItem.appendChild(taskName);
    completedItem.appendChild(deleteBtn);

    completedDiv.appendChild(completedItem);
  }
});
