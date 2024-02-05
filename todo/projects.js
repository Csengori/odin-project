import { createTask } from './tasks';

function createProject (title, desc) {
    const defaultTask = createTask("Task 1", "Default task", new Date(), false);
    const taskList = [ defaultTask ];
    const detailsHidden = false;
    return {
        title,
        desc,
        taskList,
        detailsHidden,
        addTask(task) {
            this.taskList.push(task);
        }
    };
}

export { createProject };