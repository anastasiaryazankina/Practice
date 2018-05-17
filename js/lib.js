

function randomColor () {
    var max = 0xffffff;
    return '#' + Math.round( Math.random() * max ).toString( 16 );
}

function click_change() {
  var elements = document.querySelectorAll("#blocks td");
  elements.forEach(function(el){
    el.style.backgroundColor = randomColor();
  });
}
/*
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = randomColor();

  }
}*/