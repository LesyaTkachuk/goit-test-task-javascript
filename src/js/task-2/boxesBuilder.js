const refs = {
  input: document.querySelector('.js-input'),
  createBtn: document.querySelector('button[data-action="create"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  boxes: document.getElementById('boxes'),
};

refs.createBtn.addEventListener('click', createBtnHandler);
refs.destroyBtn.addEventListener('click', destroyBtnHandler);

function createBtnHandler(e) {
  destroyBoxes();
  const numberofBoxes = Number(refs.input.value);
  createBoxes(numberofBoxes);
}

function destroyBtnHandler() {
  destroyBoxes();
  refs.input.value = '';
}

function createBoxes(amount) {
  const generateColor = () => Math.round(Math.random() * 255);
  const increaseSize = n => 30 + 10 * n;

  const markup = new Array(amount)
    .fill('')
    .map(
      (_, idx) =>
        `<div style='width: ${increaseSize(idx)}px; height: ${increaseSize(
          idx,
        )}px; background-color: rgb(${generateColor()},${generateColor()},${generateColor()})'></div>`,
    )
    .join('');

  refs.boxes.insertAdjacentHTML('afterBegin', markup);
  refs.input.value = '';
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
