let projectTask = document.getElementsByClassName('btnListPro');
let buttonsTest = Object.values(projectTask);
//console.log(buttonsTest)
buttonsTest.forEach(element => element.addEventListener('click', console.log(element.id)));
