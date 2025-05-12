let grille;
let pieceActuelle;
let score = 0;
let gameOverVisible = false; 
let jeuEnCours = true;

function setup() {
  createCanvas(300, 600);
  grille = new Grille();
  pieceActuelle = new Piece();
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
          pieceActuelle = new Piece();
          updateScore();
        }
      }
    }
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
      
      pieceActuelle = new Piece();
      updateScore();
    }
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