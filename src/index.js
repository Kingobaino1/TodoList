import './style.css';

import navBar from './js/navBar';
import menuSection from './js/menu';
import addProjectForm from './js/projectForm';
import FormField from './js/formField';
import Storage from './js/storage';

const {
  projects,
  saveLocal,
  populateData
} = Storage();

const { div1, addBtn } = menuSection();
let { container, submitBtn, cancelBtn, input } = addProjectForm()

const content = document.querySelector('#content');


const showProjectForm = () => {
  content.appendChild(container)
};

const submitForm = () => {
  let name = FormField(input.value);
  projects.push(name);
  saveLocal();
  populateData();
};

const cancelForm = () => {
  container.className = 'hidden';
  window.location.reload();
};

let main = document.getElementById('navigation');
main.appendChild(navBar());

let menuDiv = document.getElementById('menu');
menuDiv.appendChild(div1);

addBtn.addEventListener('click', showProjectForm)
submitBtn.addEventListener('click', submitForm);
cancelBtn.addEventListener('click', cancelForm);

