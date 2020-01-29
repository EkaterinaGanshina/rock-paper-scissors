import * as React from 'react';

export interface IScore {
  player: number;
  computer: number;
  overall: number;
}

interface IStatsProps extends IScore {
  resetScore(): void;
}

export const Statistics = (props: IStatsProps) => {
  const ties = props.overall - props.player - props.computer;
  
  return (
    <div>
      <h3>Overall game score</h3>
      
      <ul>
        <li>You won: <strong className="stats-player">{props.player}</strong> times</li>
        <li>Computer won: <strong className="stats-comp">{props.computer}</strong> times</li>
        <li>Tie: <strong className="stats-tie">{ties}</strong> times</li>
        <li>Overall: <strong className="stats-all">{props.overall}</strong> games</li>
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
