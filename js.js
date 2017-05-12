"use strict";

$(document).ready(initialiser);
function initialiser (evt) {
$(".contenu-realisation").hover(color);
$(".contenu-realisation").click(affiche);
      var text = $('.test').data('text');
    typeWriter(text, 0);
    console.log(text);
    
  
  

  }

var crea1=["image/retro-geek.png","image/retro-geek-logo.png","image/helloproject.png","image/chalenge.png","image/retro01.png","image/soleil%20avenir.png","image/canaltizef.png","image/KELT.png","image/carte.png"];

var crea2=["En 2016, j'ai crée une affiche pour l'association Retro Geek, dont je fait partie. Cette affiche a pour but de promouvoir cette jeune association. Retro Geek est une association qui à pour objectif de préserver le patrimoine vidéoludique. </br> Dans cette affiche j'ai cherché à représenter l'univers du retro Gaming avec une écriture pixelisé et des élements rappelant cet univers : la manette de la nes et un pistolet en pixel art." ,"En Avril 2016, j'ai crée le logo de Retro Geek. J'ai cherché à représenter l'univers des anciens jeux vidéo à travers ce logo. Une des critères imposé par le président de l'association était d'utiliser des couleurs flash. Le contour du logo represente une manette du même style que la nes. L'écriture est pixélisé. Les 'e' sont en forme de pacman. Le 'o' est en forme de bloc mystère de Mario","En 2016, j'ai crée un logo pour la page 'Hello ! Project Game', La page est en ce moment inactive. C'est page gérée par Midori et Maiju, 2 fans du regroupement de groupes Hello!Project. Le but de la page est de créer des petits jeux sur cette passion commune.","Lors du projet tutoré en fin de première année MMI, j'ai réalisé plusieurs élémente d'un site web. le but de notre site était de créer un site communautaire pour les MMI : pour échanger, réaliser des défis (graphisme,...),... Dans ce projet je me suis principalement occupée du quizz à complèter avant inscription. j'ai réalisé les mascottes et le code (en js/css/html) . le but de ce Quizz était de poser des questions sur des connaissances, et grâce à ces réponses l'utilisateur peut intégrer une communauté  (graphisme, audio visuel, programmation ou communication). (juin 2016)","En 2017, lors d'un projet d'étude j'ai crée un reportage sur retro geek. Dans l’application l’utilisateur va plongé dans univers du Retro gaming où comme dans un jeu il ya devoir resoudre une mission. Il va se promener dans diffèrents univers qui correspondront à une partie du reportage. Chaque univers fera référence à un jeu précis. Le but de l’utilisateur est de récolter toutes les informations. A la fin de chaque partie du reportage, il obtiendra une clef qui lui permettra d'accéder à la fin du web reportage","Cette année, lors d'un cours de création d'entreprise, nous avons crée un projet d'entreprise où on a réalisé plusieurs logos. Voici un de ces logos. L'entreprise soleil avenir a pour but de produire de l'électricité via l'énergie solaire.Le logo represente un soleil se levant sur un champ de panneaux photovoltaiques avec un chemin qui répresente l'avenir. Le jaune réprensente le soleil.","lors de mon stage à Canal ti zef, ma mission principale était d'améliorer le design du site, améliorer l'organisation du site et donner des pistes pour le rendre plus accessible aux utilisateurs. Les principales exigences de l'association est de garder leur site sous SPIP et de modifer un thème déja existant. ","Lors d'un projet tutoré, avec quatre étudiants de ma promotion, nous créons un application nommée kelt. L’objectif de l’application est de faire découvrir Brocéliande aux enfants sous forme de quêtes en rapport avec les légendes ou anecdotes. Le but serait de constituer son journal de bord. Cette application serait proposée à l’office de tourisme de Brocéliande afin de promouvoir la région. Nous avons crée un prototype et bientôt nous finirons la version finale. Sur le propotype, j'ai codé le déroulement d'une quête et les mini-jeux. ","En 2016, j'ai crée mes cartes visites  qui repprend l'univers que j'ai crée dans mon cv. J'ai voulu me créer une identité visuelle avec un logo qui me représente avec des couleurs qui me plaisent.  "];

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
    }if(id=="Canal ti zef"){
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