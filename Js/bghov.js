function addHoverEffect(selector, imageUrl) {
  const link = document.querySelector(selector);
  const backgroundOverlay = document.createElement('div');
  backgroundOverlay.style.position = 'fixed';
  backgroundOverlay.style.top = '0';
  backgroundOverlay.style.left = '0';
  backgroundOverlay.style.width = '100%';
  backgroundOverlay.style.height = '100%';
  backgroundOverlay.style.background =
    `linear-gradient(to right, rgba(255, 255, 255, 0) 5%, rgb(244, 243, 238) 25%, rgb(244, 243, 238) 75%, rgba(255, 255, 255, 0) 95%), url('${imageUrl}')`;
  backgroundOverlay.style.backgroundSize = 'cover';
  backgroundOverlay.style.backgroundPosition = 'center';
  backgroundOverlay.style.opacity = '0'; /* Inițial ascuns */
  backgroundOverlay.style.transition = 'opacity 0.5s ease';
  backgroundOverlay.style.zIndex = '-1'; /* Sub conținut */

  // Adaugă overlay-ul pe pagină
  document.body.appendChild(backgroundOverlay);

  // Adaugă evenimentele de hover
  link.addEventListener('mouseover', () => {
    backgroundOverlay.style.opacity = '1'; // Afișează fundalul
  });

  link.addEventListener('mouseout', () => {
    backgroundOverlay.style.opacity = '0'; // Ascunde fundalul
  });
}

// Adaugă efectele de hover pentru fiecare element
addHoverEffect('.bg-hov-1', 'Imagini/Ocean_floor.jpg');
addHoverEffect('.bg-hov-2', 'Imagini/forest.jpg');
addHoverEffect('.bg-hov-3', 'Imagini/cenozoic.jpg');
