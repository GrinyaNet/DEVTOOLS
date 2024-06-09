import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    getTasksList()
        .then(tasksList => {
            setItem('tasksList', tasksList)
            renderTasks();
        })
    
    initTodoListHandlers();
});

const onStarageChange = e => {
    if (e.key === 'taskslist') {
        renderTasks();
    }
};

window.addEventListener('storage', onStarageChange);