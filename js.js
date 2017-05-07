"use strict";

$(document).ready(initialiser);
function initialiser (evt) {
$(".contenu-realisation").hover(color);
$(".contenu-realisation").click(affiche);
      var text = $('.test').data('text');
    typeWriter(text, 0);
    console.log(text);
    
  
  

  }

var crea1=["image/retro-geek.png","image/retro-geek-logo.png","image/helloproject.png"];

var crea2=["Praesent sodales porta rhoncus. Nulla nec tristique dolor. Morbi gravida cursus metus, in mattis nulla. Praesent eget sagittis nunc. Morbi neque neque, condimentum sed ipsum a, condimentum gravida nibh. Quisque elementum vehicula lorem sit amet pretium. Aliquam a massa vitae sapien porttitor vulputate. Sed in lobortis velit, quis ultrices ex. Mauris eu tortor orci. Nam quis purus sed risus viverra congue. Praesent quis metus eu est viverra interdum sit amet a lectus. Suspendisse rhoncus lorem at ante sodales, non consectetur tortor tempor. Nunc blandit dui sed condimentum suscipit. In eu lacus ac sem sagittis suscipit at vitae felis. Donec rutrum purus quis varius rhoncus.","Praesent sodales porta rhoncus. Nulla nec tristique dolor. Morbi gravida cursus metus, in mattis nulla. Praesent eget sagittis nunc. Morbi neque neque, condimentum sed ipsum a, condimentum gravida nibh. Quisque elementum vehicula lorem sit amet pretium. Aliquam a massa vitae sapien porttitor vulputate. Sed in lobortis velit, quis ultrices ex. Mauris eu tortor orci. Nam quis purus sed risus viverra congue. Praesent quis metus eu est viverra interdum sit amet a lectus. Suspendisse rhoncus lorem at ante sodales, non consectetur tortor tempor. Nunc blandit dui sed condimentum suscipit. In eu lacus ac sem sagittis suscipit at vitae felis. Donec rutrum purus quis varius rhoncus.","iFusce eu augue eget odio congue dignissim. Nunc posuere consectetur ex, vitae pharetra enim porta id. Sed ac mollis purus. Vestibulum pharetra orci congue bibendum consectetur. Proin turpis nisi, placerat in magna vitae, dapibus dapibus nisl. Mauris eget metus auctor, laoreet ante bibendum, tincidunt dolor. Praesent aliquam neque at eros rhoncus, et mattis risus pharetra. Duis vulputate vulputate erat, vitae placerat eros vulputate et."];

function color(evt){
console.log("test");
    $(this).css("background-color","rgba(231, 216, 233, 0.7)");
    $(this).hover(recolor);

}
function recolor(evt){
console.log("test");
    $(this).css("background-color","rgba(231, 216, 233, 0.2)");
    $(this).hover(color);
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
function affiche(){
      $('#modal').css("display","block");
      var id= $(this).attr("id");
     $('#delete').click(nonaffiche);
    $('#titreModal').html(id);
    if(id=="L'affiche retro geek"){
        $('#img-modal').attr("src",crea1[0]);
        $('#text-modal').html(crea2[0]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');

    }if(id=="logo retro geek"){
        $('#img-modal').attr("src",crea1[1]);
        $('#text-modal').html(crea2[1]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');

    }if(id=="Logo Hello!Project Game"){
        $('#img-modal').attr("src",crea1[2]);
        $('#text-modal').html(crea2[2]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');
    }
    
    
    
}
function nonaffiche(){
      $('#modal').css("display","none")
     $('#delete').click(affiche)
    
    
}