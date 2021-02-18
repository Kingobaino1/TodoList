import './style.css';

import navBar from './js/navBar';
import menuSection from './js/menu';
import addProjectForm from './js/projectForm';

let { container, submitBtn } = addProjectForm()

let main = document.getElementById('navigation');
main.appendChild(navBar());

let menuDiv = document.getElementById('menu');
menuDiv.appendChild(menuSection());

let addProject = document.getElementById('addProject');
addProject.addEventListener('click', addProjectForm);

