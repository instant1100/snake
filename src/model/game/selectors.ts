import { Coords } from '@/model/interfaces';
import { GameStateInterface } from '@/model/game/interfaces';
import { coordsMapSelector } from '@/model/snake/selectors';

export const newAppleCoordsSelector = (state: GameStateInterface): Coords => {
  const snakeCoordsMap = coordsMapSelector(state.snakeState);
  while (true) {
    const x = Math.round(Math.random() * (state.width - 1));
    const y = Math.round(Math.random() * (state.height - 1));

    if (!snakeCoordsMap[`${x},${y}`]) {
      return [x, y];
    }
  }
};

export const isOutBorderSelector = (state: GameStateInterface, coords: Coords): boolean => {
  return coords[0] < 0
    || coords[0] > state.width - 1
    || coords[1] < 0
    || coords[1] > state.height - 1;
};

export const canEatAppleSelector = (state: GameStateInterface, coords: Coords): boolean => {
  return coords[0] === state.apple[0] && coords[1] === state.apple[1];
};
