class TodoList {
  constructor() {
    this.tasks = [];
  }

      addTask = (description) => {
        const completed = false;
        const id = this.tasks.length + 1;
        const task = {
          id,
          description,
          completed,
        };
        this.tasks.push(task);
      };

      removeList = (id) => {
        this.tasks.forEach((task) => {
          if (task.id === id) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
          }
        });
      };

      displayToDo = (list) => {
        list.innerHTML = '';
        this.tasks.forEach((task) => {
          const li = `<li id="${task.id}" class="new-list">
          <input
            type="checkbox"
            id="${task.id}"
            name="task"
            value="task"
            ${task.completed ? 'checked' : ''}
            class="checkbox"
          />
          <input
            type="text" id="${task.id}" class="text-area" name="task" value="${task.description}" />
            
            <span class="material-symbols-outlined delete"> delete </span>
            
        </li>`;
          list.innerHTML += li;
        });

        const checkbox = document.querySelectorAll('.checkbox');

        checkbox.forEach((check) => {
          check.addEventListener('change', () => {
            if (check.checked) {
              check.parentElement.classList.add('complete');
              this.tasks = this.tasks.map((task) => {
                if (task.id === parseInt(check.parentElement.id, 10)) {
                  task.completed = check.checked;
                }
                return task;
              });
              this.setStorage();
            } else {
              check.parentElement.classList.remove('complete');
              this.tasks = this.tasks.map((task) => {
                if (task.id === parseInt(check.parentElement.id, 10)) {
                  task.completed = false;
                }
                return task;
              });
              this.setStorage();
            }
          });
        });

        // A function for editing the task description.
        const textArea = document.querySelectorAll('.text-area');
        textArea.forEach((area) => {
          area.addEventListener('click', () => {
            const result = this.tasks.filter((task) => task.id === Number(area.id));
            this.tasks[result[0].id - 1].description = area.value;
            this.setStorage();
          });
        });
      }

      resetIndex = () => {
        let initialIndex = 1;
        this.tasks.forEach((task) => {
          task.id = initialIndex;
          initialIndex += 1;
        });
      };

      // A function for updating an item's 'completed' status.
      showCompleted = () => {
        this.tasks.forEach((task) => {
          task.completed = true;
        });
      };

      // The "Clear all completed" function.
      cleanCompleted = () => {
        this.tasks = this.tasks.filter((task) => task.completed === false);
      };

      setStorage = () => {
        const formData = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', formData);
      };

      getStorage = () => {
        if (localStorage.getItem('tasks')) {
          this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
      };
}
module.exports = TodoList;
