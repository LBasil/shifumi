const choixJoueur = document.querySelectorAll('.choix');
const choixJoueurImg = document.getElementById('choix-joueur-img');
const choixOrdi = document.getElementById('choix-ordi');
const verdict = document.getElementById('verdict');

const CHOIX = {
    PIERRE: '🪨',
    FEUILLE: '📄',
    CISEAUX: '✂️'
};

choixJoueur.forEach(choix => {
    choix.addEventListener('click', () => {
        const choixJ = choix.textContent; 
        const choixO = Math.floor(Math.random() * 3);
        const choixJinSymb = choixJ.includes('Cayoux') ? CHOIX.PIERRE : choixJ.includes('Papier') ? CHOIX.FEUILLE : CHOIX.CISEAUX;

        const choixOrdinateurSymb = Object.values(CHOIX)[choixO];
        
        choixJoueurImg.textContent = choixJinSymb;
        choixOrdi.textContent = choixOrdinateurSymb;

        const resultat = determineVainqueur(choixJinSymb, choixOrdinateurSymb); 

        verdict.innerHTML = resultat === 'win' 
            ? '<span class="win">Gagné !</span>' 
            : resultat === 'lose' 
            ? '<span class="lose">Perdu !</span>' 
            : '<span class="draw">Égalité !</span>';
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
