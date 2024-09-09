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
  pieceActuelle.descendre();

  if (pieceActuelle.estEnBas()) {
    grille.ajouterPiece(pieceActuelle);
    pieceActuelle = new Piece();  
  }
}
