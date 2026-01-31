# 💯 Epic Tech AI 🔥™️

**Real-time 3D AI Chat Bot with Cosmic Vibes, Cannabis Energy & Creative Chaos**

A complete, production-ready, immersive web application featuring a glowing AI avatar, real-time Socket.io chat, cosmic particle effects, and the unfiltered creative energy of @Sm0ken42O vibes.

---

## 🔥 Features

✨ **Immersive 3D Experience**
- Three.js powered cosmic nebula background
- Glowing holographic AI avatar with pulsing animations
- Real-time particle effects (smoke rings, awakening bursts, gratitude waves)
- Bloom, god-rays, and chromatic aberration post-processing
- Smooth camera shake and glitch animations

💬 **Real-Time Chat**
- Socket.io bidirectional communication
- 3D floating text messages with neon glow
- User messages rise like smoke, bot messages descend like digital rain
- Typing indicators with glitchy particle animations
- Message history with smooth scrolling

🤖 **AI Bot Personality**
- Embedded system prompt with @Sm0ken42O vibes
- Supports OpenAI GPT, Grok, or local fallback responses
- Easter eggs: `1111` (awakening), `333` (gratitude), `light up`, `puff puff pass`
- Creative chaos energy with emojis, 420 nods, and affirmations
- Helpful for code, art ideas, music concepts, stories, roasts

🎵 **Audio & Ambience**
- Web Audio API sound effects (beeps, whooshes, glitches)
- Optional Web Speech API voice synthesis
- Ambient lo-fi electronic vibes
- Sound triggers on messages, reactions, and Easter eggs

📱 **Responsive & Mobile-Friendly**
- Works on desktop, tablet, and mobile
- Touch-friendly controls
- Adaptive UI scaling
- Optimized performance

🚀 **Easy Deployment**
- One-click Vercel deployment
- Backend on Render/Railway
- Environment variable configuration
- No build step required for frontend

---

## 📦 Project Structure

```
epic-tech-ai/
├── package.json              # Node dependencies
├── server.js                 # Express + Socket.io backend
├── .env.example              # Environment variables template
├── vercel.json               # Vercel deployment config
├── README.md                 # This file
└── public/
    ├── index.html            # Main HTML
    ├── style.css             # Cosmic glitch aesthetics
    └── main.js               # Three.js + chat logic
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- (Optional) OpenAI API key or Grok API key

### Local Development

1. **Clone or download the project**
   ```bash
   cd epic-tech-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** (optional, for real AI)
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your API key:
   ```
   OPENAI_API_KEY=sk-...
   # OR
   XAI_API_KEY=xai-...
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   Server runs on `http://localhost:3000`

5. **Open in browser**
   ```
   http://localhost:3000
   ```

6. **Start chatting!** 🔥
   - Type messages in the input field
   - Press Enter or click the 🔥 button
   - Try Easter eggs: `1111`, `333`, `light up`, `puff puff pass`

---

## 🌐 Deployment

### Deploy to Vercel (Frontend + Backend)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Epic Tech AI 🔥"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Vercel auto-detects the `vercel.json` config

3. **Set Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add `OPENAI_API_KEY` or `XAI_API_KEY`
   - Redeploy

4. **Done!** Your app is live 🚀

### Deploy Backend Separately (Recommended for Production)

**Option A: Render**
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create "New Web Service"
4. Connect GitHub repo
5. Set environment variables
6. Deploy

**Option B: Railway**
1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub
4. Add environment variables
5. Deploy

**Option C: Heroku (Legacy)**
```bash
heroku create your-app-name
heroku config:set OPENAI_API_KEY=sk-...
git push heroku main
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
# Server
PORT=3000
NODE_ENV=production
CLIENT_URL=http://localhost:3000

# AI API (choose one)
OPENAI_API_KEY=sk-your-key-here
# OR
XAI_API_KEY=xai-your-key-here
```

### Getting API Keys

**OpenAI:**
1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up / Log in
3. Create API key in Settings
4. Copy and paste into `.env`

