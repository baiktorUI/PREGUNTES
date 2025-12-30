export const createWaterEffect = () => {
  const container = document.createElement('div');
  container.className = 'water-effect';
  document.body.appendChild(container);

  // EFECTO 1: Flash blanco inicial (impacto)
  const flash = document.createElement('div');
  flash.className = 'water-flash';
  container.appendChild(flash);

  // EFECTO 2: Ondas de impacto desde el centro
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const ripple = document.createElement('div');
      ripple.className = 'water-impact-ripple';
      ripple.style.animationDelay = `${i * 0.1}s`;
      container.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 2000);
    }, i * 100);
  }

  // EFECTO 3: Salpicaduras grandes (explosion central)
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const splash = document.createElement('div');
      splash.className = 'water-splash-particle';
      
      // Posición central con variación
      const angle = (Math.PI * 2 * i) / 30;
      const distance = 100 + Math.random() * 200;
      const startX = 50 + Math.cos(angle) * 10;
      const startY = 50 + Math.sin(angle) * 10;
      
      splash.style.left = `${startX}%`;
      splash.style.top = `${startY}%`;
      
      // Dirección de explosión
      const endX = 50 + Math.cos(angle) * distance;
      const endY = 50 + Math.sin(angle) * distance;
      splash.style.setProperty('--end-x', `${endX}%`);
      splash.style.setProperty('--end-y', `${endY}%`);
      
      // Tamaño variable
      const size = 30 + Math.random() * 80;
      splash.style.width = `${size}px`;
      splash.style.height = `${size}px`;
      
      container.appendChild(splash);
      
      setTimeout(() => splash.remove(), 1500);
    }, i * 15);
  }

  // EFECTO 4: Gotas que caen por la pantalla
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const drop = document.createElement('div');
      drop.className = 'water-drip';
      
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.top = `${Math.random() * 30}%`;
      
      const size = 5 + Math.random() * 15;
      drop.style.width = `${size}px`;
      drop.style.height = `${size * 2}px`;
      
      container.appendChild(drop);
      
      setTimeout(() => drop.remove(), 2500);
    }, 300 + i * 20);
  }

  // EFECTO 5: Velo de agua que cubre la pantalla
  const veil = document.createElement('div');
  veil.className = 'water-veil';
  container.appendChild(veil);

  // Limpiar todo
  setTimeout(() => {
    container.remove();
  }, 3000);
};
