# JVC Smileys Animés

[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]


Ce projet fournit un script Python pour télécharger les GIFs des smileys de JVFlux et les rend disponibles pour une utilisation dans un userscript afin de corriger le problème de figeage des smileys JVC.

<p align="center">
  <img src="smileys/39.gif" alt="Smiley Example 39" width="32" height="32">
  <img src="smileys/35.gif" alt="Smiley Example 35" width="32" height="32">
  <img src="smileys/22.gif" alt="Smiley Example 22" width="32" height="32">
</p>


## Fonctionnalités

* Télécharge tous les smileys disponibles sur JVFlux.
* Enregistre les smileys sous forme de fichiers GIF dans le répertoire `/smileys/`.
* Hébergé sur GitHub Pages pour un accès facile ([https://reborn12345.github.io/jvc-smileys/]).
* Intégration d'un userscript prévue pour une utilisation transparente des smileys.


## Utilisation

**1. Téléchargement des Smileys:**

* **Utilisation du script:**
    * Clonez ce dépôt : `git clone https://github.com/votre-nom-utilisateur/nom-de-votre-depot.git`
    * Installez les paquets requis : `pip install -r requirements.txt`
    * Exécutez le script : `python src/download_smileys.py`

Les smileys seront téléchargés dans le répertoire `smileys` de votre projet.

**2. Accès aux Smileys (GitHub Pages):**

Les smileys sont également hébergés sur GitHub Pages, permettant un accès direct via des URLs comme celles-ci :
`https://github.com/reborn12345/jvc-smileys/blob/main/smileys/1.gif`
`https://votre-nom-utilisateur.github.io/nom-de-votre-depot/smileys/9.gif`
...etc.

## Intégration Userscript

Agrémentez votre expérience JVFlux (ou autre forum) avec des smileys animés ! Ce projet inclut un userscript qui intègre de manière transparente les smileys téléchargés, remplaçant les smileys statiques par défaut par des GIFs animés dynamiques.

**Comment ça marche :**

Le userscript intercepte intelligemment le chargement des smileys par défaut et fait correspondre leurs attributs `data-code` aux GIFs animés correspondants hébergés sur GitHub Pages. Il remplace ensuite dynamiquement les sources des images, donnant vie à vos conversations !

**Installation :**

1. **Obtenir un gestionnaire de Userscripts :** Vous aurez besoin d'un gestionnaire de userscripts pour installer et exécuter le script. Voici quelques options populaires :

    * **Chrome/Edge :** [Tampermonkey](https://www.tampermonkey.net/)
    * **Firefox :** [Violentmonkey](https://violentmonkey.github.io/) ou [Tampermonkey](https://www.tampermonkey.net/)
    * **Autres navigateurs :** Recherchez un gestionnaire de userscripts compatible dans la boutique d'extensions de votre navigateur.

2. **Installer le Userscript :**

    Cliquez sur le bouton "Installer" ci-dessous (ou copiez le code brut depuis [userscript/jvflux-smileys.user.js](userscript/jvflux-smileys.user.js)). Cela devrait ouvrir automatiquement votre gestionnaire de userscripts.


    [![Installer le Userscript](https://img.shields.io/badge/Installer%20le%20Userscript-Cliquez%20ici-brightgreen?style=for-the-badge&logo=tampermonkey)](https://update.greasyfork.org/scripts/518633/JVC%20Smiley%20anim%C3%A9s.user.js)


3. **Activer le script :** Assurez-vous que le script est activé dans votre gestionnaire de userscripts. C'est tout ! Rendez-vous sur JVFlux (ou le forum cible) et profitez des smileys animés !

## Contribution

Les contributions sont les bienvenues !


## License

[MIT](LICENSE)



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/reborn12345/jvc-smileys.svg?style=for-the-badge
[contributors-url]: https://github.com/reborn12345/jvc-smileys/graphs/contributors
[license-shield]: https://img.shields.io/github/license/reborn12345/jvc-smileys.svg?style=for-the-badge
[license-url]: https://github.com/reborn12345/jvc-smileys/blob/master/LICENSE
[stars-shield]: https://img.shields.io/github/stars/reborn12345/jvc-smileys.svg?style=for-the-badge
[stars-url]: https://github.com/reborn12345/jvc-smileys/stargazers
[forks-shield]: https://img.shields.io/github/forks/reborn12345/jvc-smileys.svg?style=for-the-badge
[forks-url]: https://github.com/reborn12345/jvc-smileys/network/members
[issues-shield]: https://img.shields.io/github/issues/reborn12345/jvc-smileys.svg?style=for-the-badge
[issues-url]: https://github.com/reborn12345/jvc-smileys/issues
