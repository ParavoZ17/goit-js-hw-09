
const localStorageKey = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    form.elements.email.value = JSON.parse(savedData).email || '';
    form.elements.message.value = JSON.parse(savedData).message || '';
  }
});

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();;
  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey); 
    form.reset(); 
  }
});


// const inputName = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// inputName.addEventListener("input", handelinput);
// function handelinput(event) { 
//     const trimtValue = event.target.value.trim();
//     if (trimtValue) {
//       return (nameOutput.textContent = trimtValue);
//     };
//     return nameOutput.textContent = "Anonymous" ;
// };