class Grille {
  constructor() {
    this.tailleCase = 30;
    this.cols = width / this.tailleCase;
    this.rows = height / this.tailleCase;
    this.matrice = Array(this.rows).fill(0).map(() => Array(this.cols).fill(0));
  }

  afficher() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.matrice[y][x] !== 0) {
          fill(this.matrice[y][x]);
          rect(x * this.tailleCase, y * this.tailleCase, this.tailleCase, this.tailleCase);
        } else {
          fill(50); 
          rect(x * this.tailleCase, y * this.tailleCase, this.tailleCase, this.tailleCase);
        }
      }
    }
  }

  ajouterPiece(piece) {
    for (let bloc of piece.forme) {
      let x = (piece.x / this.tailleCase) + bloc[0];
      let y = (piece.y / this.tailleCase) + bloc[1];
      if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
        this.matrice[y][x] = piece.couleur;
      }
    }
    this.supprimerLignes();
  }
  
  collision(piece) {
    for (let bloc of piece.forme) {
      let x = Math.floor(piece.x / this.tailleCase) + bloc[0];
      let y = Math.floor(piece.y / this.tailleCase) + bloc[1];

      if (x < 0 || x >= this.cols) {
        return true;
      }

      if (y >= this.rows) return true;
      if (y >= 0 && this.matrice[y][x] !== 0) return true;
    }
    return false;
  }

  supprimerLignes() {
    for (let y = this.rows - 1; y >= 0; y--) {
      let ligneComplete = true;
      for (let x = 0; x < this.cols; x++) {
        if (this.matrice[y][x] === 0) {
          ligneComplete = false;
          break;
        }
      }
      if (ligneComplete) {
        
        this.matrice.splice(y, 1);
        this.matrice.unshift(Array(this.cols).fill(0));
        score += 100; 
        updateScore();
        y++; 
      }
    }
  }
}