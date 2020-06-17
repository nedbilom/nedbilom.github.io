// Buttons
const showButton = document.querySelector('.btn__showForm');
const hideButton = document.querySelector('.modalWindow__hideButton');
const submitButton = document.querySelector('.btn__send');

// Nodes
const fieldNode = document.querySelectorAll('.input'); // Изменить на input node
const labelNode = document.querySelectorAll('.label');
const reportsNode = document.querySelectorAll('.invalid__report');
const errorsNode = document.querySelectorAll('.error__message');
const clearButtons = document.querySelectorAll('.clear__button');
const accessIcons = document.querySelectorAll('.access__icon');

// Fields
const birthdate = document.getElementById('field__birthdate');
const telephone = document.getElementById('field__telephone');
const textarea = document.getElementById('field__account');

const substrate = document.querySelector('.substrate');
const successMessage = document.querySelector('.success__message');

// Events
showButton.addEventListener('click', showForm);

substrate.addEventListener('click', (event) => {
  event.target === substrate ? hideForm() : null;
});

hideButton.addEventListener('click', hideForm);

submitButton.addEventListener('click', checkForm);

labelNode.forEach((field) => {
  field.addEventListener('click', activateField);
})

fieldNode.forEach((field) => {
  field.addEventListener('focus', focusField);
})

fieldNode.forEach((element) => {
  element.addEventListener('blur', blurField);
});

clearButtons.forEach((cross) => {
  cross.addEventListener('click', clearField);
})

birthdate.addEventListener('keydown', (event) => {
  (event.keyCode >= 48 && event.keyCode <= 57)
    || event.keyCode === 8 || event.keyCode === 37
    || event.keyCode === 39 || event.key === '.'
    || event.keyCode === 9
    ? inputBirthdate(event)
    : event.preventDefault();
})

telephone.addEventListener("input", inputTelephone, false);
telephone.addEventListener("focus", inputTelephone, false);
telephone.addEventListener("blur", inputTelephone, false);
telephone.addEventListener("keydown", inputTelephone, false);

function checkForm() {
  let success = false;

  fieldNode.forEach((field) => {
    if (!(field.dataset.status === 'access')) {
       field.classList.add('error');
  
      const currentError = findRelatedItem(field, errorsNode);
      currentError.style.display = 'inline-block';
    } else {
      success = true;
    }
  })

  success ? successMessage.style.display = 'inline' : null;
}

function showForm() {
  substrate.classList.add('open');
}

function hideForm() {
    substrate.classList.remove('open');
}

function inputTelephone(event) {
  event.keyCode && (keyCode = event.keyCode);
  var pos = this.selectionStart;
  if (pos < 3) event.preventDefault();
  var matrix = "+7 (___) ___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, ""),
    new_value = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a
    });
  i = new_value.indexOf("_");
  if (i != -1) {
    i < 5 && (i = 3);
    new_value = new_value.slice(0, i)
  }
  var reg = matrix.substr(0, this.value.length).replace(/_+/g,
    function (a) {
      return "\\d{1," + a.length + "}"
    }).replace(/[+()]/g, "\\$&");
  reg = new RegExp("^" + reg + "$");
  if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
  if (event.type == "blur" && this.value.length < 5) this.value = ""
}

function inputBirthdate(event) {
  const lengthDate = birthdate.value.length;

  if (lengthDate === 2 || lengthDate === 5) {
    if (event.keyCode !== 8 && event.keyCode !== 46 && !(event.key === '.')) birthdate.value += '.';
  }
}

function findRelatedItem(field, HTMLNode) {
  const fieldName = field.dataset.field;

  const itemsArray = Array.from(HTMLNode);
  const currentItem = itemsArray.find(item => item.dataset.field === fieldName);

  return currentItem;
}

function addInvalidError(field) {
  field.classList.add('error');
  const currentError = findRelatedItem(field, reportsNode);

  currentError.style.display = 'inline-block';
  addClearButton(field);
}

function removeErrors(field) {
  const currentReport = findRelatedItem(field, reportsNode);
  const currentError = findRelatedItem(field, errorsNode);
  const currentClearButton = findRelatedItem(field, clearButtons);

  currentReport === undefined ? null : currentReport.style.display = 'none';
  currentError === undefined ? null : currentError.style.display = 'none';
  currentClearButton === undefined ? null : currentClearButton.style.display = 'none';

  field.classList.remove('error');
}

function addClearButton(field) {
  const currentClearButton = findRelatedItem(field, clearButtons);
  currentClearButton.style.display = 'block';
}

function clearField() {
  const currentField = findRelatedItem(this, fieldNode);

  currentField.value = '';

  removeErrors(currentField);
  currentField.focus();
}

function addAccess(field) {
  field.classList.add('access');

  const currentIcon = findRelatedItem(field, accessIcons);
  field.dataset.status ? field.dataset.status = 'access' : null;

  field.dataset.field === "account" ? null : currentIcon.style.display = 'block';
}

function removeAccess(field) {

  if (field === textarea) return;
  field.classList.remove('access');

  const currentIcon = findRelatedItem(field, accessIcons); 

  currentIcon.style.display = 'none';
}

function validate(field) {
  const fieldName = field.dataset.field;
  switch (fieldName) {
    case "name":
      const regExpName = /[А-я]{2,} [А-я]{2,} [А-я]{2,}/;
      const validName = field.value.match(regExpName) || [];
      
      validName.length === 0 ? addInvalidError(field) : addAccess(field);
      break;
    case "email":
      const regExpEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      const validEmail = field.value.match(regExpEmail) || [];

      validEmail.length === 0 ? addInvalidError(field) : addAccess(field);
      break;
    case "birthdate":
      if (!(field.value.length === 10)) addInvalidError(field)

      const dateInArray = field.value.split('.');
      const day = dateInArray[0];
      const month = dateInArray[1];
      const year = dateInArray[2];
      const thisYear = new Date().getFullYear();

      if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year > 1910 && year < thisYear - 5)) {
        addAccess(field);
      } else {
        addInvalidError(field);
      }
      break;
    case "telephone":
      field.value.length === 18 ? addAccess(field) : addInvalidError(field);
      break;
    case "account":
      addAccess(field)
      break;
  }
}

function blurField(event) {
  // this = field
  const currentLabel = this.previousElementSibling;
  this.classList.remove('focus');

  if (this.value === "") {
    currentLabel.classList.remove('label-focus');
    this.classList.remove('fieldHover');
    this.classList.add('error');

    const currentError = findRelatedItem(this, errorsNode);
    currentError.style.display = 'inline-block';
  } else {
    validate(this);
  }
}

function focusField(event) {
  // this = field
  const currentLabel = this.previousElementSibling;
  currentLabel.classList.add('label-focus');

  this.classList.add('focus');

  removeErrors(this);
  removeAccess(this);
}

function activateField(event) {
  // this = label
  this.classList.add('label-focus');

  const currentField = this.control;
  currentField.classList.add('focus');

  removeErrors(currentField);
  removeAccess(currentField);
}
