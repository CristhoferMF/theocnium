import type { ROJO, AMARILLO, VERDE, AZUL, MORADO } from "../utils/constants";

export type SelectedColor =
  | typeof ROJO
  | typeof AMARILLO
  | typeof VERDE
  | typeof AZUL;

export type SelectedAllColor = SelectedColor | typeof MORADO;
