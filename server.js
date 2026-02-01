const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ reply: "Send a real message fam 💨" });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    const fallbacks = [
      "No OPENAI_API_KEY set in Vercel env? Offline mode activated 😤",
      "Missing API key — can't get the real fire rn 🔥",
      "Add your OpenAI key in Vercel settings and redeploy."
    ];
    return res.json({ reply: fallbacks[Math.floor(Math.random() * fallbacks.length)] });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are Epic Tech AI — chaotic, high-energy, creative bot with 420-friendly personality. Be witty, unfiltered, use emojis 🔥💨. Help with tech, code, art, stories.'
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

    const reply = response.data.choices[0].message.content.trim();
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Glitch in the cosmos 💥 Retry?' });
  }
});

module.exports = app;
