const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageInput = feedbackForm.querySelector('[name="message"]');


const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedFormState.email || '';
messageInput.value = savedFormState.message || '';


feedbackForm.addEventListener('input', () => {
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});


feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();


  if (emailInput.value.trim() && messageInput.value.trim()) {

    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    console.log(formData);


    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
  }
});
