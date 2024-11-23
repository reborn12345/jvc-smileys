// ==UserScript==
// @name         JVC Smiley animés
// @namespace    https://violentmonkey.github.io/
// @version      1.0
// @description  Réactive les smileys animés sur le forum jeuxvideo.com
// @author       HulkDu92
// @match        https://www.jeuxvideo.com/forums/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const smileyBaseURL = "https://reborn12345.github.io/jvc-smileys/smileys/"; // URL de base de vos smileys, à ajuster
    
     // Mapping of JVC smiley codes to your custom filenames
     const smileyMap = {
        ":)": "1",
        ":snif:" : "20",
        ":gba:" : "17",
        ":g)" : "3",
        ":-)" : "46",
        ":snif2:" : "13",
        ":bravo:" : "69",
        ":d)" : "4",
        ":hap:" : "18",
        ":ouch:" : "22",
        ":pacg:" : "9",
        ":cd:" : "5",
        ":-)))" : "23",
        ":ouch2:" : "57",
        ":pacd:" : "10",
        ":cute:" : "nyu",
        ":content:" : "24",
        ":p)" : "7",
        ":-p" : "31",
        ":noel:" : "11",
        ":oui:" : "37",
        ":(" : "45",
        ":peur:" : "47",
        ":question:" : "2",
        ":cool:" : "26",
        ":-(" : "14",
        ":coeur:" : "54",
        ":mort:" : "21",
        ":rire:" : "39",
        ":-((:" : "15",
        ":fou:" : "50",
        ":sleep:" : "27",
        ":-D" : "40",
        ":nonnon:" : "25",
        ":fier:" : "53",
        ":honte:" : "30",
        ":rire2:" : "41",
        ":non2:" : "33",
        ":sarcastic:" : "43",
        ":monoeil:" : "34",
        ":o))" : "12",
        ":nah:" : "19",
        ":doute:" : "28",
        ":rouge:" : "55",
        ":ok:" : "36",
        ":non:" : "35",
        ":malade:" : "8",
        ":fete:" : "66",
        ":sournois:" : "67",
        ":hum:" : "68",
        ":ange:" : "60",
        ":diable:" : "61",
        ":gni:" : "62",
        ":play:" : "play",
        ":desole:" : "65",
        ":spoiler:" : "63",
        ":merci:" : "58",
        ":svp:" : "59",
        ":sors:" : "56"
      };

    function restaurerSmileys() {
        // Sélectionner tous les smileys avec data-code non encore traités
        document.querySelectorAll('img[data-code]:not([data-jvsmileys-processed])').forEach(img => {
            const code = img.getAttribute('data-code'); // Récupère le code du smiley (ex. : `:rire:`)
            if (!code) return;

            // Cherche le smiley dans le mapping
            const smileyFileName = smileyMap[code];
            if (smileyFileName) {
                // Crée l'URL du smiley animé
                const smileyURL = `${smileyBaseURL}${smileyFileName}.gif`;

                // Vérifie si l'URL est valide
                fetch(smileyURL).then(response => {
                    if (response.ok) {
                        // Remplace le smiley si trouvé
                        img.src = smileyURL;
                        img.setAttribute('data-jvsmileys-processed', true); // Marque comme traité
                    }
                }).catch(err => {
                    console.error(`Erreur lors du chargement du smiley : ${smileyURL}`, err);
                });
            }
        });
    }

    // Initial replacement
    restaurerSmileys();

    const observer = new MutationObserver(restaurerSmileys);
    observer.observe(document.body, { childList: true, subtree: true });
})();