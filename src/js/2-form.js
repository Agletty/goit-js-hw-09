const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

const feedbackForm = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onTextareaInput);
updateOutput();

function onTextareaInput(event) {
  event.preventDefault();

  feedbackForm.email = email.value.trim();
  feedbackForm.message = message.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}

function onFormSubmit(event) {
  event.preventDefault();
  const registForm = {
    email: email.value,
    message: message.value,
  };

  if (registForm.email === '' || registForm.message === '') {
    alert('Заповніть всі поля форми!');
    return;
  }

  console.log(registForm);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function updateOutput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
}
