import * as React from 'react';
import { Board } from '../board/board';
import { IScore, Statistics } from '../statistics/statistics';
import { Outcomes, StorageKeys } from '../constants';
import { Rules } from '../rules/rules';

const initialState: IScore = {
  player: 0,
  computer: 0,
  overall: 0,
};

export const App = () => {
  const [score, setStateScore] = React.useState(initialState);
  
  const recordScore = (outcome: Outcomes): void => {
    if (outcome === Outcomes.Initial) {
      return;
    }
    
    const newScore: IScore = {
      player: (outcome === Outcomes.PlayerWon) ? score.player + 1 : score.player,
      computer: (outcome === Outcomes.ComputerWon) ? score.computer + 1 : score.computer,
      overall: score.overall + 1,
    };
    
    setStateScore(newScore);
    setStorageScore(newScore)
  };
  
  const clearScore = (): void => {
    const zeroScore = { ...initialState };
    
    setStateScore(zeroScore);
    setStorageScore(zeroScore);
  };
  
  // Get values from local storage (componentDidMount)
  React.useEffect(() => {
    setStateScore(getStorageScore());
  }, []);
  
  return (
    <div className="container">
      <h1>Rock, paper, scissors</h1>
      
      <div className="wrapper">
        <main className="board-container">
          <Board recordScore={recordScore}/>
          
          <Statistics
            player={score.player}
            computer={score.computer}
            overall={score.overall}
            resetScore={clearScore}
          />
        </main>
  
        <aside className="aside">
          <Rules/>
        </aside>
      </div>
    </div>
  );
};

function getStorageScore(): IScore {
  const player = localStorage.getItem(StorageKeys.Player) || '0';
  const computer = localStorage.getItem(StorageKeys.Computer) || '0';
  const overall = localStorage.getItem(StorageKeys.Overall) || '0';
  
  return {
    player: Number.parseInt(player),
    computer: Number.parseInt(computer),
    overall: Number.parseInt(overall),
  }
}

function setStorageScore(score: IScore): void {
  localStorage.setItem(StorageKeys.Player, score.player.toString());
  localStorage.setItem(StorageKeys.Computer, score.computer.toString());
  localStorage.setItem(StorageKeys.Overall, score.overall.toString());
}
