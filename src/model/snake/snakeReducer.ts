import { directions, SnakeReducerState, SnakeType } from '@/model/snake/interfaces';
import { SnakeActions } from '@/model/snake/actions';
import { neckSelector, forwardCoordsSelector } from '@/model/snake/selectors';

type SnakeReducerType = (state: SnakeReducerState | null, action: SnakeActions) => SnakeReducerState;

const snakeReducer: SnakeReducerType = (state, action) => {
  switch (action.type) {
    case 'start': {
      const { length, coords: [x, y] } = action;
      const snake: SnakeType = [];
      for (let i = 0; i < length; i++) {
        snake.push([x - length + i, y]);
      }

      return {
        snake,
        direction: directions.east,
      };
    }
    case 'eat': {
      const newHead = forwardCoordsSelector(state);
      const newSnake: SnakeType = [...state.snake, newHead];

      return {
        ...state,
        snake: newSnake,
      };
    }
    case 'moveForward': {
      const newHead = forwardCoordsSelector(state);
      const newSnake: SnakeType = [...state.snake.slice(1), newHead];

      return {
        ...state,
        snake: newSnake,
      };
    }
    case 'changeDirection': {
      const neck = neckSelector(state);
      const next = forwardCoordsSelector(state);
      if (neck[0] === next[0] && neck[1] === next[1]) {
        return state;
      }
      return {
        ...state,
        direction: action.direction,
      };
    }
    default:
      throw state;
  }
};

export default snakeReducer;
