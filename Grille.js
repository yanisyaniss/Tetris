class Grille {
  constructor() {
    this.tailleCase = 40;
    this.cols = width / this.tailleCase; 
    this.rows = height / this.tailleCase; 
    this.matrice = Array(this.rows).fill(0).map(() => Array(this.cols).fill(0)); // Grille vide
  }

  afficher() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        fill(this.matrice[y][x] == 1 ? [255, 0, 0] : [255]); // Rouge pour bloc, blanc sinon
        rect(x * this.tailleCase, y * this.tailleCase, this.tailleCase, this.tailleCase);
      }
    }
  }

  ajouterPiece(piece) {
    for (let bloc of piece.forme) {
      let x = (piece.x / this.tailleCase) + bloc[0];
      let y = (piece.y / this.tailleCase) + bloc[1];
      if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) this.matrice[y][x] = 1; // Ajout bloc
    }
  }

  collision(piece) {
    for (let bloc of piece.forme) {
      let x = (piece.x / this.tailleCase) + bloc[0];
      let y = (piece.y / this.tailleCase) + bloc[1];
      if (x < 0 || x >= this.cols || y >= this.rows || this.matrice[y][x] == 1) return true; // Vérif. collision
    }
    return false;
  }
}
