let grille;
let pieceActuelle;
let prochainePiece;
let score = 0;
let gameOverVisible = false; 
let jeuEnCours = true;

function setup() {
  createCanvas(300, 600);
  grille = new Grille();
  pieceActuelle = new Piece();
  prochainePiece = new Piece();
  updateScore();
}

function draw() {
  background(0);
  grille.afficher();

  if (jeuEnCours) {
    pieceActuelle.afficher();

    if (frameCount % 20 == 0) {
      if (pieceActuelle.descendre(grille)) {
        grille.ajouterPiece(pieceActuelle);
        score += 10;

        let gameOver = false;
        for (let bloc of pieceActuelle.forme) {
          let yPos = pieceActuelle.y + bloc[1] * pieceActuelle.taille;
          if (yPos <= 0) {
            gameOver = true;
            break;
          }
        }

        if (gameOver) {
          jeuEnCours = false;
          afficherGameOver();
        } else {
          pieceActuelle = prochainePiece;
          prochainePiece = new Piece();
          updateScore();
        }
      }
    }

    afficherProchainePiece(); // Ajout de l'affichage de la prochaine pièce
  } else if (gameOverVisible) {
    fill(255, 0, 0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width/2, height/2);

    fill(255);
    textSize(20);
    text("Appuyez sur F5 pour recommencer", width/2, height/2 + 50);
  }
}

function keyPressed() {
  if (!jeuEnCours) return;

  if (keyCode == LEFT_ARROW) {
    pieceActuelle.bouger("gauche", grille);
  } else if (keyCode == RIGHT_ARROW) {
    pieceActuelle.bouger("droite", grille);
  } else if (keyCode == DOWN_ARROW) {
    if (pieceActuelle.descendre(grille)) {
      grille.ajouterPiece(pieceActuelle);
      score += 10;

      if (pieceActuelle.y <= 0) {
        jeuEnCours = false;
        afficherGameOver();
        return;
      }

      pieceActuelle = prochainePiece;
      prochainePiece = new Piece();
      updateScore();
    }
  } else if (keyCode == UP_ARROW) {
    pieceActuelle.tourner(grille);
  }
}


function updateScore() {
  document.getElementById('score').textContent = `Score: ${score}`;
}

function afficherGameOver() {
  gameOverVisible = true;
  fill(255, 0, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width/2, height/2);

  fill(255);
  textSize(20);
  text("Appuyez sur F5 pour recommencer", width/2, height/2 + 50);
}

function afficherProchainePiece() {
  let taille = prochainePiece.taille;
  let xOffset = width - 100;
  let yOffset = 50;

  fill(255);
  textSize(16);
  text("Suivante :", xOffset, yOffset - 20);

  for (let bloc of prochainePiece.forme) {
    let x = xOffset + bloc[0] * taille;
    let y = yOffset + bloc[1] * taille;
    fill(prochainePiece.couleur);
    rect(x, y, taille, taille);
  }
}
