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

describe('Test the "Clear all completed" function', () => {
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
});
