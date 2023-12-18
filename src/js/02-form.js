const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageInput = feedbackForm.querySelector('[name="message"]');

// Load form state from local storage
const savedFormState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedFormState.email || '';
messageInput.value = savedFormState.message || '';

// Listen for input events on the form and save state to local storage
feedbackForm.addEventListener('input', () => {
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

// Listen for form submit
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if both email and message are filled
  if (emailInput.value.trim() && messageInput.value.trim()) {
    // Log the form data to the console
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    console.log(formData);

    // Clear form and local storage
    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
  }
});
