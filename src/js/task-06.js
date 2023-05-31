const inputEl = document.querySelector(`#validation-input`);
inputEl.addEventListener(`blur`, () => {
  let textEl = inputEl.value.trim().length.toString();
  if (textEl === inputEl.getAttribute(`data-length`)) {
    inputEl.classList.add(`valid`);
    inputEl.classList.remove(`invalid`);
  } else {
    inputEl.classList.add(`invalid`);
    inputEl.classList.remove(`valid`);
  }
  console.log(inputEl.value.length.toString());
  console.log(inputEl.getAttribute(`data-length`));
});
