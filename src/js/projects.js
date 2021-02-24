
import bullet from '../img/bullet.png';


const project = (name) => {
  const parent = document.querySelector('.column1');
  const listProj = document.createElement('div');
  let containerList = document.createElement('button');
  containerList.setAttribute('onClick', 'getID(this.id)');
  containerList.className = 'flex cursor-pointer mt-1 btnListPro';
  containerList.id = name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  
  const spanList = document.createElement('span');
  spanList.textContent = name //Put the varable of localstorage to loop here
  const bulletImg = document.createElement('img');
  bulletImg.className = 'ml-5 mr-3 mt-2.5 h-1.5 w-1.5';
  bulletImg.src = bullet

  listProj.appendChild(containerList);
  containerList.appendChild(bulletImg);
  containerList.appendChild(spanList);
  parent.appendChild(listProj)
  console.log('pro', name)
}
export default project;