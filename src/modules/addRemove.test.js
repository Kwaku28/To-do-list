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
