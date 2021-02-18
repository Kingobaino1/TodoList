import './style.css';

import navBar from './js/navBar';
import menuSection from './js/menu';
import addProjectForm from './js/projectForm';

const { div1, addBtn } = menuSection();
let { container, submitBtn } = addProjectForm()

const content = document.querySelector('#content');

const showProjectForm = () => {
  content.appendChild(container)
};
const submitForm = () => {
  console.log('Hello');
};

let main = document.getElementById('navigation');
main.appendChild(navBar());

let menuDiv = document.getElementById('menu');
menuDiv.appendChild(div1);

addBtn.addEventListener('click', showProjectForm)
submitBtn.addEventListener('click', submitForm);

