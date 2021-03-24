import { directions, directionsMapType } from '@/model/snake/interfaces';

export const directionsMap: directionsMapType = {
  [directions.west]: ([x, y]) => [x - 1, y],
  [directions.east]: ([x, y]) => [x + 1, y],
  [directions.north]: ([x, y]) => [x, y - 1],
  [directions.south]: ([x, y]) => [x, y + 1],
};
