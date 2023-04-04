/**
 * @jest-environment jsdom
 */

import TodoList from './addtask.js';

describe('Should editing the task description and and update completed task', () => {
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

  test('showCompleted function sets completed property of all tasks to true', () => {
    const todoList = new TodoList();

    todoList.addTask('Write code');
    todoList.addTask('Test code');
    todoList.showCompleted();

    todoList.tasks.forEach((task) => {
      expect(task.completed).toBe(true);
    });
  });
});
