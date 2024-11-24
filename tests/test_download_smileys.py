import shutil  # for cleanup
from pathlib import Path

from src.download_smileys_jvflux import SmileyDownloader as DownloaderJvflux
from src.download_smileys_jvarchive import SmileyDownloader as DownloaderJvarchive


def test_smiley_download_jvflux():
    url = "https://jvflux.fr/JVFlux:Liste_des_smileys"
    test_dir = Path("test_smileys_jvflux")  # Test directory
    downloader = DownloaderJvflux(url, download_dir=test_dir)

    try:
        downloader.download_smileys()
        # Assertions: Check if files exist, are the correct size, etc.
        assert test_dir.exists()
        assert any(test_dir.iterdir())  # Check if the directory is not empty

    finally:
        # Cleanup: Remove the test directory after the test
        if test_dir.exists():
            shutil.rmtree(test_dir)


def test_smiley_download_jvarchive():
    url = "https://jvarchive.com/static/smileys/"
    test_dir = Path("test_smileys_jvarchive")  # Test directory
    downloader = DownloaderJvarchive(url, download_dir=test_dir)

    try:
        downloader.download_all()
        # Assertions: Check if files exist, are the correct size, etc.
        assert test_dir.exists()
        assert any(test_dir.iterdir())  # Check if the directory is not empty

    finally:
        # Cleanup: Remove the test directory after the test
        if test_dir.exists():
            shutil.rmtree(test_dir)
