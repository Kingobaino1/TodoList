import './style.css';

import navBar from './js/navBar';
import menuSection from './js/menu';
import addProjectForm from './js/projectForm';
import FormField from './js/formField';
import Storage from './js/storage';
import taskHTML from './js/taskDisplay'
import card  from './js/card';

const {
  projects,
  saveLocal,
  populateData
} = Storage();

const {
  div,
  div3
} = navBar();
const { div1, addBtn } = menuSection();
let { container, submitBtn, cancelBtn, input } = addProjectForm()

const content = document.querySelector('#content');
// content.appendChild(card());

content.append(taskHTML())

const showProjectForm = () => {
  content.appendChild(container)
  if (container.style.display === 'none') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
};

const submitForm = () => {
  let name = FormField(input.value);
  console.log('line 27', input.value);
  //projects.push(name);
  localStorage.setItem(name, '');
  console.log(projects)
  // saveLocal();
  // populateData();
  container.style.display = 'none';
};

function getID(e) {
  let idElement = e.target.parentNode.id;
  div3.textContent = idElement;
  alert(idElement)

  // const list = localstorage(key).value;
  // if (e.target === list) {
  //   console.log(list)
  // }
}


const cancelForm = () => {
  container.style.display = 'none';
  //window.location.reload();
};

let main = document.getElementById('navigation');
main.appendChild(div);

let menuDiv = document.getElementById('menu');
menuDiv.appendChild(div1);

addBtn.addEventListener('click', showProjectForm)
submitBtn.addEventListener('click', submitForm);
cancelBtn.addEventListener('click', cancelForm);

let projectTask = document.getElementsByClassName('btnListPro');
let buttonsTest = Object.values(projectTask);
console.log(buttonsTest);
buttonsTest.forEach(element => element.addEventListener('click', (e) => {console.log(e.target.parentNode.id)}));
buttonsTest.forEach(element => {element.addEventListener('click', getID )});
