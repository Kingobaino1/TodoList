// import { list } from "postcss";
import down from '../img/chevron-down.png';
import plus from '../img/plus.png';
import bullet from '../img/bullet.png';

const menuSection = () => { 

    const div1 = document.createElement('div');
    div1.className = 'antialiased bg-gray-200 min-h-screen p-8';
    const div2 = document.createElement('div');
    div2.className = 'flex justify-center';
    const nav = document.createElement('nav');
    nav.className = 'w-56 relative';
    const span1 = document.createElement('span');
    span1.className = 'absolute h-10 w-full bg-white rounded-lg shadow';
    const ul = document.createElement('ul');
    ul.className = 'relative';
    const li = document.createElement('li');
    li.className = 'mb-5';
    const addBtn  = document.createElement('button');
    addBtn.className = 'py-2 px-5 w-full flex items-center justify-between';
    addBtn.setAttribute('id', 'addProject');
    const chevronDown = document.createElement('img');
    chevronDown.className = 'w-3';
    chevronDown.src = down;
    const span2 = document.createElement('span');
    span2.className = 'ml-2 text-sm font-medium';
    span2.textContent = 'PROJECTS';
    const add = document.createElement('img');
    add.className = 'ml-5';
    add.src = plus;

    const listProj = document.createElement('div');
    listProj.id = 'btnList';

    for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        let containerList = document.createElement('div');
        // containerList.setAttribute('onClick', 'getID(this.id)');
        containerList.className = 'flex cursor-pointer mt-1 btnListPro';
        containerList.id = localStorage.key(i).toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
        
        const spanList = document.createElement('span');
        spanList.textContent = `${key}` //Put the varable of localstorage to loop here
        const bulletImg = document.createElement('img');
        bulletImg.className = 'ml-5 mr-3 mt-2.5 h-1.5 w-1.5';
        bulletImg.src = bullet;

        listProj.append(containerList);
        containerList.append(bulletImg, spanList);
    }
    
    div1.append(div2, listProj);
    div2.append(nav);
    nav.append(span1, ul);
    ul.append(li);
    li.append(addBtn);
    addBtn.append(chevronDown, span2, add);

    return { div1, addBtn } ;
}

export default menuSection;