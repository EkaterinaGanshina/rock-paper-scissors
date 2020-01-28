import * as React from 'react';
import { IValue, Values, GameValues, GameOutcomes } from '../constants';
import { GameButton } from '../gameButton/gameButton';

export const Board = () => {
  const [playerChoice, makeChoice] = React.useState<IValue | null>(null);
  const computerChoice: IValue = getComputerTurn();
  const outcome: string = playerChoice ? determineOutcome(playerChoice.value, computerChoice.value) : '';
  
  return (
    <div>
      {!playerChoice && (
        <React.Fragment>
          <p>Ваш ход:</p>
    
          <GameButton text={GameValues[0].name} handleClick={() => makeChoice(GameValues[0])}/>
          <GameButton text={GameValues[2].name} handleClick={() => makeChoice(GameValues[2])}/>
          <GameButton text={GameValues[1].name} handleClick={() => makeChoice(GameValues[1])}/>
        </React.Fragment>
      )}
      
      {playerChoice && (
        <React.Fragment>
          <p>Ваш выбор: <strong>{playerChoice.name}</strong></p>
          <p>Выбор компьютера: <strong>{computerChoice.name}</strong></p>
          <p>Результат: {outcome}</p>
        </React.Fragment>
      )}
    </div>
  );
};

function getComputerTurn(): IValue {
  const turn: number = Math.floor(Math.random() * 3) + 1;
  return GameValues[turn];
}

function determineOutcome(player: Values, computer: Values): string {
  if (player === computer) {
    return GameOutcomes.draw;
  }
  
  switch (player) {
    case Values.Rock:
      return computer === Values.Paper ? GameOutcomes.computerWon : GameOutcomes.playerWon;
    case Values.Paper:
      return computer === Values.Rock ? GameOutcomes.playerWon : GameOutcomes.computerWon;
    case Values.Scissors:
      return computer === Values.Rock ? GameOutcomes.computerWon : GameOutcomes.playerWon;
    default:
      return GameOutcomes.draw;
  }
}
