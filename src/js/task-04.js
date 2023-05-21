const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const value = document.querySelector(`#value`);
let counter = 0;

btnIncrement.addEventListener(`click`, onBtnIncrementClick);

btnDecrement.addEventListener(`click`, onBtnDecrementClick);

function onBtnIncrementClick() {
  counter += 1;
  value.textContent = counter;
}
function onBtnDecrementClick() {
  counter -= 1;
  value.textContent = counter;
}
