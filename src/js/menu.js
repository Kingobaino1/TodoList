// import { list } from "postcss";
import down from '../img/chevron-down.png';
import plus from '../img/plus.png';

const menuSection = () => { 

    const div1 = document.createElement('div');
    div1.className = 'antialiased bg-gray-200 min-h-screen p-8';
    div1.id = 'listProjectDiv';

    const div2 = document.createElement('div');
    div2.className = 'flex flex-row w-4/5 mx-auto items-center bg-white hover:bg-blue-400 h-10 rounded-md shadow cursor-pointer';
    div2.id = 'addProjectBtn';
    const div_down = document.createElement('div');
    const imageDown = document.createElement('img');
    imageDown.className = 'w-3 ml-4 mr-7';
    imageDown.src = down;
    const div_title = document.createElement('div');
    div_title.className = 'w-full font-medium text-center';
    div_title.textContent = 'PROJECTS';
    const imagePlus = document.createElement('img');
    imagePlus.className = 'mx-5';
    imagePlus.src = plus;

    // const listProj = document.createElement('div');
    // listProj.className = 'mt-7';
    // listProj.id = 'btnList';

    // for (let i = 0; i < localStorage.length; i += 1) {
    //     const key = localStorage.key(i);
    //     let containerList = document.createElement('div');
    //     containerList.className = 'flex cursor-pointer mt-1 btnListPro';
    //     containerList.id = localStorage.key(i);
    //     const spanList = document.createElement('span');
    //     spanList.textContent = `${key}` //Put the varable of localstorage to loop here
    //     const bulletImg = document.createElement('img');
    //     bulletImg.className = 'ml-5 mr-3 mt-2.5 h-1.5 w-1.5';
    //     bulletImg.src = bullet;

    //     listProj.append(containerList);
    //     containerList.append(bulletImg, spanList);
    // }
    
    // div1.append(div2, listProj);
    div1.append(div2);
    div2.append(div_down, div_title, imagePlus);
    div_down.append(imageDown);

    // div1.append(div2, listProj);
    // div2.append(nav);
    // nav.append(span1, ul);
    // ul.append(li);
    // li.append(addBtn);
    // addBtn.append(chevronDown, span2, add);

    //return { div1, addBtn } ;
    return div1;
}

export default menuSection;
