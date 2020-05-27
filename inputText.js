// character counter counter
let dateText = document.querySelector('.date-text');
let charCounter = document.querySelector('.char-counter');

dateText.oninput = function () {
  charCounter.textContent = dateText.value.length;
};

// Autoheight for all textareas in the doc with class "autoExpand"
var textarea = document.querySelector('textarea.date-text');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

