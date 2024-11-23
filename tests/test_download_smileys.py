from download_smileys import SmileyDownloader
from pathlib import Path
import shutil # for cleanup

def test_smiley_download():
    url = "https://jvflux.fr/JVFlux:Liste_des_smileys"
    test_dir = Path("test_smileys")  # Test directory
    downloader = SmileyDownloader(url, download_dir=test_dir)

    try:
      downloader.download_smileys()
      # Assertions: Check if files exist, are the correct size, etc.
      assert test_dir.exists()
      assert any(test_dir.iterdir())  # Check if the directory is not empty

    finally:
      # Cleanup: Remove the test directory after the test
      if test_dir.exists():
        shutil.rmtree(test_dir)
