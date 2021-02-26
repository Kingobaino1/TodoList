import logo from '../img/logo.png'

const navBar = (btnClic) => {
    const div = document.createElement('div');
    div.className = 'container flex justify-between items-center mx-auto py-4';

    const div2 = document.createElement('div');
    const img = document.createElement('img');
    img.className = 'h-10';
    img.src = logo;

    const div3 = document.createElement('div');
    div3.id = 'selectedProject';
    div3.className = 'font-semibold text-blue-400 text-xl'
    div3.textContent = 'No project selected';

    div.append(div2, div3);
    div2.append(img);

    return div;
}

export default navBar;
