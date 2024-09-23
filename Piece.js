class Piece {
  constructor() {
    this.taille = 40;
    this.x = Math.floor(Math.random() * (width / this.taille)) * this.taille; // Position aléatoire en x sur la grille
    this.y = 0; 
    this.formes = [
      [[0, 0], [1, 0], [0, 1], [1, 1]],  
      [[0, 0], [1, 0], [2, 0], [3, 0]],  
      [[0, 0], [-1, 1], [0, 1], [1, 1]], 
      [[0, 0], [0, 1], [0, 2], [1, 2]],  
      [[0, 0], [0, 1], [0, 2], [-1, 2]], 
      [[0, 0], [1, 0], [1, 1], [2, 1]],  
      [[0, 0], [-1, 0], [-1, 1], [-2, 1]]
    ];
    this.forme = random(this.formes); 
  }
  
  afficher() {
    fill(255, 0, 0); // bloc en rouge
    noStroke();
    for (let i = 0; i < this.forme.length; i++) {
      let bloc = this.forme[i];
      rect(this.x + bloc[0] * this.taille, this.y + bloc[1] * this.taille, this.taille, this.taille); // Dessine chaque bloc de la pièce
    }
  }

  descendre(grille) {
    this.y += this.taille; 
    if (this.y + this.taille > height || grille.collision(this)) { // Vérifie les collisions 
      this.y -= this.taille;
      return true;
    }
    return false;
  }

  bouger(direction, grille) {
    if (direction == "gauche") {
      this.x -= this.taille; // Déplace la pièce à gauche
    } else if (direction == "droite") {
      this.x += this.taille; // Déplace la pièce à droite
    }

    // verif si pièce sort des limites ou entre en collision
    if (this.x < 0 || this.x + this.taille > width || grille.collision(this)) {
      if (direction == "gauche") {
        this.x += this.taille; // Annule le mouvement vers la gauche si collision
      } else if (direction == "droite") {
        this.x -= this.taille; // Annule le mouvement vers la droite si collision
      }
    }
  }
}
