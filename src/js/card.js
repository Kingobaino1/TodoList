const card = () => {
  // let content = document.querySelector('.colum2');
  const containerDiv = document.createElement('div');
  containerDiv.className = 'grid-cols-2 gap-4';
  const div1 = document.createElement('div');
  div1.className = 'flex justify-center';
  const h6 = document.createElement('h6');
  h6.className = 'text-dark m-2';
  h6.textContent = 'Task Name';
  const form = document.createElement('form');
  form.className = 'flex justify-between';

    
  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.setAttribute('id', 'checkbox');
  check.className = 'm-3'

  const input = document.createElement('input');
  input.setAttribute('type', 'date');
  input.setAttribute('id', 'form-card');
  input.className = 'ml-3'
  

 form.appendChild(check);
 form.appendChild(input);
 div1.appendChild(h6);
 div1.appendChild(form);
 containerDiv.appendChild(div1);
//  content.appendChild(containerDiv)
return containerDiv;


};

export default card;