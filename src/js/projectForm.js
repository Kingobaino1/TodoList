const addProjectForm = () => {
    const container = document.createElement('div');
    container.className = 'w-3/12 pt-32';
    const form = document.createElement('div');
    
    const div1 = document.createElement('div');
    div1.className = 'shadow sm:rounded-md sm:overflow-hidden';
    const div2 = document.createElement('div');
    div2.className = 'px-4 py-5 bg-white space-y-6 sm:p-6';
    const div3 = document.createElement('div');
    div3.className = 'grid grid-cols-3 gap-6';
    const div4 = document.createElement('div');
    div4.className = 'col-span-3 sm:col-span-2';
    const label = document.createElement('label');
    label.className = 'block text-sm font-medium text-gray-700';
    label.textContent = 'Project name';
    const div5 = document.createElement('div');
    div5.className = 'mt-1 flex rounded-md shadow-sm';
    const span = document.createElement('span');
    span.className = 'inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-150 text-gray-500 text-sm';
    const input = document.createElement('input');
    input.className = 'border-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm';
    input.setAttribute('placeholder', 'Project name');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'projectName')
    const div6 = document.createElement('div');
    div6.className = 'px-4 py-3 text-right sm:px-6';
    const submitBtn = document.createElement('button');
    submitBtn.className = 'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
    submitBtn.textContent = 'Save Project';
    submitBtn.setAttribute('type', 'button');

    container.append(form, div1, div2, div3, div4, div5, div6);
    div4.append(label);
    div6.append(submitBtn);

    return container, submitBtn;

}


export default addProjectForm;