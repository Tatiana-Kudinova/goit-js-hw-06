const inputEl = document.querySelector(`#validation-input`);
inputEl.addEventListener(`blur`, () => {
  let textEl = inputEl.value.length.toString();
  textEl.trim() === inputEl.getAttribute(`data-length`)
    ? inputEl.classList.add(`valid`)
    : inputEl.classList.add(`invalid`);

  console.log(inputEl.value.length.toString());
  console.log(inputEl.getAttribute(`data-length`));
});
