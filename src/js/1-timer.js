// Import libraries
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//Selection of interface elements
const startBtn = document.querySelector('[data-start]');
const fieldsValue = document.querySelectorAll('.field');
const daysElement = fieldsValue[0].firstElementChild;
const hoursElement = fieldsValue[1].firstElementChild;
const minutesElement = fieldsValue[2].firstElementChild;
const secondsElement = fieldsValue[3].firstElementChild;

//Variables for use in the timer

//Time remaining until the end date
let countdownTime = 0;
//Timer interval identifier
let intervalId;
//Date selected by the user
let userSelectedDate;

//Setting the initial state of the "Start" button
startBtn.disabled = true;

//Options for displaying the calendar
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //Calendar close event handler
    userSelectedDate = selectedDates[0].getTime();
    
    countdownTime = userSelectedDate - Date.now();

  if (countdownTime > 0) {
    startBtn.disabled = false;
  } else {
    startBtn.disabled = true;
    iziToast.error({
        //Display an error message
    message: 'Please choose a date in the future',
    messageColor: '#fff',
    messageSize: '16',
    messageLineHeight: '',
    backgroundColor: '#ef4040',
    icon: 'x',
    position: "topRight"
});
    //Reset timer values
  daysElement.textContent = '00';
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  }
    setDateToField(delta);
  },
};

//Calendar initialization
const input = document.querySelector('#datetime-picker');
flatpickr(input, options);

//Function for displaying timer values
function setDateToField(countdownTime) {
  input.disabled = true;
  //Remaining time update
  countdownTime = userSelectedDate - Date.now();
  //Formatting and displaying timer values
  daysElement.textContent = convertMs(countdownTime).days.toString().padStart(2,'0');
  hoursElement.textContent = convertMs(countdownTime).hours.toString().padStart(2,'0');
  minutesElement.textContent = convertMs(countdownTime).minutes.toString().padStart(2,'0');
  secondsElement.textContent = convertMs(countdownTime).seconds.toString().padStart(2,'0');
  
  if (countdownTime <= 0) {
    stopTimer();
}
}

startBtn.addEventListener('click', startTimer);

//Function for starting a timer
function startTimer() {
  input.disabled = true;
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    //Update timer values every second
    setDateToField(countdownTime);
  }, 1000);

}

//Function to stop the timer
function stopTimer() {
    //Interval cancellation
  clearInterval(intervalId);
  //Reset timer values
  daysElement.textContent = '00';
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  
}
  
//
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}