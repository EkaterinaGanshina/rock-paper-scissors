import * as React from 'react';
import { GameValues, IGameValue, Outcomes, OutcomeValues, Values } from '../constants';
import { GameButton } from '../gameButton/gameButton';

interface IProps {
  recordScore(outcome: Outcomes): void;
}

interface IState {
  playerChoice: IGameValue | null;
  outcome: Outcomes;
}

export class Board extends React.Component<IProps, IState> {
  private readonly computerChoice: IGameValue = getComputerTurn();
  
  state: IState = {
    playerChoice: null,
    outcome: Outcomes.Initial,
  };
  
  render() {
    const { playerChoice, outcome } = this.state;
  
    return (
      <div>
        {playerChoice == null && (
          <React.Fragment>
            <p>Your turn:</p>
          
            <GameButton text={GameValues[0].name} handleClick={() => this.makeChoice(GameValues[0])}/>
            <GameButton text={GameValues[1].name} handleClick={() => this.makeChoice(GameValues[1])}/>
            <GameButton text={GameValues[2].name} handleClick={() => this.makeChoice(GameValues[2])}/>
          </React.Fragment>
        )}
      
        {playerChoice != null && (
          <React.Fragment>
            <p>Your choice: <strong>{playerChoice.name}</strong></p>
            <p>Computer choice: <strong>{this.computerChoice.name}</strong></p>
            <p>Outcome: {OutcomeValues[outcome].name}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
  
  private makeChoice = (playerChoice: IGameValue) => {
    const outcome: Outcomes = determineOutcome(playerChoice.value, this.computerChoice.value);
    
    this.setState({
      outcome,
      playerChoice,
    });
    
    this.props.recordScore(outcome);
  }
}

function getComputerTurn(): IGameValue {
  const turn: number = Math.floor(Math.random() * 3) + 1;
  return GameValues[turn];
}

function determineOutcome(player: Values, computer: Values): Outcomes {
  if (player === computer) {
    return Outcomes.Draw;
  }
  
  switch (player) {
    case Values.Rock:
      return computer === Values.Paper ? Outcomes.ComputerWon : Outcomes.PlayerWon;
    case Values.Paper:
      return computer === Values.Rock ? Outcomes.PlayerWon : Outcomes.ComputerWon;
    case Values.Scissors:
      return computer === Values.Rock ? Outcomes.ComputerWon : Outcomes.PlayerWon;
    default:
      return Outcomes.Draw;
  }
}
