import Board from "./components/Board";
import random from "random";
import seedrandom from "seedrandom";
import { useState } from "react";
import {
  AMARILLO,
  AZUL,
  colors,
  MORADO,
  positions,
  RANDOM_SEED,
  ROJO,
  VERDE,
} from "./utils/constants";
import { getColor } from "./utils/getColor";
import toast, { Toaster } from "react-hot-toast";
import { blueCards, greenCards, redCards, yellowCards } from "./data/cards";
import CardModal from "./components/CardModal";
import type { AnyCard } from "./types/card";
import useLocalStorageState from "use-local-storage-state";
import type { SelectedAllColor } from "./types/color";
import { shuffleArr } from "./utils/shuffleArr";

const cards = {
  [ROJO]: redCards,
  [AMARILLO]: yellowCards,
  [VERDE]: greenCards,
  [AZUL]: blueCards,
};

random.use(seedrandom.xor128(RANDOM_SEED));

function App() {
  const [ignoreCardIds, setIgnoreCardIds] = useLocalStorageState<{
    [ROJO]: number[];
    [AMARILLO]: number[];
    [VERDE]: number[];
    [AZUL]: number[];
  }>("ignoreCardIds", {
    defaultValue: { [ROJO]: [], [AMARILLO]: [], [VERDE]: [], [AZUL]: [] },
  });

  const [teams, setTeams] = useLocalStorageState("teams", {
    defaultValue: [
      { name: "Equipo 1", position: 0 },
      { name: "Equipo 2", position: 0 },
    ],
  });
  const [turn, setTurn] = useState(0);
  const [selectedColor, setSelectedColor] = useState<SelectedAllColor>();
  const [activeCard, setActiveCard] = useState<AnyCard | null>(null);

  const handleNextTurn = () => {
    setTurn((prev) => (prev + 1) % teams.length);
    setSelectedColor(undefined);
  };

  const canDisplayCard = selectedColor && selectedColor !== MORADO;

  const handleMostrarCarta = () => {
    if (!canDisplayCard) return;

    const remainingCards = cards[selectedColor].filter(
      (card) => !ignoreCardIds[selectedColor].includes(card.id)
    );
    if (!remainingCards.length) {
      toast.error("No hay cartas disponibles", {
        duration: 5000,
      });
      return;
    }
    const shuffledCards = shuffleArr(remainingCards);
    console.log(shuffledCards);
    const randomCard = shuffledCards[random.int(0, shuffledCards.length)];

    setActiveCard(randomCard);
    setIgnoreCardIds({
      ...ignoreCardIds,
      [selectedColor]: [...ignoreCardIds[selectedColor], randomCard.id],
    });
  };

  const renameTeam = () => {
    const teamName = prompt("Ingrese el nombre del equipo");
    if (teamName) {
      setTeams((prev) => {
        const newTeams = [...prev];
        newTeams[turn].name = teamName;
        return newTeams;
      });
    }
  };

  const handleReset = () => {
    if (confirm("¿Estás seguro de que quieres resetear el juego?")) {
      setTeams([
        { name: "Equipo 1", position: 0 },
        { name: "Equipo 2", position: 0 },
      ]);
      setTurn(0);
      setSelectedColor(undefined);
      setActiveCard(null);
      setIgnoreCardIds({ [ROJO]: [], [AMARILLO]: [], [VERDE]: [], [AZUL]: [] });
    }
  };

  const handleAvanzar = (color: string) => {
    const filteredPositions = positions.filter(
      (position) => position.color === color
    );
    const nextPositions = filteredPositions.filter(
      (position) => position.position > teams[turn].position
    );
    if (nextPositions[0]) {
      setTeams((prev) => {
        const newTeams = [...prev];
        newTeams[turn].position = nextPositions[0].position;
        return newTeams;
      });
      handleNextTurn();
      toast.success(teams[turn].name + " avanzó hacía el color " + color, {
        duration: 5000,
      });
    } else {
      toast.error(`No hay casillas de color ${color} restantes.`, {
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5">
        {/* Panel lateral (Improved UI) */}
        <div className="w-full md:w-80 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 space-y-6">
          {/* Turn Indicator (Enhanced) */}
          <div>
            <h2 className="text-lg text-gray-500 font-semibold mb-2">
              <button onClick={() => handleReset()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 inline mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
              Es turno de:
            </h2>
            <div className="text-3xl font-extrabold tracking-wide text-black p-2 text-center">
              {teams[turn].name}{" "}
              <button onClick={renameTeam}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Botones de colores (Improved styling for clarity) */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color as SelectedAllColor)}
                className={`border-2 rounded-xl py-2 text-sm font-bold uppercase transition-all duration-200 shadow-sm
                  ${
                    selectedColor === color
                      ? `${getColor(color, {
                          border: true,
                        })} text-white ring-4 ring-offset-2 ${getColor(color, {
                          ring: true,
                        })}` // Highlighted/Selected State
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100" // Default/Unselected State
                  }`}
              >
                {color}
              </button>
            ))}
          </div>

          {/* Panel de acción (Prioritized) */}
          {selectedColor && (
            <div className="mt-6 space-y-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col gap-3">
                {/* Primary Action: Avanzar (Highlighted) */}
                <button
                  onClick={() => handleAvanzar(selectedColor)}
                  className={`w-full ${getColor(selectedColor, {
                    hover: true,
                  })}  text-white font-extrabold uppercase py-3 rounded-xl transition-all shadow-lg text-lg transform hover:scale-[1.02] active:scale-[0.98]`}
                >
                  avanzar a {selectedColor}
                </button>

                {/* Secondary Action: Mostrar Carta (Clearer, less dominant style) */}
                {canDisplayCard && (
                  <button
                    onClick={() => handleMostrarCarta()}
                    className={`w-full text-black border-2 border-gray-100 font-extrabold uppercase py-3 rounded-xl transition-all shadow-lg text-lg transform hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    Mostrar Carta
                  </button>
                )}
              </div>
            </div>
          )}
          <div className="space-y-3">
            {/* Skip Turn Button (Separated from main actions) */}
            <button
              onClick={() => {
                handleNextTurn();
                toast("Pasamos al siguiente turno.", { icon: "➡️" });
              }}
              className={`w-full bg-gray-500 text-white font-extrabold py-3 rounded-xl transition-all shadow-lg text-lg transform hover:scale-[1.02] active:scale-[0.98]`}
            >
              Saltar Turno
            </button>
          </div>
        </div>

        {/* Tablero */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 w-full">
            <Board
              playerOnePosition={teams[0].position}
              playerOneName={teams[0].name}
              playerTwoPosition={teams[1].position}
              playerTwoName={teams[1].name}
            />
          </div>
        </div>
      </div>
      <Toaster />
      {activeCard && canDisplayCard && (
        <CardModal
          color={selectedColor}
          card={activeCard}
          onClose={() => setActiveCard(null)}
        />
      )}
    </div>
  );
}

export default App;
