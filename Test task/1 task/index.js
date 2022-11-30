const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = (seconds) => {
  return (seconds) => {
    const timerId = setInterval(() => {
      seconds -= 1;
      let hour = Math.floor(seconds / 3600);
      seconds %= 3600;
      let minute = Math.floor(seconds / 60);
      let second = seconds % 60;
      minute = String(minute).padStart(2, "0");
      hour = String(hour).padStart(2, "0");
      second = String(second).padStart(2, "0");
      timerEl.textContent = `${hour}:${minute}:${second}`;
      if (second <= 0) {
        timerEl.textContent = "Время истекло";
        clearInterval(timeId);
      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  if (!(Number(e.target.value)))
    inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});