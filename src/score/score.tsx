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
      <h3>Overall game score</h3>
      
      <ul>
        <li>You won: {props.player} times</li>
        <li>Computer: won {props.computer} times</li>
        <li>Tie: {ties} times</li>
        <li>Overall: {props.overall} games</li>
      </ul>
  
      <button
        type="button"
        className="btn-reset"
        onClick={props.resetScore}
      >
        Reset stats
      </button>
    </div>
  )
};
