"use strict";

$(document).ready(initialiser);
function initialiser (evt) {
$(".contenu-realisation").hover(color);
$(".contenu-realisation").click(affiche);
      var text = $('.test').data('text');
    typeWriter(text, 0);
    console.log(text);
    
  
  

  }

var crea1=["image/retro-geek.png","image/retro-geek-logo.png","image/helloproject.png","image/chalenge.png","image/retro01.png","image/soleil%20avenir.png","image/BLABLA.png","image/KELT.png","image/carte.png"];

var crea2=["En 2016, j'ai crée une affiche pour l'association Retro Geek, dont je fait parti. Cette affiche à pour but de promouvoir cette jeune association. Retro Geek est une association qui à pour but de préserver le patrimoine vidéoludique. </br> Dans cette affiche j'ai cherché a représenter l'univers du retro Gaming avec une écriture pixisé et des élement rappelant cette univers : la manette de la nes et un pistolet en pixel art." ,"En Avril 2016, j'ai crée le logo de Retro Geek. J'ai cherché à représenté univers des ancien jeux vidéo à travers se logo. Une des condition du président de l'associatione est que logo devrait avoir des coleur flash. Le contour de logo represente une manette style la nes. L'écriture est pixélisé. Les 'e' sont en forme de pacman. Le 'o' est en forme de bloc mystère de Mario","En 2016, j'ai crée un logo pour la page 'Hello ! Project Game', La page est en ce moment inactif. C'est page gérée par Midori et Maiju, 2 fan du regroupement de groupe Hello!Project. Le but de la page est de crée des petits jeux sur cette passion commun.","Lors du projet tutoré en fin de première année MMI, j'ai réalisé plusieurs élément d'un site web. le but de notre site était crée un site communautaire pour les MMI : pour échangé, réalisé des défis (graphisme,...),... Dans ce projet je me suis principalement occupé du quizz inscription. j'ai réalisée les mascotte et le code (en js/css/html) . le but de se Quizz était de posé des questions sur des connaissances, et grâce a ces réponse ont lui proposé une communauté  (graphisme, audio visuel, programmation ou communication). (juin 2016)"];

function color(evt){

    $(this).css("background-color","rgba(231, 216, 233, 0.7)");
    $(this).hover(recolor);

}
function recolor(evt){
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
        $('#img-modal').replaceWith('<img  id="img-modal"style="width:40%; height:40%;"src="image/retro-geek-logo.png"/>');
        $('#img-modal').attr("src",crea1[0]);
        $('#text-modal').html(crea2[0]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');

    }if(id=="logo retro geek"){
        $('#img-modal').replaceWith('<img  id="img-modal"style="width:40%; height:40%;"src="image/retro-geek-logo.png"/>');
        $('#img-modal').attr("src",crea1[1]);
        $('#text-modal').html(crea2[1]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');

    }if(id=="Logo Hello!Project Game"){
        $('#img-modal').replaceWith('<img  id="img-modal"style="width:40%; height:40%;"src="image/retro-geek-logo.png"/>');
        $('#img-modal').attr("src",crea1[2]);
        $('#text-modal').html(crea2[2]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');
    }if(id=="MMI4LIFE"){
        $('#img-modal').replaceWith ('<iframe id="img-modal" style="margin:5%;"width="500px"  src="https://www.youtube.com/embed/LFWxXhLO2so" frameborder="0" allowfullscreen></iframe>');
        $('#text-modal').html(crea2[3]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');
    }if(id=="Reportage"){
         $('#img-modal').replaceWith('<img  id="img-modal"style="width:40%; height:40%;"src="image/retro-geek-logo.png"/>');
        $('#img-modal').attr("src",crea1[4]);
        $('#text-modal').html(crea2[4]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');
    }if(id=="soleil"){
         $('#img-modal').replaceWith('<img  id="img-modal"style="width:40%; height:40%;"src="image/retro-geek-logo.png"/>');
        $('#img-modal').attr("src",crea1[5]);
        $('#text-modal').html(crea2[5]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');
    }if(id=="blablacar"){
         $('#img-modal').replaceWith('<img  id="img-modal"style="width:40%; height:40%;"src="image/retro-geek-logo.png"/>');
        $('#img-modal').attr("src",crea1[6]);
        $('#text-modal').html(crea2[6]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');
    }if(id=="kelt"){
         $('#img-modal').replaceWith('<img  id="img-modal"style="width:40%; height:40%;"src="image/retro-geek-logo.png"/>');
        $('#img-modal').attr("src",crea1[7]);
        $('#text-modal').html(crea2[7]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');
    }if(id=="Carte de visite"){
         $('#img-modal').replaceWith('<img  id="img-modal"style="width:40%; height:40%;"src="image/retro-geek-logo.png"/>');
        $('#img-modal').attr("src",crea1[8]);
        $('#text-modal').html(crea2[8]);
        $('#titre-modal').html(id);
         $('html, body').animate({scrollTop:0}, 'slow');
    }
    
    
    
}
function nonaffiche(){
      $('#modal').css("display","none")
     $('#delete').click(affiche)
    
    
}