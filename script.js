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

choixJoueur.forEach(choix => {
    choix.addEventListener('click', () => {
        const choixJ = choix.textContent.includes('Cayoux') ? CHOIX.PIERRE : 
                        choix.textContent.includes('Papier') ? CHOIX.FEUILLE : 
                        CHOIX.CISEAUX;
        const choixO = Math.floor(Math.random() * 3); // 0: PIERRE, 1: FEUILLE, 2: CISEAUX
        const choixOrdinateurSymb = Object.values(CHOIX)[choixO];

        choixJoueurImg.textContent = choixJ;
        choixOrdi.textContent = choixOrdinateurSymb;

        const resultat = determineVainqueur(choixJ, choixOrdinateurSymb);

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

        scoreJoueur.textContent = scoreJ;
        scoreOrdi.textContent = scoreO;

        if (winStreak >= 3) {
            messageSpecial.textContent = "🔥 Mode Ultra Débloqué ! 🔥";
            document.body.style.backgroundColor = "#e74c3c";
        } else {
            messageSpecial.textContent = "";
            document.body.style.backgroundColor = "";
        }
    });
});

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
