function getVals() {
  // Get slider values
  var parent = this.parentNode;
  var slides = document.querySelectorAll('input');
  // var slides = parent.getElementsByTagName('input');

  var slide1 = parseFloat(slides[0].value);
  var slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    var tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  // var displayElement = parent.getElementsByClassName('rangeValues')[0];
  // var displayElement = document.getElementsByClassName('rangeValues')[0];
  // displayElement.innerHTML = slide1 + ' - ' + slide2;
}

window.onload = function () {
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName('range-slider');
  for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName('input');
    for (var y = 0; y < sliders.length; y++) {
      if (sliders[y].type === 'range') {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};

// ===================
// ===================

var slider1 = document.getElementById('slider-1');
var slider2 = document.getElementById('slider-2');

var progressBar = document.getElementById('progress-bar');
var progressBar2 = document.getElementById('progress-bar-2');

progressBar2.style.width = 100 - slider2.value;

slider1.addEventListener('input', function () {
  if (this.value > 49) {
    this.value = 49;
  }

  const elementPosition = this.getBoundingClientRect();

  progressBar.style.width = this.value + '%';
});

slider2.addEventListener('input', function () {
  console.log(this.value);
  if (this.value < 40) {
    this.value = 49;
  }

  const elementPosition = this.getBoundingClientRect();

  progressBar2.style.width = 100 - this.value + '%';
});
