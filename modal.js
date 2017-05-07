"use strict";

window.addEventListener("load", initialiser);

function initialiser (evt) {
       var modal= document.getElementById("modal");
    var sup= document.getElementById("delete");
    var contenumodal= document.getElementById("contenuModal");
    var titremodal= document.getElementById("titreModal");

    modal.style.display="block";
    sup.addEventListener("click",nonaffiche);
    var clefnum = document.getElementById('clefin');
 var titre= document.getElementById("titre"); 
    titre.addEventListener("click",affiche);
}
function affiche(){
    var modal= document.getElementById("modal");
    var sup= document.getElementById("delete");
    var contenumodal= document.getElementById("contenuModal");
    var titremodal= document.getElementById("titreModal");
    var text= document.getElementById("contenu");
    var titre2= document.getElementById("part");
    console.log(text.innerHTML);
    contenumodal.innerHTML=text.innerHTML;
    titremodal.innerHTML=titre2.innerHTML;
    modal.style.display="block";
    sup.addEventListener("click",nonaffiche);

}
function nonaffiche(){
    var modal= document.getElementById("modal");
    modal.style.display="none";


}