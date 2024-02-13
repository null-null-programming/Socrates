require('dotenv').config(__dirname + "/.env");
const OpenAI = require('openai');

const scoringInstructions = require('./instructions'); 

class Completions {
  constructor() {
    this.scoringInstructions = [
      { role: "system", content: scoringInstructions }
    ];

    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async getEvalResult(message) {
    const sendDebate = this.scoringInstructions.concat([{ role: "user", content: message }]);
    try {
      const response = await this.client.createChatCompletion({
        model: process.env.MODEL_NAME,
        messages: sendDebate,
        temperature: 0.0,
      });

      const jsonResponse = response.data;
      const gotMessage = jsonResponse.choices[0].message.content;

      if (!gotMessage || typeof gotMessage !== 'string') {
        throw new TypeError("Received message is not a string");
      }

      const evalResult = JSON.parse(gotMessage).eval;

      return evalResult;
    } catch (error) {
      console.error("Error fetching evaluation result:", error);
      throw error;
    }
  }
}

module.exports = Completions;
