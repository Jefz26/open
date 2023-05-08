import openai from "openai";
import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const openaiApi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on("line", async (input) => {
  const response = await openaiApi.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: input }],
  });
  console.log(response.data.choices[0].message.content);
});