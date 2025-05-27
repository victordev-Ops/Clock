const tickSound = document.getElementById('tick-sound');

// Enable audio after user interaction
document.body.addEventListener('click', () => {
  tickSound.play().catch(() => {});
}, { once: true });

function updateClock() {
  const now = new Date();

  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6;
  const minuteDeg = minute * 6 + second * 0.1;
  const hourDeg = ((hour % 12) / 12) * 360 + (minute / 60) * 30;

  document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  // Play ticking sound
  tickSound.currentTime = 0;
  tickSound.play().catch(() => {});
}

setInterval(updateClock, 1000);
updateClock();
