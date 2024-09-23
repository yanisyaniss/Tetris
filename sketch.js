let grille;
let pieceActuelle;

function setup() {
  createCanvas(200, 400); // zone de jeu
  grille = new Grille();
  pieceActuelle = new Piece();
}

function draw() {
  background(0); // Effacement de l'écran à chaque frame
  grille.afficher();
  pieceActuelle.afficher();

  if (frameCount % 30 == 0) { // descendre toutes les 30 frames
    if (pieceActuelle.descendre(grille)) {
      grille.ajouterPiece(pieceActuelle); // Ajoute la pièce dans la grille si elle touche le bas
      pieceActuelle = new Piece();
    }
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    pieceActuelle.bouger("gauche", grille); // Déplacement à gauche si la touche gauche est pressée
  } else if (keyCode == RIGHT_ARROW) {
    pieceActuelle.bouger("droite", grille); 
  }
}