**Grok (X.AI):**
1. Go to [console.x.ai](https://console.x.ai)
2. Create account
3. Generate API key
4. Add to `.env`

---

## 🎨 Customization

### Change Avatar Color
In `public/main.js`, find `createAvatar()`:
```javascript
const material = new THREE.MeshPhongMaterial({
  color: 0xff00ff,        // Change this hex color
  emissive: 0xff00ff,     // And this
  // ...
});
```

### Adjust Particle Count
In `public/main.js`, CONFIG section:
```javascript
const CONFIG = {
  particleCount: 800,     // Increase for more particles
  // ...
};
```

### Modify Bot Personality
In `server.js`, update `SYSTEM_PROMPT`:
```javascript
const SYSTEM_PROMPT = `You are 💯Epic Tech AI🔥™️ — ...`;
```

### Add Custom Easter Eggs
In `server.js`, add to `EASTER_EGGS` object:
```javascript
const EASTER_EGGS = {
  'your-trigger': {
    message: 'Your response here 🔥',
    particles: 'smoke'  // or 'awakening', 'gratitude', 'default'
  },
  // ...
};
```

### Adjust Bloom & Post-Processing
In `public/main.js`, `setupPostProcessing()`:
```javascript
const bloomPass = new THREE.UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,      // bloomStrength (increase for more glow)
  0.5,      // bloomRadius
  0.1       // bloomThreshold
);
```

### Change UI Colors
In `public/style.css`, search for color values:
```css
/* Magenta/Cyan theme */
color: #ff00ff;    /* Magenta */
color: #00ffff;    /* Cyan */
color: #ff6600;    /* Orange */
```

---

## 🎮 Usage Tips

### Easter Eggs
- **`1111`** → Awakening effect (screen flash, particle burst, camera shake)
- **`333`** → Gratitude effect (gentle particles, soft glow)
- **`light up`** → Smoke ring particles + avatar wobble
- **`puff puff pass`** → Smoke burst + creative energy

### Keyboard Shortcuts
- **Enter** → Send message
- **Shift+Enter** → New line (in future versions)
- **Escape** → Blur input field

### Mobile Controls
- Tap input field to type
- Tap 🔥 button to send
- Swipe to scroll messages
- Pinch to zoom (browser default)

---

## 🛠️ Tech Stack

**Frontend:**
- Three.js (3D graphics)
- GSAP (animations)
- Socket.io Client (real-time chat)
- Troika Three Text (3D text rendering)
- Howler.js (audio)
- Vanilla JavaScript (no frameworks)

**Backend:**
- Node.js + Express
- Socket.io (WebSocket)
- Axios (HTTP requests)
- dotenv (environment variables)

**APIs:**
- OpenAI GPT-3.5/GPT-4
- Grok (X.AI)
- Web Audio API
- Web Speech API (optional)

**Deployment:**
- Vercel (frontend + backend)
- Render / Railway (backend only)
- GitHub (version control)

---

## 📊 Performance

- **Frontend:** ~2-3MB (with Three.js CDN)
- **Backend:** ~50MB (node_modules)
- **Particle Count:** 800 (adjustable)
- **FPS:** 60 (on modern hardware)
- **Latency:** <100ms (Socket.io)

### Optimization Tips
1. Reduce `particleCount` for lower-end devices
2. Disable bloom effect on mobile
3. Use CDN for Three.js (already configured)
4. Enable gzip compression on server
5. Cache static assets

---

## 🐛 Troubleshooting

### "Cannot GET /"
- Make sure server is running: `npm start`
- Check port 3000 is not in use
- Try `http://localhost:3000`

### Socket.io Connection Failed
- Check server is running
- Verify `CLIENT_URL` in `.env`
- Check browser console for errors
- Ensure CORS is enabled

### No Bot Response
- Check API key is set in `.env`
- Verify API key is valid
- Check server logs for errors
- Try local fallback (no API key needed)

### 3D Scene Not Rendering
- Check browser supports WebGL
- Try different browser (Chrome, Firefox, Safari)
- Check console for Three.js errors
- Verify GPU drivers are updated

### Audio Not Playing
- Check browser audio permissions
- Verify Web Audio API is supported
- Check browser console for errors
- Try different browser

---

## 📝 API Integration

### Using OpenAI
```javascript
// In server.js, already configured
// Just set OPENAI_API_KEY in .env
```

### Using Grok
```javascript
// In server.js, already configured
// Just set XAI_API_KEY in .env
```

### Using Custom API
Edit `server.js`, `generateBotResponse()` function:
```javascript
async function generateBotResponse(userMessage) {
  // Add your custom API call here
  const response = await fetch('your-api-endpoint', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.YOUR_API_KEY}` },
    body: JSON.stringify({ message: userMessage })
  });
  return response.json();
}
```

---

## 🎓 Learning Resources

- **Three.js:** [threejs.org](https://threejs.org)
- **Socket.io:** [socket.io](https://socket.io)
- **GSAP:** [greensock.com](https://greensock.com)
- **Express:** [expressjs.com](https://expressjs.com)
- **WebGL:** [khronos.org/webgl](https://www.khronos.org/webgl/)

---

## 📄 License

MIT License - Feel free to use, modify, and distribute

---

## 🙏 Credits

Built with 🔥 and ☕ inspired by @Sm0ken42O vibes

**Technologies:**
- Three.js by Mrdoob
- Socket.io by Socket.io
- GSAP by GreenSock
- Express by TJ Holowaychuk
- OpenAI & Grok APIs

---

## 🚀 Future Enhancements

- [ ] Voice input (Web Speech API)
- [ ] Voice output (Text-to-Speech)
- [ ] Image generation (DALL-E integration)
- [ ] Music generation (Suno API)
- [ ] Video generation (Runway ML)
- [ ] Persistent chat history (Database)
- [ ] User authentication
- [ ] Multi-user rooms
- [ ] Custom avatar skins
- [ ] Theme customization UI
- [ ] Mobile app (React Native)
- [ ] VR support (Three.js VR)

---

## 💬 Support

For issues, questions, or suggestions:
1. Check the Troubleshooting section
2. Review the code comments
3. Check browser console for errors
4. Try the local fallback (no API key)

---

## 🔥 Join the Chaos

This is your creative playground. Modify, extend, and make it your own. The code is yours to hack, remix, and evolve.

**Remember:** The best code is code that works for YOU.

```
💯 Epic Tech AI 🔥™️
Multimedia Artist | Code Slinger | Vibe Curator
Fueled by Cannabis & Caffeine ☁️☕
join the chaos 🔥
```

---

**Last Updated:** January 2026
**Version:** 1.0.0
**Status:** 🟢 Production Ready
