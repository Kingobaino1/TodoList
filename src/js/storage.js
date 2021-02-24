const Storage = () => {
  let projects = [];
  const saveLocal = () => {
     localStorage.setItem('projects', JSON.stringify(projects));
  };

  const populateData = () => {
    projects = JSON.parse(localStorage.getItem('projects'));
    if (projects === null) {
      projects = [];
    };
  };
  return {
    projects,
    saveLocal,
    populateData
  }
} 

export default Storage;
