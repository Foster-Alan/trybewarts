const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreeCheckbox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerHTML = '500';

const logInFeedback = () => {
  if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
};
loginButton.addEventListener('click', logInFeedback);

agreeCheckbox.addEventListener('click', (event) => {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

textArea.onkeyup = () => {
  counter.innerHTML = `${500 - textArea.value.length}`;
};

function getSelectedCheckboxes(query) {
  const selectedContent = [];
  selectedContent.id = 'form-data';

  const checkboxes = document.querySelectorAll(query);

  for (let index = 0; index < checkboxes.length; index += 1) {
    const checkbox = checkboxes[index];
    if (checkbox.checked) {
      selectedContent.push(checkbox.value);
    }
  }

  return selectedContent;
}

function setupFormSubmit() {
  const form = document.querySelector('#evaluation-form');

  form.onsubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('#input-name').value;
    const lastname = document.querySelector('#input-lastname').value;
    const email = document.querySelector('#input-email').value;
    const house = document.querySelector('#house').value;
    const family = document.querySelector('input[type="radio"][name="family"]:checked').value;
    const checkboxes = getSelectedCheckboxes('input[type="checkbox"][name="content"]');
    const rate = document.querySelector('input[type="radio"][name="rate"]:checked').value;
    const observacoes = document.querySelector('#textarea').value;
    form.innerHTML = `Nome: ${name} ${lastname} Email: ${email} Casa: ${house} Família: ${family}`;
    form.innerHTML += `Matérias: ${checkboxes.join(', ')} Avaliação: ${rate}`;
    form.innerHTML += `Observações: ${observacoes}`;
  };
}
setupFormSubmit();
