// public/main.js

let scene, camera, renderer, stars;

function initThreeJS() {
  const container = document.getElementById('bg-canvas');
  if (!container) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000022);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

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

window.addEventListener('resize', () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(text, isUser = false) {
  const div = document.createElement('div');
  div.classList.add('message', isUser ? 'user-message' : 'bot-message');
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  div.style.opacity = 0;
  setTimeout(() => { div.style.opacity = 1; }, 10);
}

function triggerEasterEgg(text) {
  if (/420|blunt|smoke/i.test(text)) {
    document.body.style.boxShadow = '0 0 100px #00ff00 inset';
    setTimeout(() => { document.body.style.boxShadow = ''; }, 2000);
  }
}

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, true);
  userInput.value = '';

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    if (!res.ok) throw new Error('API fail');

    const { reply } = await res.json();
    addMessage(reply || 'No reply... void vibes 🌌', false);
    triggerEasterEgg(reply);
  } catch (err) {
    addMessage('Connection lost in space 💥 Try again?', false);
  }
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});

window.addEventListener('load', () => {
  initThreeJS();
  addMessage("Yo, what's the move? Tech, code, wild ideas — hit me 🔥💨", false);
});
