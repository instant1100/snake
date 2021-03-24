import React, {
  FC, useMemo,
} from 'react';
import {
  CellStyles, FieldStyles, RowStyles, SnakeCellStyles, AppleCellStyles,
} from '@/styles/game.styles';
import { GameStateInterface } from '@/model/game/interfaces';
import { coordsMapSelector } from '@/model/snake/selectors';
import createKey from '@/core/createKey';

const FieldView: FC<{state: GameStateInterface}> = ({ state }) => {
  const field = useMemo(() => {
    const temp: string[][] = [];
    for (let x = 0; x < state.width; x++) {
      temp[x] = [];
      for (let y = 0; y < state.height; y++) {
        temp[x][y] = createKey(x, y);
      }
    }
    return temp;
  }, [state.width, state.height]);

  const snakeMap = coordsMapSelector(state.snakeState);
  return (
    <FieldStyles>
      {field.map((row, i) => (
        <RowStyles key={i}>
          {row.map((cell, j) => {
            if (snakeMap[cell]) {
              return <SnakeCellStyles key={cell} />;
            }
            if (state.apple[0] === i && state.apple[1] === j) {
              return <AppleCellStyles key={cell} />;
            }
            return <CellStyles key={cell} />;
          })}
        </RowStyles>
      ))}
    </FieldStyles>
  );
};

export default FieldView;
