function popBalloon(message, balloonElement) {
  const popSound = document.getElementById('pop-sound');
  popSound.play(); // Play pop sound

  balloonElement.classList.add('pop-animation');
  setTimeout(() => {
    balloonElement.style.display = 'none'; // Hide balloon after animation
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = `<p>${message}</p>`;
    messageElement.classList.add('show'); // Show message
  }, 500); // Duration of the pop animation
}