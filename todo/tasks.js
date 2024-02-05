// Dates should be added in the format of YYYY-MM-DD

import { format } from 'date-fns';

function createTask (title, desc, dueDate, highPriority) {
    const completed = false;
    const detailsHidden = true;
    const formattedDueDate = format(dueDate, 'yyyy-MM-dd');

    return {
        title,
        desc,
        dueDate: formattedDueDate,
        highPriority,
        detailsHidden,
        completed
    };
}

export { createTask };