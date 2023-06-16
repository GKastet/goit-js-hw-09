const elements = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

elements.btnStop.disabled = true;

elements.btnStart.addEventListener('click', handlerBtnStartClick);
let timerId;
function handlerBtnStartClick() {
  timerId = setInterval(() => {
    elements.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  elements.btnStart.disabled = true;
  elements.btnStop.disabled = false;
}

elements.btnStop.addEventListener('click', handlerBtnStopClick);
function handlerBtnStopClick() {
  clearInterval(timerId);
  elements.btnStart.disabled = false;
  elements.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
