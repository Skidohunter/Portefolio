let app = document.getElementById('txtAnim');
let profil = document.getElementById('profil');
let xp = document.getElementById('xp');
let outils = document.getElementById('outils');
let burger = document.querySelector(".toggleBtn");
let menu = document.querySelector(".menu");
let realisations = document.getElementById('realisations')
let show = document.getElementById("showReal");
let contact = document.getElementById("contact");


let reals = [
    {name:'Acceuil VidDev' , image:"assets/images/VidDevHome.png" , outils :'Technologies utilisées : REACT , SASS , CSS , API , GIT .' ,lien :'https://github.com/Skidohunter/divVideo'},
    {name:'Login VidDev' , image: "assets/images/videDevLogin.png", outils :' Technologies utilisées : REACT , SASS , CSS , API , GIT .',lien :'https://github.com/Skidohunter/divVideo' },
    {name:' Pokedex' , image: "assets/images/Pokedex react.png" , outils :' Technologies utilisées : REACT , SASS , CSS , API , GIT .',lien :'https://github.com/Skidohunter/pokemon-react' },
    {name:' Neotech' , image: "assets/images/neotech.png" , outils :' Technologies utilisées :  SASS , CSS , GIT .',lien :'https://github.com/Skidohunter/Projet-neotech' }

]

function showReal(){

reals.forEach((real) => {

  let articleElement = document.createElement('article')
  let titleElement = document.createElement('h3');
  let imgElement = document.createElement('img');
  let outilsElement = document.createElement('p');
  let lienElement = document.createElement('a')
  let outilsTexte = document.createTextNode(real.outils);
  let titleTxt = document.createTextNode(real.name); 
  imgElement.setAttribute('src',real.image);
  lienElement.setAttribute('href',real.lien);
  outilsElement.appendChild(outilsTexte);
  titleElement.appendChild(titleTxt);
  articleElement.appendChild(titleElement);
  articleElement.appendChild(imgElement);
  articleElement.appendChild(outilsTexte);
  articleElement.appendChild(lienElement);
  show.appendChild(articleElement);
  articleElement.classList.add("article");
  lienElement.classList.add('git')


})

}



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

    profil.addEventListener('mouseenter', animOnProfil);
    xp.addEventListener('mouseenter', animOnXp);
    outils.addEventListener('mouseenter', animOnOutils);
    realisations.addEventListener('mouseenter', animOnRealisations);
    contact.addEventListener("mouseenter",animOnContact)


      function animOnProfil(){
        profil.classList.add('profilAnim');
            
      }
      function animOnXp(){  
        xp.classList.add('profilAnim');       
      }
      function animOnOutils(){
        outils.classList.add('profilAnim');          
      }
      function animOnRealisations(){
        realisations.classList.add('profilAnim')           
      }
      function animOnContact(){
        contact.classList.add('profilAnim')           
      }





  //Creation de la fonction et de l'écouter d'évenement de mon burger//

    burger.addEventListener('click',open)
    function open (){
      menu.classList.toggle('open')
    }

    showReal()