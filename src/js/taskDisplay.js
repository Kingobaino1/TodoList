// import addNewTaskForm from './addNewTaskForm';

const taskHTML = () => {
    const mainList = document.createElement('section');
    mainList.className = 'container px-5 mt-12 mx-auto';
    const div1 = document.createElement('div');
    const btnNewTask = document.createElement('button');
    btnNewTask.className = 'w-full mb-8 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg';
    btnNewTask.textContent = 'New Task';
    div1.className = '-my-8 divide-y-2 divide-gray-100';

    const containerNewTask = document.createElement('div');
    containerNewTask.className = 'lg:w-1/2 md:w-2/3 mx-auto mb-10 hidden';

    //Loop from here
    const div2 = document.createElement('div');
    div2.className = 'py-8 flex flex-wrap md:flex-nowrap';
    const div3 = document.createElement('div');
    div3.className = 'md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col';
    const span1 = document.createElement('span');
    span1.className = 'font-semibold title-font text-gray-700';
    span1.textContent = 'Priority';
    const span2 = document.createElement('span');
    span2.className = 'mt-1 text-gray-500 text-sm';
    span2.textContent = 'Feb 28, 2021';

    const div4 = document.createElement('div');
    div4.className = 'md:flex-grow';
    const h1 = document.createElement('h2');
    h1.className = 'text-2xl font-medium text-gray-900 title-font mb-2';
    h1.textContent = 'Project Name Title';
    const p = document.createElement('p');
    p.className = 'leading-relaxed';
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris non leo blandit condimentum. Nunc sit amet risus ex.';
    const a = document.createElement('a');
    a.className = 'text-indigo-500 inline-flex items-center mt-4';
    a.textContent = 'Status: Complete';
    a.innerHTML = '<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';

    mainList.append(div1);
    
    div1.append(btnNewTask, containerNewTask, div2);
    // containerNewTask.append(addNewTaskForm());
    div2.append(div3, div4);
    div3.append(span1, span2);
    div4.append(h1, p, a);

    
    return {
        mainList,
        containerNewTask,
        btnNewTask
    }
}

export default taskHTML;
