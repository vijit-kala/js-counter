let counter = document.querySelector('.counter');
let decrementButton = document.querySelector('.decrement');
let resetButton = document.querySelector('.init');
let incrementButton = document.querySelector('.increment');

// counter.addEventListener('click', () => alert('Counter clicked'));
let counterValue = 0;

decrementButton.addEventListener('click', () => {
  if (counterValue < 1) {
    alert('Cannot go below 0!');
  } else {
    counterValue -= 1;
    counter.innerHTML = counterValue;
    if (counterValue === 0) counter.classList.remove('positive');
  }
});

resetButton.addEventListener('click', () => {
  counterValue = 0;
  counter.innerHTML = counterValue;
  if (counterValue === 0) counter.classList.remove('positive');
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
  if (counterValue > 0) counter.classList.add('positive');
});

// Sets the value to zero everytime page is loaded
window.onload = () => {
  counterValue = 0;
  counter.innerHTML = counterValue;
};
