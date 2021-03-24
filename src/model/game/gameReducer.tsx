import { SNAKE_DEFAULT_LENGTH } from '@/core/config';
import { GameStateInterface } from '@/model/game/interfaces';
import {
  canEatAppleSelector,
  isOutBorderSelector,
  newAppleCoordsSelector,
} from '@/model/game/selectors';
import { GameActions } from '@/model/game/actions';
import snakeReducer from '@/model/snake/snakeReducer';
import { forwardCoordsSelector, isIncludeCoordInBodySelector } from '@/model/snake/selectors';

export const getInitialGameState = (width: number, height: number): GameStateInterface => {
  const newState: GameStateInterface = {
    speed: 1,
    eatenApples: 0,
    apple: null,
    width,
    height,
    snakeState: null,
    deaths: 0,
    record: 0,
  };

  const snakeLength = SNAKE_DEFAULT_LENGTH;
  const snakeHeadX = Math.ceil(width / 2);
  const snakeHeadY = Math.ceil(height / 2);
  newState.snakeState = snakeReducer(null, {
    type: 'start',
    length: snakeLength,
    coords: [snakeHeadX, snakeHeadY],
  });
  newState.apple = newAppleCoordsSelector(newState);

  return newState;
};

const gameReducer = (state: GameStateInterface | null, action: GameActions): GameStateInterface => {
  switch (action.type) {
    case 'start': return getInitialGameState(action.width, action.height);
    case 'step': {
      const nextHead = forwardCoordsSelector(state.snakeState);
      const hasCircle = isIncludeCoordInBodySelector(state.snakeState, nextHead);
      const isOutBorder = isOutBorderSelector(state, nextHead);

      if (hasCircle || isOutBorder) {
        const initialState = getInitialGameState(state.width, state.height);
        initialState.record = Math.max(state.eatenApples, state.record);
        initialState.deaths = state.deaths + 1;

        return initialState;
      }
      const newState = { ...state };
      const canEatApple = canEatAppleSelector(state, nextHead);
      if (canEatApple) {
        newState.snakeState = snakeReducer(state.snakeState, { type: 'eat' });
        return {
          ...newState,
          apple: newAppleCoordsSelector(newState),
          eatenApples: state.eatenApples + 1,
          speed: state.speed + 1,
        };
      }
      return {
        ...newState,
        snakeState: snakeReducer(state.snakeState, { type: 'moveForward' }),
      };
    }
    case 'changeDirection': {
      return {
        ...state,
        snakeState: snakeReducer(state.snakeState,
          {
            type: 'changeDirection',
            direction: action.direction,
          }),
      };
    }
    default:
      throw new Error();
  }
};

export default gameReducer;
