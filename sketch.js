let grille;
let pieceActuelle;

function setup() {
  createCanvas(200, 400);
  grille = new Grille(10, 20); 
  pieceActuelle = new Piece(); 
}

function draw() {
  background(0);
  grille.afficher();
  pieceActuelle.afficher();

  if (frameCount % 30 === 0) {
    if (pieceActuelle.descendre(grille)) {
      grille.ajouterPiece(pieceActuelle);
      pieceActuelle = new Piece();
    }
  }
}