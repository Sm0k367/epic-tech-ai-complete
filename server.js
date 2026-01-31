// Example of what it probably has now
async function generateBotResponse(message) {
  const openaiKey = process.env.OPENAI_API_KEY;
  const xaiKey = process.env.XAI_API_KEY;

  if (openaiKey) {
    // axios call to OpenAI
    // ...
  } else if (xaiKey) {
    // axios call to xAI/Grok endpoint
    // ...
  } else {
    // fallback responses
    return "Yo, I'm in chill mode — no API key detected 😤 Add OPENAI_API_KEY or XAI_API_KEY to get the real smoke.";
  }
}
