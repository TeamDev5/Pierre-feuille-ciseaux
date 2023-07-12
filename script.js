let player1Choice = ""; // Choix du joueur 1
let player2Choice = ""; // Choix du joueur 2
let gameEnded = false; // Variable pour vérifier si le jeu est terminé

// Fonction pour vérifier le résultat du jeu
function checkResult() {
  if (player1Choice === player2Choice) {
    displayResult("Égalité !");
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
  ) {
    displayResult("Joueur 1 a gagné !");
  } else {
    displayResult("Joueur 2 a gagné !");
  }

  gameEnded = true; // Le jeu est terminé
}

// Fonction pour afficher le résultat
function displayResult(message) {
  document.getElementById('result').textContent = message;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
  player1Choice = "";
  player2Choice = "";
  gameEnded = false;

  // Réactiver les boutons de choix
  document.getElementById('rockButton1').disabled = false;
  document.getElementById('paperButton1').disabled = false;
  document.getElementById('scissorsButton1').disabled = false;
  document.getElementById('rockButton2').disabled = false;
  document.getElementById('paperButton2').disabled = false;
  document.getElementById('scissorsButton2').disabled = false;

  // Réinitialiser le résultat
  document.getElementById('result').textContent = "";
}

// Ajouter des gestionnaires d'événement aux boutons de choix des joueurs
document.getElementById('rockButton1').addEventListener('click', function() {
  if (!gameEnded) {
    player1Choice = "rock";
    document.getElementById('rockButton1').disabled = true;
    document.getElementById('paperButton1').disabled = true;
    document.getElementById('scissorsButton1').disabled = true;
    if (player2Choice !== "") {
      checkResult();
    }
  }
});

document.getElementById('paperButton1').addEventListener('click', function() {
  if (!gameEnded) {
    player1Choice = "paper";
    document.getElementById('rockButton1').disabled = true;
    document.getElementById('paperButton1').disabled = true;
    document.getElementById('scissorsButton1').disabled = true;
    if (player2Choice !== "") {
      checkResult();
    }
  }
});

document.getElementById('scissorsButton1').addEventListener('click', function() {
  if (!gameEnded) {
    player1Choice = "scissors";
    document.getElementById('rockButton1').disabled = true;
    document.getElementById('paperButton1').disabled = true;
    document.getElementById('scissorsButton1').disabled = true;
    if (player2Choice !== "") {
      checkResult();
    }
  }
});

document.getElementById('rockButton2').addEventListener('click', function() {
  if (!gameEnded) {
    player2Choice = "rock";
    document.getElementById('rockButton2').disabled = true;
    document.getElementById('paperButton2').disabled = true;
    document.getElementById('scissorsButton2').disabled = true;
    if (player1Choice !== "") {
      checkResult();
    }
  }
});

document.getElementById('paperButton2').addEventListener('click', function() {
  if (!gameEnded) {
    player2Choice = "paper";
    document.getElementById('rockButton2').disabled = true;
    document.getElementById('paperButton2').disabled = true;
    document.getElementById('scissorsButton2').disabled = true;
    if (player1Choice !== "") {
      checkResult();
    }
  }
});

document.getElementById('scissorsButton2').addEventListener('click', function() {
  if (!gameEnded) {
    player2Choice = "scissors";
    document.getElementById('rockButton2').disabled = true;
    document.getElementById('paperButton2').disabled = true;
    document.getElementById('scissorsButton2').disabled = true;
    if (player1Choice !== "") {
      checkResult();
    }
  }
});

// Gestionnaire d'événement pour le bouton de rejouer
document.getElementById('playAgainButton').addEventListener('click', function() {
  resetGame();
});

// Masquer le bouton de rejouer au début du jeu
document.getElementById('playAgainButton').style.display = 'block';
