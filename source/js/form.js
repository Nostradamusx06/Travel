(function () {
  const form = document.querySelector('.form');
  const submitButton = form.querySelector('.form__button');

  const toggleSubmitButton = (isDisabled) => {
    submitButton.disabled = isDisabled;
  };

  const onClick = () => {
    if (!form.classList.contains('form__eror')) {
      form.classList.add('form__error');
    }
    submitButton.removeEventListener('click', onClick);
  };

  const onSubmit = async () => {
    toggleSubmitButton(true);
    form.reset();
    setTimeout(() => {
      toggleSubmitButton(false);
    }, 1000);
  };

  form.addEventListener('submit', onSubmit);
  submitButton.addEventListener('click', onClick);
})();
