export const createWaterEffect = () => {
  const container = document.createElement('div');
  container.className = 'water-effect';
  document.body.appendChild(container);

  // Crear múltiples gotas de agua
  const numDrops = 40;
  
  for (let i = 0; i < numDrops; i++) {
    setTimeout(() => {
      const drop = document.createElement('div');
      drop.className = 'water-drop';
      
      // Posición aleatoria horizontal
      const left = Math.random() * 100;
      drop.style.left = `${left}%`;
      
      // Tamaño aleatorio
      const size = 50 + Math.random() * 100;
      drop.style.width = `${size}px`;
      drop.style.height = `${size}px`;
      
      // Delay aleatorio para efecto escalonado
      drop.style.animationDelay = `${Math.random() * 0.5}s`;
      
      container.appendChild(drop);
      
      // Eliminar la gota después de la animación
      setTimeout(() => {
        drop.remove();
      }, 1500);
    }, i * 30); // Crear gotas escalonadas
  }

  // Eliminar el contenedor después de que todas las gotas hayan caído
  setTimeout(() => {
    container.remove();
  }, numDrops * 30 + 1500);
};
