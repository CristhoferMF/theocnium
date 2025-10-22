import { useState } from "react";
import type { AnyCard } from "../types/card";
import { AMARILLO, AZUL, ROJO, VERDE } from "../utils/constants";
import { getColor } from "../utils/getColor";
import type { SelectedColor } from "../types/color";

type Props = {
  card: AnyCard | null;
  onClose: () => void;
  color: SelectedColor; // para aplicar el estilo visual
};

export default function CardModal({ card, onClose, color }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!card) return null;

  const colorClasses = {
    [ROJO]: "text-red-500 border-red-400",
    [AMARILLO]: "text-yellow-500 border-yellow-400",
    [VERDE]: "text-green-500 border-green-400",
    [AZUL]: "text-blue-500 border-blue-400",
  };

  const colorHeadings = {
    [ROJO]: "Conocimiento e Historia",
    [AMARILLO]: "La Biblia",
    [VERDE]: "Predicación",
    [AZUL]: "Predicación",
  };

  const isBigCardShown = showAnswer && card.respuesta.length >= 50;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-2xl shadow-2xl w-[90%]  p-6 animate-fadeIn border-t-8 ${
          color === "rojo"
            ? "border-t-red-500"
            : color === "amarillo"
            ? "border-t-yellow-500"
            : ""
        } ${isBigCardShown ? "max-w-xl" : "max-w-md"}`}
      >
        <h2
          className={`text-xl font-bold mb-2 uppercase ${colorClasses[color]}`}
        >
          {colorHeadings[color]}
        </h2>

        {/* Tipo de pregunta */}
        <p className="text-gray-500 mb-5 uppercase">
          <span className="font-semibold">TIPO: {card.tipo}</span>
        </p>

        {/* Pregunta */}
        <p className="text-gray-800 text-lg font-semibold mb-4 min-h-24 whitespace-pre-line">
          {card.pregunta}
        </p>

        {/* Opciones solo si existen */}
        {"opciones" in card && card.opciones && (
          <ul className="space-y-2 mb-4">
            {card.opciones.map((op, i) => (
              <li
                key={i}
                className="border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-100 transition"
              >
                {op}
              </li>
            ))}
          </ul>
        )}

        {/* Respuesta */}
        {showAnswer && (
          <div
            className={`bg-green-50 border border-green-200 text-green-800 font-bold p-3 rounded-xl mb-4 ${
              card.respuesta.length >= 50 ? "text-pretty" : "text-center"
            }`}
          >
            {card.respuesta}
          </div>
        )}

        {/* Botones */}
        <div className="flex flex-col gap-3">
          {!showAnswer && card.respuesta && (
            <button
              onClick={() => setShowAnswer(true)}
              className={`w-full ${getColor(color, {
                hover: true,
              })}  text-white font-extrabold py-3 rounded-xl transition-all shadow-lg text-lg transform hover:scale-[1.02] active:scale-[0.98]`}
            >
              Mostrar respuesta
            </button>
          )}
          <button
            onClick={onClose}
            className={`w-full bg-gray-500 hover:bg-gray-600 text-white font-extrabold py-3 rounded-xl transition-all shadow-lg text-lg transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
