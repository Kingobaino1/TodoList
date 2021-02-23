import './style.css';

import navBar from './js/navBar';
import menuSection from './js/menu';
import addProjectForm from './js/projectForm';
import FormField from './js/formField';
import Storage from './js/storage';
import card  from './js/card';

const {
  projects,
  saveLocal,
  populateData
} = Storage();


const { div1, addBtn } = menuSection();
let { container, submitBtn, cancelBtn, input } = addProjectForm()

const content = document.querySelector('#content');
content.appendChild(card());

const showProjectForm = () => {
  content.appendChild(container)
  //content.className = 'block';
};

const submitForm = () => {
  let name = FormField(input.value);
  console.log('line 27', input.value);
  //projects.push(name);
  localStorage.setItem(name, '');
  console.log(projects)
  // saveLocal();
  // populateData();
  menuSection;
};

function getID(clicked_id) {
  alert(clicked_id)
  // const list = localstorage(key).value;
  // if (e.target === list) {
  //   console.log(list)
  // }
}

const cancelForm = () => {
  container.className = 'hidden';
  //window.location.reload();
};

let main = document.getElementById('navigation');
main.appendChild(navBar());

let menuDiv = document.getElementById('menu');
menuDiv.appendChild(div1);

addBtn.addEventListener('click', showProjectForm)
submitBtn.addEventListener('click', submitForm);
cancelBtn.addEventListener('click', cancelForm);

// let projectTask = document.getElementsByClassName('btnListPro');
// let buttonsTest = Object.values(projectTask);
// console.log(buttonsTest)
// buttonsTest.forEach(element => element.addEventListener('click', getID(element)));


