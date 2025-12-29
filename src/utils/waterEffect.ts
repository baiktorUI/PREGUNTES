export const createWaterEffect = () => {
  const container = document.createElement('div');
  container.className = 'water-effect';
  document.body.appendChild(container);

  // Splash de fondo
  const splash = document.createElement('div');
  splash.className = 'water-splash';
  container.appendChild(splash);

  // Crear múltiples gotas de agua (más que antes)
  const numDrops = 80;
  
  for (let i = 0; i < numDrops; i++) {
    setTimeout(() => {
      const drop = document.createElement('div');
      drop.className = 'water-drop';
      
      // Posición aleatoria horizontal
      const left = Math.random() * 100;
      drop.style.left = `${left}%`;
      
      // Posición inicial vertical aleatoria
      drop.style.top = `${-20 - Math.random() * 50}px`;
      
      // Tamaño aleatorio
      const size = 30 + Math.random() * 120;
      drop.style.width = `${size}px`;
      drop.style.height = `${size}px`;
      
      // Delay aleatorio para efecto escalonado
      drop.style.animationDelay = `${Math.random() * 0.3}s`;
      
      container.appendChild(drop);
      
      // Crear ondas al impactar
      if (Math.random() > 0.6) {
        setTimeout(() => {
          createRipple(container, left);
        }, 800 + Math.random() * 500);
      }
      
      // Eliminar la gota después de la animación
      setTimeout(() => {
        drop.remove();
      }, 2000);
    }, i * 20); // Crear gotas escalonadas más rápido
  }

  // Eliminar el contenedor después de que todo termine
  setTimeout(() => {
    container.remove();
  }, numDrops * 20 + 2000);
};

const createRipple = (container: HTMLElement, leftPercent: number) => {
  const ripple = document.createElement('div');
  ripple.className = 'water-ripple';
  ripple.style.left = `${leftPercent}%`;
  ripple.style.bottom = '0';
  ripple.style.transform = 'translate(-50%, 50%)';
  
  container.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 1500);
};
