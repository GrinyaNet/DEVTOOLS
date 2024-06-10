import { initTodoListHandlers } from './todoList';
import { renderTasks } from './renderer';
import { getTasksList } from './tasksGateway';
import { setItem } from './storage';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((tasksList) => {
      setItem('tasksList', tasksList);
      renderTasks();
    });

  initTodoListHandlers();
});

const onStarageChange = (e) => {
  if (e.key === 'taskslist') {
    renderTasks();
  }
};

window.addEventListener('storage', onStarageChange);
