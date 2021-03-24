import { directions } from '@/model/snake/interfaces';
import { Coords } from '@/model/interfaces';

export type InitAction = {
  type: 'start',
  coords: Coords,
  length: number,
}

export type AddHeadAction = {
  type: 'eat',
}

export type MoveForwardAction = {
  type: 'moveForward',
}

export type ChangeDirectionAction = {
  type: 'changeDirection',
  direction: directions,
}

export type SnakeActions = InitAction
  | AddHeadAction
  | MoveForwardAction
  | ChangeDirectionAction;
