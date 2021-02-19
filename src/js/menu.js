// import { list } from "postcss";
import down from '../img/chevron-down.png';
import plus from '../img/plus.png';
import bullet from '../img/bullet.png';

const menuSection = () => {
    // const div1 = document.createElement('div');
    // div1.className = 'flex justify-center items-center text-gray-600 text-base font-medium';
    // const div2 = document.createElement('div');
    // div2.className = 'w-3.5';
    // div2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>';
    
    // const div3 = document.createElement('div');
    // div3.textContent = 'Projects'
    
    // const addBtn = document.createElement('button');
    // addBtn.className = 'rounded-full w-4 h-4 bg-blue-500 p-0 border-0 inline-flex items-center justify-center text-white ml-4';
    // addBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>'
    // addBtn.setAttribute('id', 'addProject');

    // div1.append(div2, div3, addBtn);
  

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

    div1.append(div2);
    div2.append(nav);
    nav.append(span1, ul);
    ul.append(li);
    li.append(addBtn);
    addBtn.append(chevronDown, span2, add);

    return { div1, addBtn } ;
}

export default menuSection;