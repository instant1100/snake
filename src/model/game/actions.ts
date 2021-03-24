import { directions } from '@/model/snake/interfaces';

export type GameInitAction = {
  type: 'start',
  width: number,
  height: number,
}

export type GameStepAction = {
  type: 'step',
}

export type ChangeDirectionAction = {
  type: 'changeDirection',
  direction: directions,
}

export type GameActions = GameInitAction | GameStepAction | ChangeDirectionAction;
