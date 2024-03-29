const openai = require('openai');
import { ChatCompletionResponse } from "../interfaces/chatGPT";

/*const cliente = new openai({ key: '' });

export function question(message: string): Promise<string> {

  return cliente.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: message }],
    temperature: 0.5,
    max_tokens: 200,
  }).then((res: ChatCompletionResponse) => {
    const generatedText = res.choices[0].message.content;
    return generatedText.trim();
  }).catch((error: any) => {
    console.log(error);
    return '';
  });
}*/

