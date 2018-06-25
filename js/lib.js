
function random_color() {
  var max = 0xffffff;
  return '#' + Math.round(Math.random() * max).toString(16);
};

function btn_event() {
  var btn = document.querySelectorAll('.submit_btn');
    elements = document.querySelectorAll('.blocks td');
  btn.forEach(function(btn1) {
    btn1.addEventListener('click', function click_change() {
      var elements = document.querySelectorAll('.blocks td');
        elements.forEach(function(el) {
          el.style.backgroundColor = random_color();
        });
    });
  });
};

document.addEventListener('DOMContentLoaded', btn_event);