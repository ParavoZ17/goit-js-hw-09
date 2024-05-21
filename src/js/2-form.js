
const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;


document.addEventListener('ContentLoaded', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
});


form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey); 
    form.reset(); 
  }
});
