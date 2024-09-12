let grille;
let pieceActuelle;

function upset() {
  let name = 'Utilisateur';
  console.log(`Bienvenu , ${name} dans tetris`);
}
upset()
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
