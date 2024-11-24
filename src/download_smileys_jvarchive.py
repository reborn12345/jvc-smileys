import json
import requests
from pathlib import Path


class SmileyDownloader:
    """Télécharge les smileys de jvarchive.com."""

    def __init__(self, url, output_dir="smileys", mapping_file="smiley_mapping.json"):
        self.output_dir = Path(output_dir)
        self.base_url = url

        self.mapping_file = mapping_file
        self.smiley_map = self.load_mapping()

    def download_all(self):
        """Télécharge tous les smileys."""
        self.output_dir.mkdir(
            parents=True, exist_ok=True
        )  # Création du répertoire AVANT la boucle

        for data_code, file_name in self.smiley_map.items():
            self.download_smiley(data_code, file_name)

        print("Téléchargement terminé.")

    def download_smiley(self, data_code, file_name):
        """Télécharge un smiley spécifique."""
        smiley_url = f"{self.base_url}{data_code}.gif"
        output_path = self.output_dir / f"{file_name}.gif"

        try:
            response = requests.get(smiley_url, stream=True)
            response.raise_for_status()

            with open(output_path, "wb") as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)

            print(f"Téléchargé : {data_code} -> {output_path}")
            return True

        except requests.exceptions.RequestException as e:
            print(f"Erreur pour {data_code} : {e}")
            return False

    def load_mapping(self):
        """Charge le mapping depuis le fichier JSON."""
        try:
            mapping_path = Path(__file__).parent.parent / "data" / self.mapping_file
            with open(mapping_path, "r") as f:
                return json.load(f)
        except FileNotFoundError:
            print(f"Erreur: Fichier de mapping '{mapping_path}' introuvable.")
            return {}  # Retourne un dictionnaire vide si le fichier n'est pas trouvé
        except json.JSONDecodeError:
            print(
                f"Erreur: Le fichier '{self.mapping_file}' n'est pas un fichier JSON valide."
            )
            return {}


if __name__ == "__main__":
    url = "https://jvarchive.com/static/smileys/"
    downloader = SmileyDownloader(url)
    downloader.download_all()
