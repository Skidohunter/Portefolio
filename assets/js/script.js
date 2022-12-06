let app = document.getElementById('txtAnim');
let profil = document.getElementById('profil');
let xp = document.getElementById('xp');
let outils = document.getElementById('outils');

//Creation de la function ppour la caroussel automatique avec le plugin owl//

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:2,
    loop:true,
    margin:140,
    autoplay:true,
    autoplayTimeout:1000,

  })
});

//Creation de la fonction pour le defilement du texte avec le plugin type writter//

let typewriter = new Typewriter(app, {
    loop: true,
    deleteSpeed: 75
 
  });
  
  typewriter
    .changeDelay(75)
    .typeString('Apprenti Jedi Dev : ')
    .pauseFor(500)
    .typeString('<span style= color:#7D2323>CSS !</span>')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style= color:gold>SASS !</span>')
    .pauseFor(1000)
    .deleteChars(6)
    .typeString('<span style= color:#7D2323>JS !</span>')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style= color:gold>React !</span>')
    .pauseFor(1000)
    .start();

    //Creation de mes ecoutes d'evenements pour lancer mes keyframes //

    profil.addEventListener('mouseenter', anim);
    xp.addEventListener('mouseenter',anim);

    function anim(){
        profil.classList.add('profilAnim');
        xp.classList.add('profilAnim');  
        outils.classList.add('profilAnim');            
    }



    
