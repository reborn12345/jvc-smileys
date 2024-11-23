import requests
from bs4 import BeautifulSoup
from pathlib import Path

class SmileyDownloader:

    def __init__(self, url, download_dir="smileys"):
        self.url = url
        self.download_dir = Path(download_dir)

    def download_smileys(self):
        self.download_dir.mkdir(parents=True, exist_ok=True)

        response = requests.get(self.url)
        soup = BeautifulSoup(response.content, "html.parser")
        images = soup.select("table.wikitable img")
        
        print(f"Starts downloading into {self.download_dir}")
        for image in images:
            self.download_smiley(image)

    def download_smiley(self, image_tag):
        img_url = "https://jvflux.fr" + image_tag["src"]
        img_name = img_url.split("/")[-1]
        img_path = self.download_dir / img_name

        try:
            img_data = requests.get(img_url).content
            with open(img_path, "wb") as handler:
                handler.write(img_data)
            print(f"Téléchargé: {img_name}")
        except Exception as e:
            print(f"Erreur lors du téléchargement de {img_name}: {e}")


if __name__ == "__main__":
    url = "https://jvflux.fr/JVFlux:Liste_des_smileys"  # URL Jvflux contenant la liste de tous les smileys
    downloader = SmileyDownloader(url)
    downloader.download_smileys()