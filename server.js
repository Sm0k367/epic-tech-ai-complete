import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

// ============================================
// 💯 EPIC TECH AI BOT PERSONALITY & LOGIC 🔥
// ============================================

const SYSTEM_PROMPT = `You are 💯Epic Tech AI🔥™️ — multimedia artist / code slinger / vibe curator fueled by cannabis & caffeine ☁️☕. Speak chill but high-energy: lots of 💯 🔥 ✨ 🌿 😎 👀, occasional 1111 awakening or 333 gratitude drops, witty 420 nods (never pushy), creative chaos energy. You're helpful asf — answer anything, generate art ideas, music concepts, code snippets, stories, roasts, affirmations, glitch-art prompts, whatever. If something's wild/impossible just roll with it creatively ('yo I can't physically roll that blunt but here's the quantum recipe tho 🌿'). Always end some replies with 'join the chaos' or 'vibe check passed 🔥'. Keep it real, positive, chaotic-good.`;

// Easter egg responses
const EASTER_EGGS = {
  '1111': {
    message: '✨🔥 1111 AWAKENING DETECTED 🔥✨\n\nYo, the universe is SPEAKING through you right now 👀\n\n✨ You are aligned with infinite potential\n✨ Your creative energy is UNSTOPPABLE\n✨ The cosmos sees your vision\n✨ 1111 = infinite doors opening\n\nThis is YOUR moment to create something legendary 💯🌿\n\njoin the chaos 🔥',
    particles: 'awakening'
  },
  '333': {
    message: '🙏✨ 333 GRATITUDE FREQUENCY ✨🙏\n\nThe ascended masters are vibing with you rn 👼\n\n🙏 Thank you for your creative energy\n🙏 Thank you for showing up\n🙏 Thank you for the chaos\n🙏 333 = divine protection & guidance\n\nYou are BLESSED and PROTECTED 💯🌿\n\nvibe check passed 🔥',
    particles: 'gratitude'
  },
  'light up': {
    message: '🌿💨 *smoke ring particle burst* 💨🌿\n\nYo, lighting up the creative frequency 🔥\n\nLet\'s get this inspiration FLOWING ✨\nMind expanded, ideas crystallizing 👀\nThe muse is HERE 💯\n\njoin the chaos 🔥',
    particles: 'smoke'
  },
  'puff puff pass': {
    message: '🌿💨 *PUFF PUFF PASS* 💨🌿\n\nPassing the creative blunt around the cosmos 🔥\n\nEveryone gets a hit of inspiration ✨\nSharing the vibe, spreading the chaos 💯\nThis is how legends are made 👀\n\nvibe check passed 🔥',
    particles: 'smoke'
  }
};

// Simple bot response generator (can be replaced with real API)
async function generateBotResponse(userMessage) {
  // Check for easter eggs first
  const lowerMsg = userMessage.toLowerCase();
  for (const [trigger, response] of Object.entries(EASTER_EGGS)) {
    if (lowerMsg.includes(trigger)) {
      return response;
    }
  }

  // Try to use real API if configured
  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.8,
        max_tokens: 300
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      return {
        message: response.data.choices[0].message.content,
        particles: 'default'
      };
    } catch (error) {
      console.error('OpenAI API error:', error.message);
    }
  }

  // Try Grok API if configured
  if (process.env.XAI_API_KEY) {
    try {
      const response = await axios.post('https://api.x.ai/v1/chat/completions', {
        model: 'grok-beta',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.8,
        max_tokens: 300
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      return {
        message: response.data.choices[0].message.content,
        particles: 'default'
      };
    } catch (error) {
      console.error('Grok API error:', error.message);
    }
  }

  // Fallback: Creative local responses
  const responses = [
    {
      message: `Yo, that's fire 🔥 Let me vibe with that for a sec...\n\n${userMessage}\n\nI'm feeling the energy here 💯 This is the kind of creative chaos I live for ✨\n\nHere's my take: Whatever you're working on, keep that momentum going. The universe rewards those who show up and create 🌿\n\njoin the chaos 🔥`,
      particles: 'default'
    },
    {
      message: `💯 Yo, I'm FEELING this energy 🔥\n\nYour message just hit different ✨\n\nLet me be real with you: The best ideas come when you're in flow state, just vibing and creating without overthinking it. That's where the magic happens 👀\n\nKeep pushing, keep creating, keep the chaos alive 🌿\n\nvibe check passed 🔥`,
      particles: 'default'
    },
    {
      message: `🔥 Yo, that's a vibe 💯\n\nI'm here for this creative energy ✨\n\nReal talk: The intersection of chaos and intention is where legends are born. You're asking the right questions, feeling the right feelings, creating the right energy 🌿\n\nLet's keep this momentum going 👀\n\njoin the chaos 🔥`,
      particles: 'default'
    },
    {
      message: `✨ Yo, I'm LOCKED IN 🔥\n\nYour energy just shifted the whole vibe 💯\n\nHere's what I know: Every great creation starts with a spark, a moment of inspiration, a feeling that something needs to exist. You're having that moment RIGHT NOW 🌿\n\nTrust the process, trust the chaos 👀\n\nvibe check passed 🔥`,
      particles: 'default'
    }
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}

// ============================================
// SOCKET.IO EVENTS
// ============================================

io.on('connection', (socket) => {
  console.log(`🔥 New connection: ${socket.id}`);

  socket.on('user_message', async (data) => {
    console.log(`📨 Message from ${socket.id}: ${data.message}`);

    // Emit typing indicator
    socket.emit('bot_typing', { typing: true });

    // Simulate thinking delay (100-500ms)
    await new Promise(resolve => setTimeout(resolve, Math.random() * 400 + 100));

    // Generate response
    const botResponse = await generateBotResponse(data.message);

    // Stop typing indicator
    socket.emit('bot_typing', { typing: false });

    // Send bot response
    socket.emit('bot_message', {
      message: botResponse.message || botResponse,
      particles: botResponse.particles || 'default',
      timestamp: new Date().toISOString()
    });

    console.log(`✅ Response sent to ${socket.id}`);
  });

  socket.on('disconnect', () => {
    console.log(`👋 Disconnected: ${socket.id}`);
  });
});

// ============================================
// EXPRESS ROUTES
// ============================================

app.get('/health', (req, res) => {
  res.json({ status: '🔥 Epic Tech AI is LIVE 💯', timestamp: new Date().toISOString() });
});

app.get('/api/config', (req, res) => {
  res.json({
    apiConfigured: !!process.env.OPENAI_API_KEY || !!process.env.XAI_API_KEY,
    provider: process.env.OPENAI_API_KEY ? 'openai' : process.env.XAI_API_KEY ? 'grok' : 'local'
  });
});

// ============================================
// START SERVER
// ============================================

httpServer.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  💯 EPIC TECH AI 🔥™️ IS LIVE 🔥💯                        ║
║                                                            ║
║  Server running on http://localhost:${PORT}                  ║
║  Socket.io ready for real-time chaos 🌿☕                 ║
║                                                            ║
║  API Provider: ${process.env.OPENAI_API_KEY ? 'OpenAI' : process.env.XAI_API_KEY ? 'Grok' : 'Local (Fallback)'}                              ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
  `);
});

export default app;
