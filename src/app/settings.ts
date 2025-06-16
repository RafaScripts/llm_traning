import { OpenAI, OpenAIEmbedding } from "@llamaindex/openai";
import { Ollama, OllamaEmbedding } from '@llamaindex/ollama';
import { HuggingFaceEmbedding } from '@llamaindex/huggingface';
import { Settings } from "llamaindex";

export function initSettings() {
  Settings.llm = new Ollama({
    model: "llama3.2:latest",
  });
}
