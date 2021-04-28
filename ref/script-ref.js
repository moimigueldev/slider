var slider = document.getElementById('slider');
var selector = document.getElementById('selector');
var selectValue = document.getElementById('selectValue');
var progressBar = document.getElementById('progress-bar');

selectValue.innerHTML = slider.value;

slider.oninput = function () {
  selector.style.left = this.value + '%';
  selectValue.innerHTML = this.value;
  progressBar.style.width = this.value + '%';
};
