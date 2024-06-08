import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask, deleteTask } from './tasksGateway.js';

export const onToggleTask = e => {
        const isCheckbox = e.target.classList.contains('list__item-checkbox');
    //const isCheckboxDell = e.target.classList.contains('list__item__delete-btn');

    console.log(e.target);
    if (isCheckbox) {        

        const taskId = e.target.dataset.id;        
        const tasksList = getItem('tasksList');
        const { text, createDate } = tasksList
            .find(task => task.id === taskId);
        const done = e.target.checked;

        const updatedTask = {
            text,
            createDate,
            done,
            finishDate: done
                ? new Date().toISOString()
                : null
        };
        updateTask(taskId, updatedTask)
            .then(() => getTasksList())
            .then(newTasksList => {
                setItem('tasksList', newTasksList);
                renderTasks();

            });
    } else {        
        const taskId = e.target.dataset.id;        
        deleteTask(taskId);
        renderTasks();
    }
};
    // const newTasksList = tasksList
    //     .map(task => {
    //         if (task.id === e.target.dataset.id) {
    //             const done = e.target.checked;
    //             return {
    //                 ...task,
    //                 done,
    //                 finishDate: done
    //                     ? new Date().toISOString()
    //                     : null
    //             };
    //         }

    //         return task;
    //     });
    // setItem('tasksList', newTasksList);

    // renderTasks();
