import { OpenAI, OpenAIEmbedding } from "@llamaindex/openai";
import { Ollama, OllamaEmbedding } from '@llamaindex/ollama';
import { Settings } from "llamaindex";

export function initSettings() {
  Settings.llm = new Ollama({
    model: "llama3.2:latest",
  });

  Settings.embedModel = new OllamaEmbedding({
    model: "nomic-embed-text"
  });
}
