document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    const priority = document.getElementById('priority').value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');

    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });
    checkboxContainer.appendChild(checkbox);

    const span = document.createElement('span');
    span.textContent = taskText;

    const priorityBadge = document.createElement('span');
    priorityBadge.classList.add('priority', priority);
    priorityBadge.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    checkboxContainer.appendChild(span);
    li.appendChild(checkboxContainer);
    li.appendChild(priorityBadge);
    li.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(li);

    document.getElementById('new-task').value = '';
});
