// JVC_Smiley_animés.test.js

const { restaurerSmileys } = require('../../userscripts/jvc-smileys.user.js');

beforeEach(() => {
  // Simuler un DOM de base avant chaque test
  document.body.innerHTML = `
    <img src="https://image.jeuxvideo.com/smileys_img/39.gif" alt=":rire:" data-code=":rire:" title=":rire:" width="16" height="16">
  `;

  // Mock de la fonction fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ /* données simulées si nécessaire */ })
    })
  );
});

describe('restaurerSmileys', () => {
  it('remplace l\'image avec l\'URL du smiley animé', () => {
    restaurerSmileys(); // Appeler la fonction qui modifie le DOM

    // Vérifier si l'image a été correctement modifiée
    const img = document.querySelector('img[data-code=":rire:"]');
    expect(img.src).toContain('https://reborn12345.github.io/jvc-smileys/smileys/39.gif');
    
    // Vérifier si fetch a été appelé correctement
    expect(fetch).toHaveBeenCalledWith('https://reborn12345.github.io/jvc-smileys/smileys/39.gif');
  });
});
