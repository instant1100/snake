import { Coords } from '@/model/interfaces';

export enum directions {
  west,
  east,
  north,
  south
}

export type directionsMapType = {
  [key in directions]: (coords: Coords) => Coords;
}

export type SnakeMapType = {[key: string]: true};

export type SnakeType = Coords[];

export type SnakeReducerState = {
  snake: SnakeType,
  direction: directions,
};
