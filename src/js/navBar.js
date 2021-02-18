import logo from '../img/logo.png'

const navBar = () => {
    const div1 = document.createElement('div');
    div1.className = 'container flex justify-between mx-auto';

    const div2 = document.createElement('div');

    const img = document.createElement('img');
    img.className = 'h-10';
    img.src = logo;

    const div3 = document.createElement('div');
    div3.textContent = 'Project Name';

    const div4 = document.createElement('div');

    const taskBut = document.createElement('button');
    taskBut.className = 'taskBtn';
    taskBut.textContent = 'New Task';

    div1.append(div2, div3, div4);
    div2.append(img);
    div4.append(taskBut);

    return div1
}

export default navBar;