const slider = document.getElementById('slider');
const selector = document.getElementById('selector');
const selectValue = document.getElementById('selectValue');
const progressBar = document.getElementById('progress-bar');
const selectHover = document.querySelector('.select-hover');

slider.oninput = function () {
  selector.style.left = this.value + '%';
  //   selectValue.innerHTML = this.value;
  progressBar.style.width = this.value + '%';
};

selector.addEventListener('mouseover', function () {
  console.log('hello', selectHover);
  selectHover.classList.add('show');
});

selector.addEventListener('mouseleave', function () {
  console.log('hello', selectHover);
  selectHover.classList.remove('show');
});

selector.onactive;
