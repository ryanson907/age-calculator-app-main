const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const ageOutput = document.querySelectorAll('.output-field__date-attached');

// Função para exibir o estado de erro nos campos de entrada e labels
function showError(inputField, errorMessage) {
    inputField.classList.add('error'); // Adiciona a classe 'error' à div .input-field__date
    const labelError = inputField.querySelector('.input-field__label-error');
    labelError.textContent = errorMessage;
    labelError.style.display = 'block'; // Exibe a mensagem de erro
    const inputLabel = inputField.querySelector('.input-field__label');
    inputLabel.classList.add('error'); // Adiciona a classe 'error' ao input-field__label
  }
  
  // Função para remover o estado de erro dos campos de entrada e labels
  function hideError(inputField) {
    inputField.classList.remove('error'); // Remove a classe 'error' da div .input-field__date
    inputField.querySelector('.input-field__label-error').textContent = '';
    inputField.querySelector('.input-field__label-error').style.display = 'none'; // Oculta a mensagem de erro
    const inputLabel = inputField.querySelector('.input-field__label');
    inputLabel.classList.remove('error'); // Remove a classe 'error' do input-field__label
  }

// Função para calcular a idade
function calculateAge() {
  const today = new Date();
  const birthDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
  
  if (isNaN(birthDate)) {
    // Se a data de nascimento for inválida, exibe mensagem de erro
    showError(dayInput.parentElement, 'Must be a valid day');
    showError(monthInput.parentElement, 'Must be a valid month');
    showError(yearInput.parentElement, 'Must be a valid past');
  } else {
    // Se a data de nascimento for válida, esconde o estado de erro (caso esteja exibido)
    hideError(dayInput.parentElement);
    hideError(monthInput.parentElement);
    hideError(yearInput.parentElement);

    // Calcula a diferença em milissegundos entre as datas
    const ageInMilliseconds = today - birthDate;

    // Converte a diferença em milissegundos para anos, meses e dias
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    // Atualiza os elementos de saída com a idade calculada
    ageOutput[0].textContent = years;
    ageOutput[1].textContent = months;
    ageOutput[2].textContent = days;
  }
}

// Capturando o botão da régua
const rulerButton = document.querySelector('.ruler-button');

// Event listener para chamar a função de calcular a idade quando o botão da régua for clicado
rulerButton.addEventListener('click', calculateAge);