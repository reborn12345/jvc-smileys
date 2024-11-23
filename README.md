# JVFlux Smileys Downloader

[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]


This project provides a Python script to download smiley GIFs from JVFlux and makes them available for use in userscripts to in order to correct JVC smileys freezing.

<p align="center">
  <img src="smileys/39.gif" alt="Smiley Example 39" width="32" height="32">
  <img src="smileys/35.gif" alt="Smiley Example 35" width="32" height="32">
  <img src="smileys/22.gif" alt="Smiley Example 22" width="32" height="32">
</p>


## Features

* Downloads all available smileys from JVFlux.
* Saves smileys as GIF files in the `/smileys/` directory.
* Hosted on GitHub Pages for easy access ([Your GitHub Pages URL]).  *Replace with your actual URL*
* Planned userscript integration for seamless smiley usage.


## Usage

**1. Downloading the Smileys:**

* **Using the script:**
    * Clone this repository: `git clone https://github.com/your-username/your-repository-name.git`
    * Install the required packages: `pip install -r requirements.txt`
    * Run the script: `python src/download_smileys.py`

The smileys will be downloaded to the `smileys` directory in your project.

**2. Accessing the Smileys (GitHub Pages):**

The smileys are also hosted on GitHub Pages, allowing direct access via URLs like these:
https://github.com/reborn12345/jvc-smileys/blob/main/smileys/1.gif
https://your-username.github.io/your-repository-name/smileys/9.gif
...etc.

## Userscript Integration

Spice up your JVFlux (or other forum) experience with animated smileys!  This project includes a userscript that seamlessly integrates the downloaded smileys, replacing the static defaults with dynamic animated GIFs.

**How it Works:**

The userscript cleverly intercepts the loading of default smileys and matches their `data-code` attributes to the corresponding animated GIFs hosted on GitHub Pages. It then dynamically replaces the image sources, bringing your conversations to life!

**Installation:**

1. **Get a Userscript Manager:**  You'll need a userscript manager to install and run the script. Here are some popular options:

    * **Chrome/Edge:** [Tampermonkey](https://www.tampermonkey.net/)
    * **Firefox:** [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/)
    * **Other Browsers:** Look for a compatible userscript manager in your browser's extension store.

2. **Install the Userscript:**

    Click the "Install" button below (or copy the raw code from [userscript/jvflux-smileys.user.js](userscript/jvflux-smileys.user.js)).  This should automatically open your userscript manager.


    [![Install Userscript](https://img.shields.io/badge/Install%20Userscript-Click%20Here-brightgreen?style=for-the-badge&logo=tampermonkey)](https://update.greasyfork.org/scripts/518633/JVC%20Smiley%20anim%C3%A9s.user.js)


3. **Enable the Script:** Make sure the script is enabled in your userscript manager.  That's it!  Head over to JVFlux (or the target forum) and enjoy the animated smileys!

## Contributing

Contributions are welcome! 


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
