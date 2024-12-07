import axios from "axios";

const API_URL = "https://libretranslate.com/translate";

export async function translateText(text, targetLanguage) {
  try {
    const response = await axios.post(API_URL, {
      q: text,
      source: "auto", // Detecta o idioma original automaticamente
      target: targetLanguage,
      format: "text",
    });
    return response.data.translatedText;
  } catch (error) {
    console.error("Erro ao traduzir texto:", error);
    return "Erro na tradução";
  }
}
