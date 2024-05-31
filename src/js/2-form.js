
const localStorageKey = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    emailInput.value = JSON.parse(savedData).email || '';
    messageTextarea.value = JSON.parse(savedData).message || '';
  }
});

form.addEventListener('input', () => {
  formData.email = emailInput.value.trim();
  formData.message = messageTextarea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
    formData.email = emailInput.value.trim();
    formData.message = messageTextarea.value.trim();
  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey); 
    form.reset(); 
  }
});


