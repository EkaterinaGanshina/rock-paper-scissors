import * as React from 'react';
import rock from './rock.svg';
import paper from './paper.svg';
import scissors from './scissors.svg';
import { GameValues, IGameValue, Outcomes, OutcomeValues, Values } from '../constants';
import { GameButton } from '../gameButton/gameButton';

interface IProps {
  recordScore(outcome: Outcomes): void;
}

interface IState {
  playerChoice: IGameValue | null;
  computerChoice: IGameValue | null;
  outcome: Outcomes;
}

const initialState: IState = {
  playerChoice: null,
  computerChoice: null,
  outcome: Outcomes.Initial,
};

export class Board extends React.Component<IProps, IState> {
  state: IState = { ...initialState };
  
  render() {
    const { playerChoice, computerChoice, outcome } = this.state;
  
    return (
      <div className="board">
        <GameButton
          text={GameValues[0].name}
          img={rock}
          handleClick={() => this.chooseValue(GameValues[0])}
        />
        <GameButton
          text={GameValues[1].name}
          img={paper}
          handleClick={() => this.chooseValue(GameValues[1])}
        />
        <GameButton
          text={GameValues[2].name}
          img={scissors}
          handleClick={() => this.chooseValue(GameValues[2])}
        />
  
        <ul className="game-outcome">
          <li>You chose: <strong>{this.getString(playerChoice)}</strong></li>
          <li>Computer chose: <strong>{this.getString(computerChoice)}</strong></li>
          <li>Outcome: <strong>{OutcomeValues[outcome].name}</strong></li>
        </ul>
      </div>
    );
  }
  
  private getString(value: IGameValue | null): string {
    const noValue = '–';
    return value ? value.name : noValue;
  }
  
  private chooseValue = (playerChoice: IGameValue) => {
    const computerChoice: IGameValue = getComputerTurn();
    const outcome: Outcomes = determineOutcome(playerChoice.value, computerChoice.value);
    
    this.setState({
      outcome,
      playerChoice,
      computerChoice,
    });
    
    this.props.recordScore(outcome);
  };
}

function getComputerTurn(): IGameValue {
  const turn: number = Math.floor(Math.random() * GameValues.length);
  return GameValues[turn];
}

function determineOutcome(player: Values, computer: Values): Outcomes {
  if (player === computer) {
    return Outcomes.Tie;
  }
  
  switch (player) {
    case Values.Rock:
      return computer === Values.Paper ? Outcomes.ComputerWon : Outcomes.PlayerWon;
    case Values.Paper:
      return computer === Values.Rock ? Outcomes.PlayerWon : Outcomes.ComputerWon;
    case Values.Scissors:
      return computer === Values.Rock ? Outcomes.ComputerWon : Outcomes.PlayerWon;
    default:
      return Outcomes.Tie;
  }
}
