const refs = {
  inputEl: document.querySelector(`#name-input`),
  outputEl: document.querySelector(`#name-output`),
};

let message = `Anonymous`;
refs.inputEl.addEventListener(`input`, event => {
  refs.outputEl.textContent = event.currentTarget.value;

  if (refs.inputEl.value.trim() === ``) {
    refs.outputEl.textContent = message;
  }
  console.log(typeof refs.inputEl);
  console.log(typeof refs.outputEl);
});
