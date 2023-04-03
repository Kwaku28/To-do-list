import TodoList from './addtask.js';

// Add task
describe('addTask', () => {
  it('should add a task to the list', () => {
    const todoList = new TodoList();
    todoList.addTask('Write code');
    expect(todoList.tasks).toHaveLength(1);
    expect(todoList.tasks[0]).toEqual({
      id: 1,
      description: 'Write code',
      completed: false,
    });
  });
});

// Remove task
describe('removeTask', () => {
  it('should remove a task from the list', () => {
    const todoList = new TodoList();
    todoList.addTask('Write code');
    todoList.addTask('Test code');
    todoList.removeList(1);
    expect(todoList.tasks).toHaveLength(1);
    expect(todoList.tasks[0]).toEqual({
      id: 2,
      description: 'Test code',
      completed: false,
    });
  });
});

// editing the task description
test('should update the task description', () => {
  const todoList = new TodoList();
  todoList.addTask('Write code');
  const textArea = document.querySelectorAll('.text-area');
  textArea.forEach((area) => {
    area.value = 'Test code';
    area.dispatchEvent(new Event('change'));
    expect(todoList.tasks[0].description).toEqual('Test code');
  });
});

// Test the showCompleted function.
test('showCompleted function sets completed property of all tasks to true', () => {
  const todoList = new TodoList();
  todoList.addTask('Write code');
  todoList.addTask('Test code');
  todoList.showCompleted();
  todoList.tasks.forEach((task) => {
    expect(task.completed).toBe(true);
  });
});

// Test the "Clear all completed" function.
test('cleanCompleted should remove all completed tasks from the tasks array', () => {
  const todoList = new TodoList();
  todoList.addTask('Task 1');
  todoList.addTask('Task 2');
  todoList.addTask('Task 3');
  todoList.tasks[1].completed = true;
  todoList.cleanCompleted();
  expect(todoList.tasks.length).toBe(2);
  expect(todoList.tasks[0].description).toBe('Task 1');
  expect(todoList.tasks[1].description).toBe('Task 3');
});
