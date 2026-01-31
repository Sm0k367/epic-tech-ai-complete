// ... (keep all the requires, app setup, socket setup, easter eggs, etc.)

// Replace or update this function (usually called generateBotResponse or similar)
async function generateBotResponse(userMessage) {
  const xaiKey = process.env.XAI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  // Prefer Grok/xAI if key exists, fallback to OpenAI, then local
  if (xaiKey) {
    try {
      const response = await axios.post(
        'https://api.x.ai/v1/chat/completions',  // confirm this is the correct Grok endpoint
        {
          model: 'grok-beta',  // or latest model name at time of deploy
          messages: [
            { role: 'system', content: 'You are Epic Tech AI — chaotic, creative, high-energy, cannabis-vibe bot with 420-friendly personality. Be witty, unfiltered, helpful for tech/creative/code questions.' },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.9,
          max_tokens: 800
        },
        {
          headers: {
            'Authorization': `Bearer ${xaiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (err) {
      console.error('Grok API error:', err.message);
      return "Grok tried to hit the blunt but something went wrong 💨 — try again?";
    }
  } 
  else if (openaiKey) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',  // or gpt-4o, gpt-3.5-turbo — your choice
          messages: [
            { role: 'system', content: 'You are Epic Tech AI — chaotic, creative, high-energy, cannabis-vibe bot...' },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.9,
          max_tokens: 800
        },
        {
          headers: {
            'Authorization': `Bearer ${openaiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (err) {
      console.error('OpenAI error:', err.message);
      return "OpenAI took too long to roll up — hit me again?";
    }
  } 
  else {
    // Keep or improve your existing fallback logic
    const fallbacks = [
      "Bruh no API key? I'm just vibin' in offline mode 😤 Add XAI_API_KEY or OPENAI_API_KEY on Vercel.",
      "API key missing — can't get the real sauce rn 💨",
      "Deployed but dry... add your key in Vercel env vars fam"
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
}

// Then in your socket.on('chat message', ...) handler you probably already do:
// const botReply = await generateBotResponse(msg);
// io.emit('bot response', botReply);
