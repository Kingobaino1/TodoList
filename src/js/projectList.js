import bullet from '../img/bullet.png';

const projectList = () => {
    const listProj = document.createElement('div');
    listProj.className = 'mt-7';
    listProj.id = 'btnList';

    for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        let containerList = document.createElement('div');
        containerList.className = 'flex cursor-pointer mt-1 btnListPro';
        containerList.id = localStorage.key(i);
        const spanList = document.createElement('span');
        spanList.textContent = `${key}` //Put the varable of localstorage to loop here
        const bulletImg = document.createElement('img');
        bulletImg.className = 'ml-5 mr-3 mt-2.5 h-1.5 w-1.5';
        bulletImg.src = bullet;

        listProj.append(containerList);
        containerList.append(bulletImg, spanList);
    }

    return listProj;
}

export default projectList;