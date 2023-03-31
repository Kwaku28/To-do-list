import './style.css';

const toDoList = [
  {
    index: '1',
    description: 'Go for a walk',
    completed: 'false',
  },

  {
    index: '1',
    description: 'Doctors appointment',
    completed: 'false',
  },

  {
    index: '1',
    description: 'Pick daughter from school',
    completed: 'false',
  },
];

const taskList = document.querySelector('.task-container');

taskList.innerHTML = '';

const loadList = () => {
  toDoList.forEach((todolist) => {
    const li = document.createElement('li');
    li.classList.add('new-list');
    li.innerHTML = `
        <input type="checkbox">
        <label>${todolist.description}</label>
        <span class="material-symbols-outlined">more_vert</span>
        `;

    taskList.append(li);
  });
};

window.onload = () => {
  loadList();
};
