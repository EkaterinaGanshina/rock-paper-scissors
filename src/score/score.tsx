import * as React from 'react';

export interface IScore {
  player: number;
  computer: number;
}

interface IScoreProps extends IScore {
  resetScore(): void;
}

export const Score = (props: IScoreProps) => (
  <div>
    <p><strong>Overall game score</strong></p>
    <p>You {props.player} : {props.computer} Computer</p>
    <div>
      <button type="button" onClick={props.resetScore}>Reset score</button>
    </div>
  </div>
);
