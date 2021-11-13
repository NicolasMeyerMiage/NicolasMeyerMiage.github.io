# Projet WebAudio - Javascript par Nicolas Meyer

  

## Panel d'options

  

![Panel On](https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/panelon.png) ![Panel Off](https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/paneloff.png)

  

L'application dispose d'un panel d'options basiques de gestion de la lecture du sons.

Grâce à ce panel, il sera possible de :

- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/play.png" alt="play" height="20" width="20"/> affichera le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/pause.png" alt="play" height="20" width="20"/> et lancera la musique et la reprendra au moment où elle a été stopée.
- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/pause.png" alt="play" height="20" width="20"/> affichera le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/play.png" alt="play" height="20" width="20"/> et arrêtera la musique.
- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/back.png" alt="play" height="20" width="20"/> fera revenir la musique dix secondes en arrière.
- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/restart.png" alt="play" height="20" width="20"/> redémarrera la musique au début.
- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/forward.png" alt="play" height="20" width="20"/> fera bondir la musique dix secondes en avant.
- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/loop.png" alt="play" height="20" width="20"/> affichera le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/loopOn.png" alt="play" height="20" width="20"/> qui indiquera que la musique redémarrera lorsqu'elle arrivera à la fin.
- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/loopOn.png" alt="play" height="20" width="20"/> affichera le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/loop.png" alt="play" height="20" width="20"/> qui indiquera que la musique ne redémarrera pas lorsqu'elle arrivera à la fin.
- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/sound.png" alt="play" height="20" width="20"/> affichera le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/mute.png" alt="play" height="20" width="20"/> qui coupera le sons mais pas sa progression.
- Cliquer sur le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/mute.png" alt="play" height="20" width="20"/> affichera le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/sound.png" alt="play" height="20" width="20"/> qui rétablira le sons.

## Panel des knobs buttons

![Panel Boutons](https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/boutton.png)

L'application propose un panel de bouton qui gère les effets sonores de la musique en cours. Le switch, quant-à-lui, sert à une option d'affichage.  
- Glisser le premier bouton  <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/phatty_example.png" alt="play" height="25" width="25"/> jouera sur la balance gauche et droite du sons.
- Glisser le deuxième bouton  <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/phatty_example.png" alt="play" height="25" width="25"/> jouera sur le volume de la musique. Attention, c'est fort... 
- Glisser le troisième bouton  <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/phatty_example.png" alt="play" height="25" width="25"/> jouera sur la vitesse de la musique.
- Cliquer sur le switch <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/switch.png" alt="play" height="25" width="25"/> modifiera l'affichage du canvas du sons :

 ![Canvas 1](https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/vizu1.png)
![Canvas 2](https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/vizu2.png)

## L'aiguille folle
En dessous du titre, il y a une aiguille réagissant au sons comprenant le rythme de la musique et la puissance du sons. Plus le sons est fort, plus l'aiguille tendra vers la droite.  
C'est un excellent indicateur pour savoir quand le sons est vraiment fort. Un vrai régale.  
![Aiguille](https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/vizu3.png)
## La Playlist

L'application dispose d'une petite playlist de trois titres d'excellentes factures dont un est l'un de mes titres favori (une chance sur trois de deviner lequel).  
![Playlist](https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/documentation/playlist.png)  
Ce panel propose de changer la musique à tout moment de l'écoute :
- Le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/actif.png" alt="play" height="20" width="20"/> indique la musique en cours de lecture. Cliquable, elle réinitialisera la musique.
- Cliquer sur l'un des boutons <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/inactif.png" alt="play" height="20" width="20"/> le transformera en morceau actif <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/actif.png" alt="play" height="20" width="20"/> qui rendra le morceau anciennement actif, inactif en l'affichant avec le bouton <img  src="https://raw.githubusercontent.com/NicolasMeyerMiage/NicolasMeyerMiage.github.io/main/myComponents/assets/imgs/inactif.png" alt="play" height="20" width="20"/>.

## Crédits
Projet réalisé par Nicolas Meyer.  
M2 MIAGE MBDS. 
Réalisé pour le 15/11/2021.
