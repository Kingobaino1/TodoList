import './style.css';

import navBar from './js/navBar';
import menuSection from './js/menu';
import addProjectForm from './js/projectForm';
//import FormField from './js/formField';
import Storage from './js/storage';
import taskDisplay from './js/taskDisplay'
import addNewTaskForm from './js/addNewTaskForm'
import TaskValues from './js/newTaskValues';
import taskCard from './js/projects';
import showHide from './js/showHidde';
import projectList from './js/projectList'

const {
  projects,
  saveLocal,
  populateData
} = Storage();

const {
  divTaskForm,
  button,
  input1,
  input2,
  input3,
  select
} = addNewTaskForm();

let {
  container,
  submitBtn,
  cancelBtn,
  input
} = addProjectForm()

// Global variables
let taskObj = [];
let idElement;

//layout
const content = document.querySelector('#content');

let menuDiv = document.getElementById('menu');
menuDiv.append(menuSection());

let listDiv = document.getElementById('listProjectDiv');
listDiv.append(projectList());

let main = document.getElementById('navigation');
main.appendChild(navBar());

const showProjectForm = () => {
  content.append(container)
  showHide(container);
};

const clearProjectForm = () => {
  input1.value = '';
  input2.value = '';
  input3.value = '';
  select.value = 'Important';
}

const submitForm = () => {
  let name = input.value;
  localStorage.setItem(name, '');
  container.style.display = 'none';

  const btnList = document.getElementById('btnList');
  btnList.innerHTML = '';
  btnList.append(projectList());
  input.value = '';
};

function getID(e) {
  idElement = e.target.parentNode.id;
  //NavBar project name set
  const projectname = document.getElementById('selectedProject');
  projectname.textContent = idElement;

  content.innerHTML = '';
  content.append(taskDisplay());
  const taskListContainer = document.getElementById('taskListContainer');
  taskListContainer.append(taskCard(idElement))
  //taskCard(idElement);

  let btnNewTaskForm = document.getElementById('showNewTaskForm');
  btnNewTaskForm.addEventListener('click', newTask);
  let deleteTask = document.getElementById('deleteTask');
  deleteTask.addEventListener('click', deleteTaskItem);
}

function newTask() {
  const displayForm = document.getElementById('taskFormDisplay');
  displayForm.append(divTaskForm);
  showHide(displayForm);
}

function deleteTaskItem(e) {
  const deleteElement = e.target;
  const delkey = deleteElement.getAttribute("key");
  const deletePos = deleteElement.getAttribute("position");

  const existingEntries = JSON.parse(localStorage.getItem(delkey));
  existingEntries.splice(deletePos, 1);
  localStorage.setItem(delkey, JSON.stringify(existingEntries));
}



const addTask = () => {
  let task = TaskValues(input1.value, input2.value, input3.value, select.value);
  taskObj.push(task);
  console.log(taskObj)
  localStorage.setItem(idElement, JSON.stringify(taskObj));
  clearProjectForm();
  const taskListContainer = document.getElementById('taskListContainer');
  taskListContainer.append(taskCard(idElement));
  taskCard(idElement);
};



const cancelForm = () => {
  container.style.display = 'none';
  //window.location.reload();
};

const loop = () => {
  display.forEach((obj) => {

  })
}

// All actions for buttons
let addProject = document.getElementById('addProjectBtn');
addProject.addEventListener('click', showProjectForm);

submitBtn.addEventListener('click', submitForm);
cancelBtn.addEventListener('click', cancelForm);

button.addEventListener('click', addTask);

let projectTask = document.getElementsByClassName('btnListPro');

let buttonsTest = Object.values(projectTask);
// buttonsTest.forEach(element => element.addEventListener('click', (e) => {
//   console.log(e.target.parentNode.id)
// }));

buttonsTest.forEach(element => {
  element.addEventListener('click', getID);
});