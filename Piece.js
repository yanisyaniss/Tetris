class Piece {
  constructor() {
    this.taille = 30;
    this.x = Math.floor(Math.random() * ((width - 60) / this.taille)) * this.taille;
    this.y = -60; 
    
    this.formes = [
      { form: [[0, 0], [1, 0], [0, 1], [1, 1]], color: [255, 0, 0] }, 
      { form: [[0, 0], [1, 0], [2, 0], [3, 0]], color: [0, 255, 0] }, 
      { form: [[0, 0], [-1, 1], [0, 1], [1, 1]], color: [0, 0, 255] }, 
      { form: [[0, 0], [0, 1], [0, 2], [1, 2]], color: [255, 255, 0] }, 
      { form: [[0, 0], [0, 1], [0, 2], [-1, 2]], color: [255, 0, 255] },
      { form: [[0, 0], [1, 0], [1, 1], [2, 1]], color: [0, 255, 255] }, 
      { form: [[0, 0], [-1, 0], [-1, 1], [-2, 1]], color: [255, 165, 0] } 
    ];
    
    this.type = floor(random(this.formes.length));
    this.forme = this.formes[this.type].form;
    this.couleur = this.formes[this.type].color;
  }
  
  afficher() {
    fill(this.couleur);
    noStroke();
    for (let bloc of this.forme) {
      rect(this.x + bloc[0] * this.taille, this.y + bloc[1] * this.taille, this.taille, this.taille);
    }
  }

  descendre(grille) {
    this.y += this.taille;
    if (this.y + this.taille > height || grille.collision(this)) {
      this.y -= this.taille;
      return true;
    }
    return false;
  }

  bouger(direction, grille) {
    if (direction == "gauche") {
      this.x -= this.taille;
    } else if (direction == "droite") {
      this.x += this.taille;
    }

    if (this.x < 0 || this.x + this.taille > width || grille.collision(this)) {
      if (direction == "gauche") {
        this.x += this.taille;
      } else if (direction == "droite") {
        this.x -= this.taille;
      }
    }
  }

  tourner(grille) {
    let nouvelleForme = this.forme.map(bloc => [ -bloc[1], bloc[0] ]);

    let ancienneForme = this.forme;
    this.forme = nouvelleForme;
    if (this.x < 0 || this.x + this.taille > width || grille.collision(this)) {
      this.forme = ancienneForme;
    }
  }
}
