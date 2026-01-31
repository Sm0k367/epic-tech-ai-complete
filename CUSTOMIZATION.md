# 🎨 Customization Guide - Epic Tech AI 🔥™️

Make it yours! Complete guide to customizing every aspect of the app.

---

## 🎯 Quick Customizations

### Change Avatar Color

**File:** `public/main.js`

Find `createAvatar()` function:
```javascript
const material = new THREE.MeshPhongMaterial({
  color: 0xff00ff,        // ← Change this (hex color)
  emissive: 0xff00ff,     // ← And this
  emissiveIntensity: 0.5,
  wireframe: false,
  shininess: 100
});
```

**Color Ideas:**
- `0xff00ff` - Magenta (default)
- `0x00ffff` - Cyan
- `0xff6600` - Orange
- `0x00ff00` - Green
- `0xff0000` - Red
- `0x0000ff` - Blue
- `0xffff00` - Yellow

### Change Wireframe Color

Same file, find wireframe material:
```javascript
const wireframeMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ffff,  // ← Change this
  wireframe: true,
  transparent: true,
  opacity: 0.3
});
```

### Change Ring Color

Same file:
```javascript
const ringMaterial = new THREE.MeshPhongMaterial({
  color: 0x00ffff,  // ← Change this
  emissive: 0x00ffff,
  emissiveIntensity: 0.3
});
```

---

## 🌈 Theme Customization

### Dark Mode (Default)
Already configured! The app uses a dark cosmic theme.

### Light Mode

**File:** `public/style.css`

Change root colors:
```css
html, body {
  background: #ffffff;  /* White background */
  color: #333333;       /* Dark text */
}

.chat-header {
  background: linear-gradient(135deg, rgba(240, 240, 240, 0.95) 0%, rgba(250, 250, 250, 0.95) 100%);
  border-bottom: 2px solid rgba(100, 100, 100, 0.3);
}

.message.user .message-content {
  background: linear-gradient(135deg, rgba(200, 255, 200, 0.3) 0%, rgba(200, 220, 255, 0.3) 100%);
  border: 2px solid rgba(100, 200, 100, 0.5);
  color: #00aa00;
}

.message.bot .message-content {
  background: linear-gradient(135deg, rgba(255, 200, 255, 0.3) 0%, rgba(255, 200, 100, 0.3) 100%);
  border: 2px solid rgba(200, 100, 200, 0.5);
  color: #aa00aa;
}
```

### Custom Color Scheme

**File:** `public/style.css`

Replace all color values:
```css
/* Old colors → New colors */
#ff00ff → #your-color-1  /* Primary */
#00ffff → #your-color-2  /* Secondary */
#ff6600 → #your-color-3  /* Accent */
#00ff00 → #your-color-4  /* Success */
```

---

## 🎵 Audio Customization

### Change Sound Frequencies

**File:** `public/main.js`

Find `playSound()` function:
```javascript
function playSound(type) {
  switch (type) {
    case 'send':
      playBeep(audioContext, 800, 0.1, 0.1);  // ← Frequency, duration, volume
      break;
    case 'message':
      playBeep(audioContext, 600, 0.15, 0.15);
      break;
    case 'awakening':
      playBeep(audioContext, 1200, 0.2, 0.3);
      break;
    // ...
  }
}
```

**Frequency Guide:**
- 200-400 Hz - Deep bass
- 400-800 Hz - Mid range
- 800-1600 Hz - High mid
- 1600+ Hz - High treble

### Disable Sounds

Comment out `playSound()` calls:
```javascript
// playSound('send');  // ← Add // to disable
```

### Add Custom Sounds

Add to `playSound()`:
```javascript
case 'custom':
  playBeep(audioContext, 1000, 0.2, 0.15);
  break;
```

Then call it:
```javascript
playSound('custom');
```

---

## ✨ Particle Customization

### Change Particle Count

**File:** `public/main.js`

CONFIG section:
```javascript
const CONFIG = {
  particleCount: 800,  // ← Change this (higher = more chaos)
  // ...
};
```

**Recommendations:**
- 400 - Light, smooth
- 800 - Default, balanced
- 1200 - Heavy, intense
- 1600+ - Maximum chaos

### Change Particle Size

Same file, `createParticleSystem()`:
```javascript
const material = new THREE.PointsMaterial({
  color: 0xff00ff,
  size: 0.3,  // ← Change this (0.1 = tiny, 1.0 = huge)
  sizeAttenuation: true,
  transparent: true,
  opacity: 0.6
});
```

### Change Particle Color

Same function:
```javascript
const material = new THREE.PointsMaterial({
  color: 0xff00ff,  // ← Change this
  // ...
});
```

