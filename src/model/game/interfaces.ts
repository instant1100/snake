import { Coords } from '@/model/interfaces';
import { SnakeReducerState } from '@/model/snake/interfaces';

export interface GameStateInterface {
  speed: number,
  eatenApples: number,
  apple: Coords,
  width: number,
  height: number,
  snakeState: SnakeReducerState,
  deaths: number,
  record: number,
}
