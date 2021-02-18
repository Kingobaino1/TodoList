const navBar = () => {
    const div1 = document.createElement('div');
    div1.className = 'container flex justify-between mx-auto';

    const div2 = document.createElement('div');
    div2.textContent = 'Logo';

    const div3 = document.createElement('div');
    div3.textContent = 'Project Name';

    const div4 = document.createElement('div');

    const taskBut = document.createElement('button');
    taskBut.className = 'taskBtn';
    taskBut.textContent = 'New Task';

    div1.append(div2, div3, div4);
    div4.append(taskBut);

    return div1
}

export default navBar;