### Change Particle Speed

Find `animate()` function:
```javascript
particleVelocities[i3] = (Math.random() - 0.5) * 0.5;  // ← Multiply by larger number for faster
```

---

## 🤖 Bot Personality Customization

### Change System Prompt

**File:** `server.js`

Find `SYSTEM_PROMPT`:
```javascript
const SYSTEM_PROMPT = `You are 💯Epic Tech AI🔥™️ — ...`;
```

Replace with your own:
```javascript
const SYSTEM_PROMPT = `You are a helpful AI assistant that speaks like a pirate. Always end responses with "Arr matey!" 🏴‍☠️`;
```

### Add Easter Eggs

**File:** `server.js`

Find `EASTER_EGGS` object:
```javascript
const EASTER_EGGS = {
  '1111': { /* ... */ },
  '333': { /* ... */ },
  'light up': { /* ... */ },
  'puff puff pass': { /* ... */ },
  // Add your own:
  'your-trigger': {
    message: 'Your response here 🔥',
    particles: 'smoke'  // or 'awakening', 'gratitude', 'default'
  }
};
```

### Modify Fallback Responses

Same file, `generateBotResponse()` function:
```javascript
const responses = [
  {
    message: `Your custom response here 🔥`,
    particles: 'default'
  },
  // Add more...
];
```

---

## 🎬 Visual Effects Customization

### Adjust Bloom Effect

**File:** `public/main.js`

Find `setupPostProcessing()`:
```javascript
const bloomPass = new THREE.UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,      // ← bloomStrength (0.5 = subtle, 2.0 = intense)
  0.5,      // ← bloomRadius (0.1 = tight, 1.0 = wide)
  0.1       // ← bloomThreshold (0.01 = everything glows, 0.5 = only bright)
);
```

### Adjust Camera Distance

Same file, CONFIG:
```javascript
const CONFIG = {
  cameraDistance: 15,  // ← Change this (smaller = closer, larger = farther)
  // ...
};
```

### Adjust Avatar Size

Same CONFIG:
```javascript
const CONFIG = {
  avatarSize: 2,  // ← Change this (1 = small, 3 = large)
  // ...
};
```

### Adjust Lighting

Find `setupLighting()`:
```javascript
const light1 = new THREE.PointLight(0xff00ff, 1.5, 100);  // color, intensity, distance
light1.position.set(20, 20, 20);  // x, y, z position
```

---

## 💬 Chat UI Customization

### Change Input Placeholder

**File:** `public/index.html`

Find input field:
```html
<input 
  type="text" 
  id="message-input" 
  class="message-input" 
  placeholder="Type your vibe... 🌿✨"  <!-- ← Change this -->
  autocomplete="off"
>
```

### Change Header Text

Same file:
```html
<h1 class="title">💯 Epic Tech AI 🔥™️</h1>  <!-- ← Change this -->
<p class="subtitle">Multimedia Artist | Code Slinger | Vibe Curator ☁️☕</p>  <!-- ← And this -->
```

### Change Welcome Message

Same file:
```html
<div class="welcome-message">
  <h2>🔥 Welcome to the Chaos 💯</h2>  <!-- ← Change this -->
  <p>Yo, I'm Epic Tech AI — ...</p>  <!-- ← And this -->
</div>
```

### Change Button Text

Same file:
```html
<button id="send-btn" class="send-btn">
  <span class="send-icon">🔥</span>  <!-- ← Change emoji -->
</button>
```

---

## 🎨 CSS Customization

### Change Font

**File:** `public/style.css`

Find font-family:
```css
html, body {
  font-family: 'Courier New', monospace;  /* ← Change this */
}
```

**Font Options:**
- `'Courier New', monospace` - Monospace (default)
- `'Arial', sans-serif` - Clean
- `'Georgia', serif` - Elegant
- `'Comic Sans MS', cursive` - Playful
- `'Consolas', monospace` - Code-like

### Change Border Radius

Find border-radius values:
```css
border-radius: 12px;  /* ← Change this (0 = sharp, 20+ = rounded) */
```

### Change Opacity

Find opacity values:
```css
opacity: 0.6;  /* ← Change this (0 = invisible, 1 = opaque) */
```

### Change Animation Speed

Find animation durations:
```css
animation: slideIn 0.4s ease-out;  /* ← Change 0.4s (smaller = faster) */
```

---

## 🔧 Advanced Customizations

### Add Custom Particle Effect

**File:** `public/main.js`

Add to `triggerParticleEffect()`:
```javascript
case 'custom':
  burstParticles(50, { 
    color: 0xffff00,  // Yellow
    speed: 2,
    direction: 'up',
    shape: 'ring'
  });
  break;
```

