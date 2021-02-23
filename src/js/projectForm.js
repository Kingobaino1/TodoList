const addProjectForm = () => {
    const container = document.createElement('div');
    container.className = 'container px-8 pt-48 pb-24 mx-auto lg:px-4';

    const form = document.createElement('form');
    form.className = 'addProjectForm';

    const div1 = document.createElement('div');
    div1.className = 'relative';

    const input = document.createElement('input');
    input.setAttribute('id', 'projectName');
    input.setAttribute('placeholder', 'Add project name');
    input.setAttribute('type', 'text');
    input.className = 'addProjectInput';

    const submitBtn = document.createElement('button');
    submitBtn.className = 'bg-blue-600 hover:bg-blue-700 addProjectBtn mb-3';
    submitBtn.textContent = 'Add Project';
    submitBtn.setAttribute('type', 'button');
    
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'bg-red-700 hover:bg-red-800 addProjectBtn';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.setAttribute('type', 'button');

    container.append(form);
    form.append(div1, submitBtn, cancelBtn);
    div1.append(input);


    return {
        container,
        submitBtn,
        cancelBtn,
        input
    };

}


export default addProjectForm;