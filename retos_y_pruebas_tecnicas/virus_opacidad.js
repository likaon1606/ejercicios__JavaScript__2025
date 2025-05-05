const dueDate = new Date('2024-12-05'); // Fecha límite de pago
const deadLine = 60; // Días totales del periodo

const daysPassed = Math.floor(
  (new Date() - dueDate) / (1000 * 60 * 60 * 24) // Corregí el divisor a 1000
);

if (daysPassed > 0) {
  const daysLate = deadLine - daysPassed;
  let opacity = daysLate / deadLine;

  // Asegúrate de que la opacidad esté dentro del rango [0, 1]
  opacity = Math.min(opacity, 1);
  opacity = Math.max(opacity, 0);

  // Aplica la opacidad al cuerpo del documento
  document.body.style.opacity = opacity;

  console.log(`Días pasados: ${daysPassed}, Opacidad: ${opacity}`);
}
