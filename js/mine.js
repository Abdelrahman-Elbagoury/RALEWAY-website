// --------- navbar color change ------------

document.querySelector(".navbar").style.background = "rgba(255, 255, 255, .4)"
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".navbar").style.background = "rgba(0, 0, 0, .7)";
    document.querySelector(".navbar-brand").style.fontSize = "28px";
  } else {
    document.querySelector(".navbar").style.background = "rgba(255, 255, 255, .4)";
    document.querySelector(".navbar-brand").style.fontSize = "25px";
  }
}


// ---------- counter ------------------------

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


animateValue("value", 0, 352, 3000);
animateValue("value1", 0, 121, 3000);
animateValue("value2", 0, 65, 3000);
animateValue("value3", 0, 11, 3000);
  



