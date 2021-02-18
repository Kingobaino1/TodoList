const menuSection = () => {
    const div1 = document.createElement('div');
    div1.className = 'flex justify-center items-center text-gray-600 text-base font-medium';
    const div2 = document.createElement('div');
    div2.className = 'w-3.5';
    div2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>';
    
    const div3 = document.createElement('div');
    div3.textContent = 'Projects'
    
    const addBtn = document.createElement('button');
    addBtn.className = 'rounded-full w-4 h-4 bg-blue-500 p-0 border-0 inline-flex items-center justify-center text-white ml-4';
    addBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>'
    addBtn.setAttribute('id', 'addProject');

    div1.append(div2, div3, addBtn);

    return { div1, addBtn } ;
}

export default menuSection;