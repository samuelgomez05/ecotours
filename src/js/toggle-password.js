const togglePasswordLogin = document.querySelector('.toggle-password-login');
const passwordInputLogin = document.querySelector('#password-login');
const togglePasswordRegister = document.querySelector('.toggle-password-register');
const passwordInputRegister = document.querySelector('#password-register');

passwordInputLogin.addEventListener('input', (e) => {
  showButtonPassword(e, togglePasswordLogin);
});

passwordInputRegister.addEventListener('input', (e) => {
  showButtonPassword(e, togglePasswordRegister);
});

togglePasswordLogin.addEventListener('click', () => {
  changeContentButton(togglePasswordLogin, passwordInputLogin);
});

togglePasswordRegister.addEventListener('click', () => {
  changeContentButton(togglePasswordRegister, passwordInputRegister);
});

/* FUNCION QUE MOSTRARA EL BOTON SI HAY ALGO ESCRITO EN EL INPUT */
function showButtonPassword(e, button) {
  if (e.target.value.length > 0) {
    button.classList.remove('hidden');
  } else {
    button.classList.add('hidden');
  }
}

/* FUNCION PARA CAMBIAR LA VISIBILIDAD DE LA CONTRASEÑA, EL ICONO CORRECTO */
function changeContentButton(button, passwordInput) {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    button.setAttribute('aria-label', 'Ocultar contraseña');
    button.innerHTML = `
      <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
    `;
  } else {
    passwordInput.type = 'password';
    button.setAttribute('aria-label', 'Mostrar contraseña');
    button.innerHTML = `
      <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round""><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
    `;
  }
}