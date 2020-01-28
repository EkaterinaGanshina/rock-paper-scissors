import * as React from 'react';

export interface IScore {
  player: number;
  computer: number;
  overall: number;
}

interface IScoreProps extends IScore {
  resetScore(): void;
}

export const Score = (props: IScoreProps) => {
  const ties = props.overall - props.player - props.computer;
  
  return (
    <div>
      <p><strong>Overall game score</strong></p>
      <p>You won: {props.player} times</p>
      <p>Computer: won {props.computer} times</p>
      <p>Tie: {ties} times</p>
      <p>Overall: {props.overall} games</p>
      <div>
        <button type="button" onClick={props.resetScore}>Reset score</button>
      </div>
    </div>
  )
};
