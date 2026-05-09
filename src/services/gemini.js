import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateQuestions = async (jobTitle) => {
  const prompt = `
You are an expert hiring manager.

Generate 3 thoughtful and role-specific interview questions
for a candidate applying for the role: "${jobTitle}"

Requirements:
- Questions should assess strategic thinking, communication, and role competency
- Avoid generic questions
- Return only a markdown bullet list.
- Do not include explanations or assessment labels.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};
