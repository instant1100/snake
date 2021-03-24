import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import Game from '@/game/Game';

const App: FC = () => {
  return <Game />;
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
