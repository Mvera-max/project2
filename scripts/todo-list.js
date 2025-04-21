const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-task-btn');
const list = document.getElementById('todo-list');

// Handle adding a new task
addBtn.addEventListener('click', function () {
  const task = input.value.trim();
  if (task === '') {
    alert("You tryna add an empty task? Be serious.");
    return;
  }

  const li = document.createElement('li');
  li.classList.add('todo-item');

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.classList.add('complete-btn');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.classList.add('delete-btn');

  li.appendChild(taskText);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
});

// Handle clicks on complete or delete buttons
list.addEventListener('click', function (e) {
  const target = e.target;

  if (target.classList.contains('complete-btn')) {
    const item = target.parentElement;
    item.classList.toggle('completed');

    if (item.classList.contains('completed')) {
      showCongrats();
      throwConfetti(); // You'll integrate this later
    }
  }

  if (target.classList.contains('delete-btn')) {
    const item = target.parentElement;
    item.remove();
  }
});

function showCongrats() {
  const messages = [
    "Congrats, you did it!",
    "One step closer to greatness!",
    "You're on fire!",
    "Task? Absolutely conquered.",
    "Not all heroes wear capes."
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}
