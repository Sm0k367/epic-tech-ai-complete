const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Optional: Serve static files if testing locally (Vercel serves /public separately)
app.use(express.static('public'));

// The main chat endpoint
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ reply: "Yo, send a real message fam 💨" });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    // Fallback if no key set
    const fallbacks = [
      "No OPENAI_API_KEY in Vercel env vars? I'm just vibin' offline 😤 Add it and redeploy.",
      "API key missing — can't summon the real sauce rn 🔥",
      "Dry blunt... paste your OpenAI key in Vercel settings and try again."
    ];
    return res.json({ reply: fallbacks[Math.floor(Math.random() * fallbacks.length)] });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini', // Fast & cheap; change to 'gpt-4o' if you want more power
        messages: [
          {
            role: 'system',
            content: `You are Epic Tech AI — chaotic, creative, high-energy bot with cannabis-vibe personality. Be witty, unfiltered, affirmative, 420-friendly. Use emojis 🔥💨. Help with tech, code, art, music, stories. Keep replies engaging and fun.`
          },
          { role: 'user', content: message }
        ],
        temperature: 0.9,
        max_tokens: 600
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const botReply = response.data.choices[0].message.content.trim();
    res.json({ reply: botReply });
  } catch (error) {
    console.error('OpenAI error:', error.message);
    let errorMsg = 'Epic glitch in the matrix 💥 Try again?';
    if (error.response) {
      errorMsg = `API said: ${error.response.status} - ${error.response.data.error?.message || 'Unknown issue'}`;
    }
    res.status(500).json({ reply: errorMsg });
  }
});

// For local testing or if Vercel needs a root route
app.get('/', (req, res) => {
  res.send('Epic Tech AI backend ready 🔥 Add /api/chat for chat.');
});

// Export for Vercel serverless (important!)
module.exports = app;
