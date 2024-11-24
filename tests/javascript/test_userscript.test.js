// JVC_Smiley_animés.test.js

const { restaurerSmileys } = require('./JVC_Smiley_animés.user.js'); // Importez la fonction

describe('restaurerSmileys', () => {
  it('remplace l\'image avec l\'URL du smiley animé', () => {
    // Simuler le DOM
    document.body.innerHTML = '<img src="https://image.jeuxvideo.com/smileys_img/39.gif" alt=":rire:" data-code=":rire:" title=":rire:" width="16" height="16">'; 
    restaurerSmileys();
    const img = document.querySelector('img[data-code=":rire:"]');
    expect(img.src).toContain('https://reborn12345.github.io/jvc-smileys/smileys/39.gif'); // Vérifiez l'URL
  });
});