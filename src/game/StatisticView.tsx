import React, {
  FC,
} from 'react';
import { GameStateInterface } from '@/model/game/interfaces';

const StatisticView: FC<{state: GameStateInterface}> = ({ state }) => {
  return (
    <ul>
      <li>
        Съеденных яблок:
        {' '}
        {state.eatenApples}
      </li>
      <li>
        Скорость:
        {' '}
        {state.speed}
      </li>
      <li>
        Рекорд:
        {' '}
        {state.record}
      </li>
      <li>
        Смертей:
        {' '}
        {state.deaths}
      </li>
    </ul>
  );
};

export default StatisticView;
