let grille;
let pieceActuelle;


function setup() {
  createCanvas(200, 400);
  grille = new Grille();
  pieceActuelle = new Piece();
}

function draw() {
  background(0);
  grille.afficher();
  pieceActuelle.afficher();

  if (frameCount % 30 == 0) {
    if (pieceActuelle.descendre(grille)) {
      grille.ajouterPiece(pieceActuelle);
      pieceActuelle = new Piece();
    }
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    pieceActuelle.bouger("gauche", grille); 
  } else if (keyCode == RIGHT_ARROW) {
    pieceActuelle.bouger("droite", grille); 
  }
}

