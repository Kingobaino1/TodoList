import './style.css';

import navBar from './js/navBar';
import menuSection from './js/menu';
import addProjectForm from './js/projectForm';
import FormField from './js/formField';
import Storage from './js/storage';
import taskHTML from './js/taskDisplay'
import addNewTaskForm from './js/addNewTaskForm'
import TaskValues from './js/newTaskValues';


const {
  projects,
  saveLocal,
  populateData
} = Storage();

// const {
//   task,
//   description,
//   date,
//   priority
// } = taskValues();

const {
  divTaskForm,
  button,
  input1,
  input2,
  input3,
  select
} = addNewTaskForm();

const {
  mainList,
  containerNewTask,
  btnNewTask
} = taskHTML();

const {
  div,
  div3
} = navBar();
const { div1, addBtn } = menuSection();
let { container, submitBtn, cancelBtn, input } = addProjectForm()

const content = document.querySelector('#content');
containerNewTask.append(divTaskForm);

let taskObj = [];
let idElement

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
  idElement = e.target.parentNode.id;
  div3.textContent = idElement;
  content.append(mainList);

  // const list = localstorage(key).value;
  // if (e.target === list) {
  //   console.log(list)
  // }
}

const newTask = () => {
  if(containerNewTask.className === 'hidden'){
    containerNewTask.className = 'block';
  } else {
    containerNewTask.className = 'hidden';
  }
};


const addTask = () => {
  let task = TaskValues(input1.value, input2.value, input3.value, select.value)
  taskObj.push(task);
  localStorage.setItem(idElement, taskObj);
};

const loop = () => {
  addTask().forEach(obj => obj)
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
btnNewTask.addEventListener('click', newTask);
button.addEventListener('click', addTask);

let projectTask = document.getElementsByClassName('btnListPro');
let buttonsTest = Object.values(projectTask);
console.log(buttonsTest);
buttonsTest.forEach(element => element.addEventListener('click', (e) => {console.log(e.target.parentNode.id)}));
buttonsTest.forEach(element => {element.addEventListener('click', getID )});

// console.log(loop());