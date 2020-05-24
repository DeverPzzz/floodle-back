let dateText = document.querySelector('.date-text');
let charCounter = document.querySelector('.char-counter');

dateText.oninput = function () {
    charCounter.textContent = dateText.value.length;
  };
