const choixJoueur = document.querySelectorAll('.choix');
const choixJoueurImg = document.getElementById('choix-joueur-img');
const choixOrdi = document.getElementById('choix-ordi');
const verdict = document.getElementById('verdict');
const scoreJoueur = document.getElementById('score-joueur');
const scoreOrdi = document.getElementById('score-ordi');
const messageSpecial = document.getElementById('message-special');

let scoreJ = 0;
let scoreO = 0;
let winStreak = 0;

const CHOIX = {
    PIERRE: '🪨',
    FEUILLE: '📄',
    CISEAUX: '✂️'
};

// Fonction pour jouer le son
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.play();
}

// Déterminer le vainqueur
function determineVainqueur(cj, co) {
    if ((cj === CHOIX.PIERRE && co === CHOIX.CISEAUX) || 
        (cj === CHOIX.FEUILLE && co === CHOIX.PIERRE) || 
        (cj === CHOIX.CISEAUX && co === CHOIX.FEUILLE)) {
        return 'win';
    } else if (cj === co) {
        return 'draw';
    } else {
        return 'lose';
    }
}

choixJoueur.forEach(choix => {
    choix.addEventListener('click', () => {
        const choixJ = choix.textContent.includes('Cayoux') ? CHOIX.PIERRE : 
                        choix.textContent.includes('Papier') ? CHOIX.FEUILLE : 
                        CHOIX.CISEAUX;
        const choixO = Math.floor(Math.random() * 3); // 0: PIERRE, 1: FEUILLE, 2: CISEAUX
        const choixOrdinateurSymb = Object.values(CHOIX)[choixO];

        // Mise à jour de l'affichage des choix
        choixJoueurImg.textContent = choixJ;
        choixOrdi.textContent = choixOrdinateurSymb;

        const resultat = determineVainqueur(choixJ, choixOrdinateurSymb);

        // Mise à jour des scores et du verdict
        if (resultat === 'win') {
            scoreJ++;
            winStreak++;
            verdict.innerHTML = '<span class="win">Gagné !</span>';
        } else if (resultat === 'lose') {
            scoreO++;
            winStreak = 0;
            verdict.innerHTML = '<span class="lose">Perdu !</span>';
        } else {
            verdict.innerHTML = '<span class="draw">Égalité !</span>';
            winStreak = 0;
        }

        // Mise à jour des scores
        scoreJoueur.textContent = scoreJ;
        scoreOrdi.textContent = scoreO;

        // Activer le message spécial après une série de victoires
        if (winStreak >= 3) {
            messageSpecial.textContent = "🔥 Série de trois victoires! 🔥";
        } else {
            messageSpecial.textContent = "";
        }
    });
});
