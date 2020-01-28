import * as React from 'react';

export interface IScore {
  player: number;
  computer: number;
}

export const Score = (props: IScore) => (
  <div>
    <p><strong>Общий счет игры</strong></p>
    <p>Вы {props.player} : {props.computer} Компьютер</p>
  </div>
);
