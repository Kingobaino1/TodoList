import logo from '../img/logo.png'

const navBar = (btnClic) => {
    const div1 = document.createElement('div');
    div1.className = 'container flex justify-between items-center mx-auto py-4';

    const div2 = document.createElement('div');
    const img = document.createElement('img');
    img.className = 'h-10';
    img.src = logo;

    const div3 = document.createElement('div');
    div3.textContent = 'Project Name';

    div1.append(div2, div3);
    div2.append(img);

    return div1
}

export default navBar;