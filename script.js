const choixJoueur = document.querySelectorAll('.choix');
const choixJoueurImg = document.getElementById('choix-joueur-img');
const choixOrdi = document.getElementById('choix-ordi');
const verdict = document.getElementById('verdict');

const CHOIX = {
    PIERRE: 0,
    FEUILLE: 1,
    CISEAUX: 2
};

choixJoueur.forEach(choix => {
    choix.addEventListener('click', () => {
        const choixJ = choix.textContent; // Choix du joueur
        const choixO = Math.floor(Math.random() * 3); // Choix aléatoire de l'ordinateur (0: pierre, 1: feuille, 2: ciseaux)
        const choixJinInt = choixJ === 'Cayoux' ? CHOIX.PIERRE : choixJ === 'Papier' ? CHOIX.FEUILLE : CHOIX.CISEAUX;

        choixOrdi.src = choixO === 0 ? 'images/stone.png' : choixO === 1 ? 'images/paper.png' : 'images/scissor.png'; // Affichage du choix de l'ordinateur
        choixJoueurImg.src = choixJinInt === CHOIX.PIERRE ? 'images/stone.png' : choixJinInt === CHOIX.FEUILLE ? 'images/paper.png' : 'images/scissor.png'; // Affichage du choix du joueur

        const resultat = determineVainqueur(choixJinInt, choixO); // Déterminer le gagnant

        verdict.textContent = resultat === 0 ? 'Gagné !' : resultat === 1 ? 'Perdu !' : 'Égalité !'; // Affichage du verdict
    });
});

function determineVainqueur(cj, co) {
    // Règles du jeu
    if (cj === CHOIX.PIERRE && co === 2) {
        return 0; // Joueur gagne
    } else if (cj === CHOIX.FEUILLE && co === 0) {
        return 0; // Joueur gagne
    } else if (cj === CHOIX.CISEAUX && co === 1) {
        return 0; // Joueur gagne
    } else if (cj === co) {
        return 2; // Égalité
    } else {
        return 1; // Ordinateur gagne
    }
}
