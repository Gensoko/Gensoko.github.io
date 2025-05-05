const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const souls = [];
const totalSouls = 200;

for (let i = 0; i < totalSouls; i++) {
	souls.push({
		x: Math.random() * canvas.width, // Random horizontal position
		y: Math.random() * canvas.height, // Random vertical position
		radius: Math.random() * 3 + 2, // Random size
		speed: Math.random() * 2 + 1, // Random falling speed
		drift: Math.random() * 1 - 0.5 // Slight horizontal drift
	});
}

function drawSoul(soul) {
	ctx.beginPath();
	ctx.arc(soul.x, soul.y, soul.radius, 0, Math.PI * 2);
	ctx.fillStyle = "#750800";
	ctx.fill();
	ctx.closePath();
}

function updateSoul(soul) {
	soul.y += soul.speed;
	soul.x += soul.drift;

	if (soul.y > canvas.height) {
		soul.y = -soul.radius;
		soul.x = Math.random() * canvas.width;
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	souls.forEach((soul) => {
		updateSoul(soul);
		drawSoul(soul);
	});

	requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

animate();