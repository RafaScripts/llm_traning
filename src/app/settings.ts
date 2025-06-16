import { OpenAI, OpenAIEmbedding } from "@llamaindex/openai";
import { Ollama, OllamaEmbedding } from '@llamaindex/ollama';
import { HuggingFaceEmbedding } from '@llamaindex/huggingface';
import { Settings } from "llamaindex";

export function initSettings() {
  Settings.llm = new OpenAI(
    {
      model: 'gpt-4.1-nano'
    }
  );
  Settings.embedModel = new OpenAIEmbedding({
    model: 'text-embedding-3-small'
  });
}
