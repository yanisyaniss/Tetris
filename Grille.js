class Grille {
  constructor() {
    this.tailleCase = 40;
    this.cols = width / this.tailleCase;
    this.rows = height / this.tailleCase;
    this.matrice = Array(this.rows).fill(0).map(() => Array(this.cols).fill(0));
  }
  afficher() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.matrice[y][x] === 1) {
          fill(255, 0, 0); 
        } else {
          fill(255); 
        }
        
        
        rect(x * this.tailleCase, y * this.tailleCase, this.tailleCase, this.tailleCase);
      }
    }
  }

  ajouterPiece(piece) {
    for (let bloc of piece.forme) {
      let x = (piece.x / this.tailleCase) + bloc[0];
      let y = (piece.y / this.tailleCase) + bloc[1];

      if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
        this.matrice[y][x] = 1;
      }
    }
  }
  collision(piece) {
    for (let bloc of piece.forme) {
      let x = (piece.x / this.tailleCase) + bloc[0];
      let y = (piece.y / this.tailleCase) + bloc[1];
      if (x < 0 || x >= this.cols || y >= this.rows || this.matrice[y][x] === 1) {
        return true;
      }
    }
    return false;
  }
}
