function ChangerDifficulte(){
 
    var totalCoup=0;
    document.getElementById('jeu').innerHTML = "";//Remet le jeu à 0 (cartes, musique et nombre de coups)
    document.getElementById("totalCoup").value=totalCoup ;//Met la valeur de la variable totalCoup dans l'ID totalCoup
   // document.getElementById("audio").play();//Lancer l'OST de dragon ball

  if($(this).val()=='Facile'){
    
    var finDeJeu = 6;
    var cartesJeu = [{
      'nom': 'freezer',
      'img': '../Images/freezer2.png'
    }, {
      'nom': 'goku',
      'img': '../Images/goku2.png'
    }, {
      'nom': 'krillin',
      'img': '../Images/krillin2.png'
    }, {
      'nom': 'piccolo',
      'img': '../Images/piccolo2.png'
    }, {
      'nom': 'vegeta',
      'img': '../Images/vegeta2.png'
    }, {
      'nom': 'gohan',
      'img': '../Images/gohan2.png'
    }];
    
  }
  else if($(this).val()=='Moyen'){
    var finDeJeu = 9;
    var cartesJeu = [{
      'nom': 'freezer',
      'img': '../Images/freezer2.png'
    }, {
      'nom': 'goku',
      'img': '../Images/goku2.png'
    }, {
      'nom': 'krillin',
      'img': '../Images/krillin2.png'
    }, {
      'nom': 'piccolo',
      'img': '../Images/piccolo2.png'
    }, {
      'nom': 'vegeta',
      'img': '../Images/vegeta2.png'
    }, {
      'nom': 'gohan',
      'img': '../Images/gohan2.png'
    }, {
      'nom': 'cell',
      'img': '../Images/cell.png'
    }, {
      'nom': 'bardock',
      'img': '../Images/bardock2.png'
    }, {
      'nom': 'broly',
      'img': '../Images/broly2.png'
    }];

  }
  else {
    var finDeJeu = 12;
    var cartesJeu = [{
      'nom': 'freezer',
      'img': '../Images/freezer2.png'
    }, {
      'nom': 'goku',
      'img': '../Images/goku2.png'
    }, {
      'nom': 'krillin',
      'img': '../Images/krillin2.png'
    }, {
      'nom': 'piccolo',
      'img': '../Images/piccolo2.png'
    }, {
      'nom': 'vegeta',
      'img': '../Images/vegeta2.png'
    }, {
      'nom': 'gohan',
      'img': '../Images/gohan2.png'
    }, {
      'nom': 'cell',
      'img': '../Images/cell.png'
    }, {
      'nom': 'bardock',
      'img': '../Images/bardock2.png'
    }, {
      'nom': 'broly',
      'img': '../Images/broly2.png'
    }, {
      'nom': 'beerus',
      'img': '../Images/beerus2.png'
    }, {
      'nom': 'whis',
      'img': '../Images/whis2.png'
    }, {
      'nom': 'boo',
      'img': '../Images/boo2.png'
    }];
  }

  //Fusionne le plateau aux cartes(images) et compare les éléments (3 résultats possibles)
  var plateauJeu = cartesJeu.concat(cartesJeu).sort(function () {
    return 0.5 - Math.random(); //retourne les cartes aléatoirement
  });

    //variable qui calcule selon les clicks et le nombre de clicks
    var premierClick = '';
    var deuxiemeClick = '';
    var temps = 670;//temps entre le retournement de la 2ème carte et le calcul de l'égalité des deux cartes et le prochain clique
    var coup = 0;                                          
    var pasClickable = null;                                                                                                                                          

    //ajoute la fonction de l'ID jeu à la variable jeu
    var jeu = document.getElementById('jeu');                                     
    //ajoute la fonction de l'ID section à la variable du plateau                                       
    var plateau = document.createElement('section');
    //permet de créer une grille dans l'ordre 6*4 (24images) selon les fonctions plateau et section
    plateau.setAttribute('class', 'plateau');
    jeu.appendChild(plateau);


  //Création du dos de la carte et du devant
  plateauJeu.forEach(function (item) {
    var nom = item.nom;
    var img = item.img;
 
    var carte = document.createElement('carte');
    carte.classList.add('carte');
    carte.dataset.nom = nom;

    var face = document.createElement('face');
    face.classList.add('face');

    var derriere = document.createElement('derriere');
    derriere.classList.add('derriere');
    derriere.style.backgroundImage = 'url('+img+')';

    //Ajoute un noeud a la fin de la liste spécifiée 
    plateau.appendChild(carte);
    carte.appendChild(face);
    carte.appendChild(derriere);
  });

  //faire disparaitre les cartes quand elles sont égales
  function egale() {
    var selectionner = document.querySelectorAll('.rotate');
    selectionner.forEach(function (carte) {
    carte.classList.add('egal');
    });
  };


  //retourner les 2 cartes lorsqu'elles ne sont pas égales
  function retourneCarte(){
  //remet à 0 les clicks pour pouvoir rejouer 
    premierClick = '';
    deuxiemeClick = '';
    coup = 0;
    selectionner = document.querySelectorAll('.rotate');
    selectionner.forEach(function (carte){
    carte.classList.remove('rotate');
      });
    };


  //Fonction une fois qu'on commence à cliquer
  plateau.addEventListener('click', function (event) {

    var section = 'SECTION';
    var clicked = event.target;
    //Si clique entre les carte (Section), si la valeur clique est null (car pasclickable=null), si la carte est déjà retournée ou si la carte est déjà trouvée retourne rien.
    if (clicked.nodeName === 'SECTION' || clicked == pasClickable || clicked.parentNode.classList.contains('rotate') || clicked.parentNode.classList.contains('egal')) {
         return;
    }
  
  //calcule apres chaque clique si 2 cartes sont bien retournées
    if (coup <= 1) {
      
      coup++;
      if (coup == 1) {
        premierClick = clicked.parentNode.dataset.nom;
        console.log(premierClick);
        clicked.parentNode.classList.add('rotate');//applique la fonction rotate qui retourne face la carte
        
      } 


     //Une fois la première carte retourner
      else {
        
        deuxiemeClick = clicked.parentNode.dataset.nom;
        console.log(deuxiemeClick);
        clicked.parentNode.classList.add('rotate');
        //Prend la variable, lui ajoute 1 et la met dans l'ID HTML totalCoup
        totalCoup=totalCoup+1;
        document.getElementById("totalCoup").value=totalCoup ;
      }

      //Supprimer les images égales et retourne les images non égales
      if (premierClick && deuxiemeClick) {
        if (premierClick == deuxiemeClick) {
          setTimeout(egale, temps);
          finDeJeu--;
        }
        setTimeout(retourneCarte, temps);  
      } 
    }

   if(finDeJeu==0){  
      document.getElementById('jeu').innerHTML = "";
      difficulte.remove();
      alert('Vous avez gagné en '+totalCoup+' coups!');
      Animation();   
    }

  });

}//Fin fonction CHoixDifficulte(), c'est-à-dire, fin du memory

//Une fois la fin du jeu atteind.
function Animation(){
        
    var img = document.createElement('img');
    img.src = "../Images/giphy.gif";
    var block = document.getElementById('html');
    block.appendChild(img);  
    $('img').addClass('agrandir');
 

    let question = document.createElement("p"); 
    question.id = "texte"; 
    question.textContent = "Voulez-vous rejouez"; 
    document.getElementById("html").appendChild(question);

  //On créer une balise a qu'on lie au href
    var a = document.createElement('a');  
    var reponse = document.createTextNode("Oui"); 
    a.id = "texte2";
    a.appendChild(reponse);  
    a.href = "../HTML/memory.html";  
    document.body.appendChild(a); 


  //On créer une 2ème balise a qu'on lie au href
    var a2 = document.createElement('a');                
    var reponse = document.createTextNode("Non, je retourne à l'accueil."); 
    a2.appendChild(reponse);  
    a2.id = "texte3";
    a2.href = "../../lancerJeu/HTML/index.html";  
    document.body.appendChild(a2); 

}

function musique(){

    document.getElementById("audio").pause();
}


