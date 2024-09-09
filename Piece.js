class Piece {
    constructor() {
      this.x = 0
      this.y = 0;
      this.taille = 40;
    }
  
    afficher() {
      fill(255, 0, 0);
      rect(this.x, this.y, this.taille, this.taille); 
    }
  
    descendre() {
      this.y += this.taille; 
    }
  
    estEnBas() {
      return this.y >= height - this.taille; 
    }
  }
  