import { positions } from "../utils/constants";
import { getColor } from "../utils/getColor";

type Props = {
  playerOnePosition: number;
  playerTwoPosition: number;
  playerOneName: string;
  playerTwoName: string;
};
export default function Board({
  playerOnePosition,
  playerTwoPosition,
  playerOneName,
  playerTwoName,
}: Props) {
  const inPositionClassName = (position: number) => {
    if (playerOnePosition === position || playerTwoPosition === position) {
      return "scale-125 transition-all duration-500 ease-in-out !shadow-xl !shadow-black/10";
    }
    return "blur-[0.05rem] opacity-80";
  };

  return (
    <div className="bg-amber-50 mx-auto py-10 mt-10">
      <div className="grid grid-cols-4 gap-y-10 justify-center">
        {positions.map((i) => (
          <div key={i.position} className="flex items-center justify-center">
            <div
              className={`relative h-32 w-32 flex items-center justify-center rounded-2xl text-white font-bold border-2 border-black/20 shadow ${inPositionClassName(
                i.position
              )} ${getColor(i.color)}`}
            >
              <span className="absolute top-4 right-4 text-sm text-gray-700">
                #{i.position + 1}
              </span>
              <span className="flex flex-col text-sm">
                {playerOnePosition === i.position && (
                  <span>{playerOneName}</span>
                )}
                {playerTwoPosition === i.position && (
                  <span>{playerTwoName}</span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
