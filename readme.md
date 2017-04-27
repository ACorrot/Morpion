# Projet d'Antony Corrot -> Morpion

## Ce qui a été utilisé comme demandé: 

- Utilisation de JavaScript pur, sans framework. Utilisation de requireJs.

- Le jeu est fonctionnel à 99%, il ne manque que le bug à corriger, mais j'ajouterai plein de fonctionnalités dans un futur proche.

- HTML5 valide.

- Utilisation correcte du DOM.

- Les boucles, les conditions ont été utilisées. J'aurais pu utiliser un try/catch, mais je ne savais pas quoi mettre dedans, mais je sais qu'il permet de faire une action si par exemple une erreur apparaît.

- JSon a été utilisé (Via localStorage, et création du tableau JSon).

- Usage de Git ( Pas eu besoin de faire une branche mais je vais en créer une au hasard).

- Localstorage utilisé pour gérer le nombre de parties gagnées du joueur 1 et du joueur 2


## Ce que j'ai fais: 

- Un morpion, tout simple mais sans IA. 





# Règles du morpion:
- Deux joueurs jouent chacun leur tours en posant un pion sur une case par tour; ayant bien entendu une couleur différente chacun.
- Le jeu se compose de 3x3 cases, soit un total de 9, formant un carré.
- Le but est de parvenir à aligner verticalement, horizontalement ou en oblique, 3 pions de la même couleur.
- On ne peut pas déplacer de pions ni poser un pion sur une case déjà occupée.
- Si toutes les cases sont occupées ET que personne n'a gagné, il y a alors égalité.

# Bug connu à ce jour:

- Le match nul ne s'affiche pas, mais le bug qui faisait qu'on ne gagnait pas si on posait le dernier jeton a été corrigé.