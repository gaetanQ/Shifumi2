$(function () {
  // Je crée un tableau avec les choix possible de l'ordinateur
  var arrayChoices = ['Pierre', 'Feuille', 'Ciseaux'];
  // Je définis une variable pour le choix du joueur et l'initialise à null. L'idée c'est qu'elle existe au chargement de ma page
  var gamerChoice = null;
  var game = 0;
  var win = 0;
  var rate = 0;
$('#pierreComputer').hide();
$('#ciseauxComputer').hide();
$('#feuilleComputer').hide();

  //var message = "";

  // Je rend déplaçable tous les éléments qui ont la classe choice
  $('.choice').draggable({
    revert: true,//Renvoie l'élément toujours à sa place
    snap: '#droppable',//Elles sont attirées par le bloc droppable
    snapMode: 'inner' // Permet le magnétisme sur l'interieur du block
  });

  // J'ajoute un évènement mouseup à mes éléments
  // En fonction de l'image choisi j'attribue une valeur au choix du joueur
  $('#rockChoice').mouseup(function () {
    gamerChoice = 0;
    // Je vérifie dans ma console ce qui est stocker dans la variable gamerChoice
    console.log('Choix du joueur' + gamerChoice);
  });
  $('#paperChoice').mouseup(function () {
    gamerChoice = 1;
    console.log('Choix du joueur' + gamerChoice);
  });
  $('#scissorsChoice').mouseup(function () {
    gamerChoice = 2;
    console.log('Choix du joueur' + gamerChoice);
  });

  // Je rend ma div droppable
  $("#droppable").droppable({
    // Elle n'accepte que les éléments qui ont la classe answer
    accept: '.answer',
    // Je lui ajoute l'évènement jqueryUI drop.
    drop: function (event, ui) { // Au moment de l'évènement droppable
      game++;
      
      // L'ordinateur choisi aléatoirement un choix dans le tableau définis précédemment
      var computerChoice = Math.floor(Math.random() * arrayChoices.length);
      console.log('Choix de l\'ordinateur' + computerChoice);
      if(computerChoice == 0){
        //j'affiche l'image pierre
        $('#pierreComputer').show();
         
      }else if(computerChoice == 1){
        $('#ciseauxComputer').show();
        //j'affiche feuille
      }else if(computerChoice == 2){
        $('#feuilleComputer').show();
        //j'affiche ciseaux
      }
      //MAINTENANT JE DOIS COMPARER LES CHOIX DE L'ORDINATEUR ET CELUI DU JOUEUR POUR AFFICHER LES BONS MESSAGES
      // si le gamer a gagné
      if ((gamerChoice == 0 && computerChoice == 2)||(gamerChoice == 1 && computerChoice == 0)||(gamerChoice == 2 && computerChoice == 1)) {
        alert('bravo');
        win++;
        //j'affiche le nb de victoires du gamer
        $('#score').html(win);
        // Arrondit le pourcentage a l'entier
        rate = Math.round(100 * win / game);


        $('#rate').html(rate + '%');
      }
      else if (gamerChoice == computerChoice) {
        alert('Egalité');
      }
      else {
        alert('Perdu');
      }
    }
    
      
  });
});

