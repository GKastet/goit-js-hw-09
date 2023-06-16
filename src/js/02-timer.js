import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  btnStart: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const data = new Date();
elements.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      elements.btnStart.disabled = false;
      elements.btnStart.addEventListener('click', handlerBtnStart);
      function handlerBtnStart() {
        elements.btnStart.disabled = true;
        timerIdf = setInterval(() => {
          if (selectedDates[0] <= new Date()) {
            clearInterval(timerId);
            alert('Please RELOAD window and choose a date in the future');
          }
        }, 1000);
        timerId = setInterval(() => {
          if (selectedDates[0] <= new Date()) {
            clearInterval(timerIdf);
          }
          difference = selectedDates[0] - new Date();
          let counter = convertMs(difference);
          elements.days.textContent = counter.days.toString().padStart(2, '0');
          elements.hours.textContent = counter.hours.toString().padStart(2, '0');
          elements.minutes.textContent = counter.minutes.toString().padStart(2, '0');
          elements.seconds.textContent = counter.seconds.toString().padStart(2, '0');
        }, 1000);
      }
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



