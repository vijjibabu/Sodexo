from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

PROJECT_ROOT = Path(__file__).resolve().parents[3]


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=str(PROJECT_ROOT / ".env.sodexo"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    database_url: str = "sqlite:///./data/sodexo.db"
    mock_api_base_url: str = "http://127.0.0.1:8200"
    openai_api_key: str | None = None
    openai_model: str = "gpt-4o-mini"


@lru_cache
def get_settings() -> Settings:
    return Settings()
