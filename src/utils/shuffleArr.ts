import seedrandom from "seedrandom";

export function shuffleArr<T>(array: T[], seed = Date.now().toString()) {
  const rng = seedrandom.xor128(seed);
  const arr = [...array]; // copia para no modificar el original

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
