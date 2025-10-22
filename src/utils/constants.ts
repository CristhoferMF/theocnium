export const ROJO = "rojo";
export const AMARILLO = "amarillo";
export const VERDE = "verde";
export const AZUL = "azul";
export const MORADO = "morado";

export const colors = [ROJO, AMARILLO, VERDE, AZUL, MORADO];
export const totalPositions = 40;

export const positions = Array.from({ length: totalPositions }, (_, i) => ({
  position: i,
  color: colors[i % colors.length],
}));

export const RANDOM_SEED = "cranium211025+";
