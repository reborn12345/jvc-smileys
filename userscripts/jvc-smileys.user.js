// ==UserScript==
// @name         JVC Smiley animés
// @namespace    https://violentmonkey.github.io/
// @version      1.0
// @description  Réactive les smileys animés sur le forum jeuxvideo.com
// @author       HulkDu92
// @match        https://www.jeuxvideo.com/*
// @homepageURL  https://github.com/reborn12345/jvc-smileys
// @supportURL   https://github.com/reborn12345/jvc-smileys/issues
// @downloadURL  https://update.greasyfork.org/scripts/518633/JVC%20Smiley%20anim%C3%A9s.user.js
// @updateURL    https://update.greasyfork.org/scripts/518633/JVC%20Smiley%20anim%C3%A9s.meta.js
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    const smileyBaseURL = "https://reborn12345.github.io/jvc-smileys/smileys/"; // URL des smileys animés
    
     // Mapping des codes des smileys avec leur nom de fichier équivalent
     // Commenter les smileys pas animés de base
     const smileyMap = {
        // ":)": "1",
        // ":question:": "2",
        // ":g)": "3",
        // ":d)": "4",
        // ":cd:": "5",
        ":globe:": "6",
        // ":p)": "7",
        // ":malade:": "8",
        // ":pacg:": "9",
        // ":pacd:": "10",
        // ":noel:": "11",
        // ":o))": "12",
        // ":snif2:": "13",
        // ":-(": "14",
        // ":-((": "15",
        // ":mac:": "16",
        ":gba:": "17",
        // ":hap:": "18",
        // ":nah:": "19",
        // ":snif:": "20",
        // ":mort:": "21",
        ":ouch:": "22",
        ":-)))": "23",
        ":content:": "24",
        ":nonnon:": "25",
        ":cool:": "26",
        ":sleep:": "27",
        ":doute:": "28",
        // ":hello:": "29",
        ":honte:": "30",
        ":-p": "31",
        ":lol:": "32",
        ":non2:": "33",
        ":monoeil:": "34",
        ":non:": "35",
        // ":-D": "40",
        ":oui:": "37",
        // ":rechercher:": "38",
        ":rire:": "39",
        ":rire2:": "41",
        // ":salut:": "42",
        ":sarcastic:": "43",
        // ":up:": "44",
        // ":(": "45",
        // ":-)": "46",
        // ":peur:": "47",
        // ":bye:": "48",
        ":dpdr:": "49",
        // ":fou:": "50",
        // ":gne:": "51",
        // ":dehors:": "52",
        // ":fier:": "53",
        // ":coeur:": "54",
        // ":rouge:": "55",
        // ":sors:": "56",
        // ":ouch2:": "57",
        // ":merci:": "58",
        // ":svp:": "59",
        // ":ange:": "60",
        // ":diable:": "61",
        // ":gni:": "62",
        // ":spoiler:": "63",
        // ":hs:": "64",
        // ":ddb:": "ddb",
        // ":fish:": "fish",
        // ":sournois:": "67",
        // ":hum:": "68",
        ":bravo:": "69",
        ":banzai:": "70",
        ":bave:": "71",
        ":cimer:": "cimer",
        ":hapoelparty:": "hapoelparty",
        ":loveyou:": "loveyou",
        ":cute:": "nyu",
        // ":objection:": "objection",
        // ":pf:": "pf",
        ":play:": "play",
        // ":siffle:": "siffle"
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