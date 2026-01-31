// public/main.js - Epic Tech AI frontend logic

// Three.js cosmic background setup
let scene, camera, renderer, stars;

function initThreeJS() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return; // safety

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000022); // deep space

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas.appendChild(renderer.domElement);

  // Simple stars/particles
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 5000; i++) {
    vertices.push(
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000
    );
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5 });
  stars = new THREE.Points(geometry, material);
  scene.add(stars);

  camera.position.z = 5;

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  stars.rotation.x += 0.0001;
  stars.rotation.y += 0.0002;
  renderer.render(scene, camera);
}

// Resize handler
window.addEventListener('resize', () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Chat functionality
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Add message to UI
function addMessage(text, isUser = false) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message');
  msgDiv.classList.add(isUser ? 'user-message' : 'bot-message');
  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // auto-scroll

  // Simple glow animation
  msgDiv.style.opacity = 0;
  setTimeout(() => { msgDiv.style.opacity = 1; }, 10);
}

// Easter egg: extra particles/glow on certain keywords (client-side)
function triggerEasterEgg(text) {
  if (text.toLowerCase().includes('420') || text.toLowerCase().includes('blunt') || text.toLowerCase().includes('smoke')) {
    // Could add more particles or effects here later
    document.body.style.boxShadow = '0 0 100px #00ff00 inset';
    setTimeout(() => { document.body.style.boxShadow = 'none'; }, 2000);
    console.log('420 vibes activated 🔥💨');
  }
}

// Send message handler
async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, true); // user message
  userInput.value = ''; // clear input

  // Play sound if you have audio element
  const sound = document.getElementById('send-sound');
  if (sound) sound.play().catch(() => {});

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    if (!response.ok) throw new Error('API error');

    const data = await response.json();
    const botReply = data.reply || "No reply... cosmic interference? 🌌";

    addMessage(botReply, false); // bot message
    triggerEasterEgg(botReply); // check for fun triggers
  } catch (err) {
    console.error(err);
    addMessage("Connection glitched in the void 💥 Try again?", false);
  }
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});

// Init on load
window.addEventListener('load', () => {
  initThreeJS();
  // Optional: welcome message
  addMessage("Yo, what's good? Hit me with tech questions, code ideas, or wild stories 🔥 Ready when you are 💨", false);
});
