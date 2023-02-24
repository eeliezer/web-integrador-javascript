const form = document.getElementById('form');
const nameInput = document.getElementById('username');
const passInput = document.getElementById('password');
const formSubmitBtn = document.querySelector('.formSubmitBtn');

const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 25;
  const username = nameInput.value.trim();
  if(isEmpty(username)){
    showError(nameInput,'El nombre es obligatorio');
  } else if(!isBetween(username.length, min, max)) {
    showError(nameInput,`El nombre debe tener entre ${min} y ${max}`);
  } else {
    showSuccess(nameInput)
    valid = true;
  }
  return valid
}

const checkPassword = () => {
  let valid = false;
  const password = passInput.value.trim();
  if(isEmpty(password)){
    showError(passInput, 'La contraseña es obligatoria')
  } else if(!isPassValid(password)){
    showError(passInput, 'La contraseña debe tener entre 8 y 20 caracteres, entre ellos una mayuscula, un número y un caracter especial')
  } else {
    showSuccess(passInput);
    valid = true;
  }
  return valid;
}

const isPassValid = (pass) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;
  return re.test(pass);
}

const isEmpty = (value) => value === '';

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success')
  formField.classList.add('error')
  const error = formField.querySelector("small");
  error.textContent = message;
}
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error')
  formField.classList.add('success')
  const error = formField.querySelector("small");
  error.textContent = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isUsernameValid = checkUsername();
  const isPasswordValid = checkPassword();
  console.log(isUsernameValid)
  console.log(isPasswordValid)
  const isFormValid = isUsernameValid && isPasswordValid;
  if(isFormValid) {
    setTimeout(() => {
      location.href="index.html";
    }, 1000);
  }
})

const debounce = (fn, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if(timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay)
  };
};

form.addEventListener(
  "input",
  debounce((e) => {
    switch (e.target.id){
      case 'username':
        checkUsername();
        break;
      case 'password':
        checkPassword();
        break
    }
  })
)
