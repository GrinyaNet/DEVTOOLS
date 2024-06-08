import { createTask, getTasksList } from './tasksGateway.js';
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';    

    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString(),        
    };

    createTask(newTask)
    .then(() => getTasksList())
    .then( newTasksList => {
        setItem('tasksList', newTasksList);
        renderTasks();
    });
    

    // const newTasksList = tasksList.concat({
    //     text,
    //     done: false,
    //     createDate: new Date().toISOString(),
    //     id: Math.random().toString()
    // });

//    setItem('tasksList', newTasksList);

//    renderTasks();
};