class Grille {
    constructor(cols, rows) {
      this.cols = cols;
      this.rows = rows; 
      this.tailleCase = 40; 
    }
  
    afficher() {
      fill(255);
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          rect(x * this.tailleCase, y * this.tailleCase, this.tailleCase, this.tailleCase); 
        }
      }
    }
  
    ajouterPiece(piece) {
    }
  }
  