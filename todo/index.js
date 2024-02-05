import './style.css';
import { createProject } from './projects';
import { createTask } from './tasks';
import { renderProjects, renderModals } from './renderer';

let projectList = JSON.parse(localStorage.getItem('projectList')) || [];

renderModals();
renderProjects();