import { ROJO, AMARILLO, VERDE, AZUL, MORADO } from "./constants";

export const getColor = (
  color: string,
  { hover = false, border = false, ring = false } = {}
) => {
  switch (color) {
    case ROJO:
      return (
        "bg-red-500" +
        (hover ? " hover:bg-red-600" : "") +
        (border ? " border-red-500" : "") +
        (ring ? " ring-red-500" : "")
      );
    case AMARILLO:
      return (
        "bg-amber-400 text-black" +
        (hover ? " hover:bg-amber-500" : "") +
        (border ? " border-amber-500" : "") +
        (ring ? " ring-amber-500" : "")
      );
    case VERDE:
      return (
        "bg-green-500" +
        (hover ? " hover:bg-green-600" : "") +
        (border ? " border-green-500" : "") +
        (ring ? " ring-green-500" : "")
      );
    case AZUL:
      return (
        "bg-blue-500" +
        (hover ? " hover:bg-blue-600" : "") +
        (border ? " border-blue-500" : "") +
        (ring ? " ring-blue-500" : "")
      );
    case MORADO:
      return (
        "bg-purple-500" +
        (hover ? " hover:bg-purple-600" : "") +
        (border ? " border-purple-500" : "") +
        (ring ? " ring-purple-500" : "")
      );
    default:
      return "bg-gray-500";
  }
};
