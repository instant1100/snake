import { SnakeMapType, SnakeReducerState } from '@/model/snake/interfaces';
import { directionsMap } from '@/model/snake/utils';
import { Coords } from '@/model/interfaces';
import createKey from '@/core/createKey';

export const neckSelector = (state: SnakeReducerState): Coords => {
  return state.snake[state.snake.length - 2];
};

export const headSelector = (state: SnakeReducerState): Coords => {
  return state.snake[state.snake.length - 1];
};

export const forwardCoordsSelector = (state: SnakeReducerState): Coords => {
  const oldHead = headSelector(state);

  return directionsMap[state.direction](oldHead);
};

export const coordsMapSelector = (state: SnakeReducerState): SnakeMapType => {
  return state.snake.reduce<SnakeMapType>((acc, coords) => {
    acc[createKey(...coords)] = true;
    return acc;
  }, {});
};

export const isIncludeCoordInBodySelector = (state: SnakeReducerState, coord: Coords): boolean => {
  return state.snake.slice(1, -1).some(c => c[0] === coord[0] && c[1] === coord[1]);
};
