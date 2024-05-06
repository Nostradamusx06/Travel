(function () {
  const form = document.querySelector('.form');
  const inputMail = form.querySelector('.form__mail');
  const inputTel = form.querySelector('.form__phone');
  const submitButton = form.querySelector('.form__button');

  const MAX_LETTERS_COUNT = 50;

  const regPhone = (phone) => {
    const reg = /^[^a-zа-яё]*$/i;
    return reg.test(String(phone));
  };

  const regMail = (mail) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(String(mail));
  };

  const validateTel = (evt) => {
    const telValue = inputTel.value;
    const isValid = regPhone(telValue) && telValue.length <= MAX_LETTERS_COUNT && telValue.length > 0;

    if (!isValid) {
      evt.preventDefault();
      inputTel.classList.add('form__phone--error');
    } else {
      inputTel.classList.remove('form__phone--error');
    }
  };

  const validateMail = (evt) => {
    const mailValue = inputMail.value;
    const isValid = regMail(mailValue) && mailValue.length <= MAX_LETTERS_COUNT && mailValue.length > 0;

    if (!isValid) {
      evt.preventDefault();
      inputMail.classList.add('form__mail--error');
    } else {
      inputMail.classList.remove('form__mail--error');
    }
  };

  const toggleSubmitButton = (isDisabled) => {
    submitButton.disabled = isDisabled;
  };

  const onSubmit = async (evt) => {
    toggleSubmitButton(true);
    validateTel(evt);
    validateMail(evt);

    setTimeout(() => {
      toggleSubmitButton(false);
    }, 1000);
  };

  form.addEventListener('submit', onSubmit);
})();
