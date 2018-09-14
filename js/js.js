"use strict";

$(document).ready(initialiser);
function initialiser (evt) {
    var text = $('.test').data('text');
    typeWriter(text, 0);

  }

function typeWriter(text, n) {
      if (n < (text.length)) {
    $('.test').html(text.substring(0, n+1));
    n++;
      
    setTimeout(function() {
      typeWriter(text, n)
    }, 100);
  }
}