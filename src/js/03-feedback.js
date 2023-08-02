import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let dataForm = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();

    const {
        elements: { email, message },
      } = evt.currentTarget;

      if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields of the form');
      }

      dataForm = { email: email.value, message: message.value };


      console.log(dataForm);

 
    localStorage.removeItem('feedback-message');
    dataForm = {}
        evt.target.reset();

}


function onTextareaInput(evt) {

    dataForm[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-message', JSON.stringify(dataForm));
}
    

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-message');
    if (!savedMessage) return;

    dataForm = JSON.parse(savedMessage);
    

    if (dataForm.email) form.elements.email.value = dataForm.email;
    if (dataForm.message) form.elements.message.value = dataForm.message;
  }

  populateTextarea();


