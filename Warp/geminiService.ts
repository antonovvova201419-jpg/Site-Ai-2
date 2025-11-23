import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ExtensionData } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    extension: { type: Type.STRING, description: "The file extension (e.g., .jpg)" },
    name: { type: Type.STRING, description: "Full name of the format" },
    category: { type: Type.STRING, description: "General category (Image, Audio, etc.)" },
    description: { type: Type.STRING, description: "Detailed description of what the file is" },
    usage: { type: Type.STRING, description: "Common use cases" },
    osSupport: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "List of supported Operating Systems (Windows, macOS, Linux, Android, iOS)" 
    },
    pros: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "Advantages of this format"
    },
    cons: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "Disadvantages of this format"
    },
    technicalDetails: { type: Type.STRING, description: "Technical specifications (compression, bits, etc.)" },
    technologies: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "Related technologies or standards" 
    }
  },
  required: ["extension", "name", "category", "description", "usage", "osSupport", "pros", "cons", "technicalDetails", "technologies"],
};

export const fetchExtensionInfo = async (extension: string): Promise<ExtensionData> => {
  try {
    const modelId = "gemini-2.5-flash";
    const prompt = `
      Предоставь подробную техническую информацию о расширении файла "${extension}".
      Опиши его назначение, совместимость с ОС (Windows, macOS, Linux, Android, iOS), 
      используемые технологии, преимущества и недостатки.
      Ответ должен быть на русском языке.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        systemInstruction: "Ты — эксперт по компьютерным наукам и файловым системам. Твоя задача — предоставлять точную, глубокую и структурированную информацию о форматах файлов на русском языке."
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No data returned from Gemini");
    }

    return JSON.parse(text) as ExtensionData;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};