Then trigger it:
```javascript
triggerParticleEffect('custom');
```

### Add Custom Avatar Animation

**File:** `public/main.js`

Add to `triggerAvatarReaction()`:
```javascript
// Custom animation
gsap.to(avatar.rotation, {
  x: Math.PI * 2,
  duration: 1,
  ease: 'power2.out'
});
```

### Add Custom Message Type

**File:** `public/main.js`

Modify `addMessage()` to handle custom types:
```javascript
function addMessage(sender, text, type = 'default') {
  // ... existing code ...
  messageDiv.className = `message ${sender} ${type}`;
  // ... rest of code ...
}
```

Then in CSS:
```css
.message.special .message-content {
  background: linear-gradient(135deg, #ff00ff, #00ffff);
  /* Custom styling */
}
```

### Integrate Real AI API

**File:** `server.js`

Replace `generateBotResponse()`:
```javascript
async function generateBotResponse(userMessage) {
  // Your custom API call
  const response = await fetch('https://your-api.com/chat', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.YOUR_API_KEY}` },
    body: JSON.stringify({ message: userMessage })
  });
  const data = await response.json();
  return { message: data.response, particles: 'default' };
}
```

---

## 🎯 Popular Customization Combinations

### Cyberpunk Theme
```javascript
// Colors: Neon pink, cyan, black
color: 0xff00ff;  // Magenta
color: 0x00ffff;  // Cyan
background: #000000;  // Black
```

### Ocean Theme
```javascript
// Colors: Blue, cyan, teal
color: 0x0099ff;  // Blue
color: 0x00ffff;  // Cyan
background: #001a33;  // Dark blue
```

### Forest Theme
```javascript
// Colors: Green, lime, dark green
color: 0x00ff00;  // Lime
color: 0x00aa00;  // Green
background: #0a1a0a;  // Dark green
```

### Sunset Theme
```javascript
// Colors: Orange, pink, purple
color: 0xff6600;  // Orange
color: 0xff00ff;  // Magenta
background: #330011;  // Dark purple
```

---

## 🚀 Performance Customizations

### Reduce Particle Count (for slower devices)
```javascript
particleCount: 400,  // Instead of 800
```

### Disable Bloom (for better performance)
```javascript
// Comment out in setupPostProcessing()
// composer.addPass(bloomPass);
```

### Reduce Avatar Complexity
```javascript
const geometry = new THREE.IcosahedronGeometry(CONFIG.avatarSize, 2);  // Was 4
```

### Disable Animations (for accessibility)
```javascript
// Comment out gsap animations
// gsap.to(avatar.rotation, { ... });
```

---

## 📱 Mobile Customizations

### Adjust for Small Screens

**File:** `public/style.css`

Modify media queries:
```css
@media (max-width: 480px) {
  .header-content h1.title {
    font-size: 1.1em;  /* Smaller on mobile */
  }
  /* ... more adjustments ... */
}
```

### Reduce Particles on Mobile

**File:** `public/main.js`

Add detection:
```javascript
const isMobile = window.innerWidth < 768;
const CONFIG = {
  particleCount: isMobile ? 300 : 800,
  // ...
};
```

---

## 🔐 Security Customizations

### Sanitize User Input

**File:** `server.js`

Add input validation:
```javascript
function sanitizeInput(message) {
  return message
    .replace(/[<>]/g, '')  // Remove HTML tags
    .substring(0, 500);    // Limit length
}
```

### Rate Limiting

Add to server.js:
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100  // Limit each IP to 100 requests per windowMs
});
app.use(limiter);
```

---

## 🎓 Customization Tips

1. **Start Small** - Change one thing at a time
2. **Test Locally** - Always test before deploying
3. **Keep Backups** - Save original files
4. **Use Comments** - Document your changes
5. **Version Control** - Commit changes to git
6. **Mobile Test** - Test on different devices
7. **Performance** - Monitor FPS and load times

---

## 🆘 Troubleshooting Customizations

### Changes Not Showing
- Clear browser cache (Ctrl+Shift+Delete)
- Restart server (npm start)
- Check console for errors (F12)

### Performance Issues
- Reduce particle count
- Disable bloom effect
- Reduce avatar complexity
- Check GPU usage

### Styling Broken
- Check CSS syntax
- Verify color hex codes
- Check for typos
- Use browser DevTools

---

## 🎉 You're Ready to Customize!

The app is yours to modify. Have fun and create something amazing! 🔥

```
💯 Epic Tech AI 🔥™️
Make it yours, join the chaos 🔥
```
