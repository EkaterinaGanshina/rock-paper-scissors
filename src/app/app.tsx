import * as React from 'react';
import { Board } from '../board/board';
import { IScore, Score } from '../score/score';
import { Outcomes, StorageKeys } from '../constants';
import { Rules } from '../rules/rules';

const initialState: IScore = {
  player: 0,
  computer: 0,
};

export default function App() {
  const [score, setStateScore] = React.useState(initialState);
  
  const recordScore = (outcome: Outcomes): void => {
    if (outcome === Outcomes.Initial || outcome === Outcomes.Tie) {
      return;
    }
    
    const newScore: IScore = {
      player: (outcome === Outcomes.PlayerWon) ? score.player + 1 : score.player,
      computer: (outcome === Outcomes.ComputerWon) ? score.computer + 1 : score.computer,
    };
    
    setStateScore(newScore);
    setStorageScore(newScore)
  };
  
  const clearStore = (): void => {
    const zeroScore = {
      player: 0,
      computer: 0,
    };
    
    setStateScore(zeroScore);
    setStorageScore(zeroScore);
  };
  
  // Get values from local storage (componentDidMount)
  React.useEffect(() => {
    setStateScore(getStorageScore());
  }, []);
  
  return (
    <div className="container">
      <Board recordScore={recordScore}/>
  
      <Score
        player={score.player}
        computer={score.computer}
        resetScore={clearStore}
      />
      
      <Rules/>
    </div>
  );
}

function getStorageScore(): IScore {
  const player = localStorage.getItem(StorageKeys.Player) || '0';
  const computer = localStorage.getItem(StorageKeys.Computer) || '0';
  
  return {
    player: Number.parseInt(player),
    computer: Number.parseInt(computer),
  }
}

function setStorageScore(score: IScore): void {
  localStorage.setItem(StorageKeys.Player, score.player.toString());
  localStorage.setItem(StorageKeys.Computer, score.computer.toString());
}
