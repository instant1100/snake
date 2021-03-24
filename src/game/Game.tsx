import React, {
  FC, useCallback, useEffect, useReducer,
} from 'react';
import gameReducer, { getInitialGameState } from '@/model/game/gameReducer';
import { GameStateInterface } from '@/model/game/interfaces';
import { GameActions } from '@/model/game/actions';
import { directions } from '@/model/snake/interfaces';
import FieldView from '@/game/FieldView';
import { FIELD_HEIGHT, FIELD_WIDTH, START_SPEED } from '@/core/config';
import StatisticView from '@/game/StatisticView';

const Game: FC = () => {
  const [state, dispatch] = useReducer<React.Reducer<GameStateInterface, GameActions>>(
    gameReducer,
    getInitialGameState(FIELD_WIDTH, FIELD_HEIGHT),
  );

  const keyDownCallback = useCallback((event) => {
    switch (event.key) {
      case 'ArrowDown': dispatch({ type: 'changeDirection', direction: directions.south }); break;
      case 'ArrowUp': dispatch({ type: 'changeDirection', direction: directions.north }); break;
      case 'ArrowLeft': dispatch({ type: 'changeDirection', direction: directions.west }); break;
      case 'ArrowRight': dispatch({ type: 'changeDirection', direction: directions.east }); break;
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('keydown', keyDownCallback);

    return () => {
      document.removeEventListener('keydown', keyDownCallback);
    };
  }, [keyDownCallback]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: 'step' });
    }, START_SPEED / state.speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [state.speed]);

  return (
    <>
      <FieldView state={state} />
      <StatisticView state={state} />
    </>
  );
};

export default Game;
