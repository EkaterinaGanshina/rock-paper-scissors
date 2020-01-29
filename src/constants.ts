export enum StorageKeys {
  Player = 'rps-player',
  Computer = 'rps-computer',
  Overall = 'rps-overall',
}

export enum Values {
  Rock,
  Paper,
  Scissors,
}

export interface IGameValue {
  value: Values;
  name: string;
}

export const GameValues: IGameValue[] = [
  {
    value: Values.Rock,
    name: 'Rock',
  },
  {
    value: Values.Paper,
    name: 'Paper',
  },
  {
    value: Values.Scissors,
    name: 'Scissors',
  },
];

export enum Outcomes {
  Initial,
  Tie,
  PlayerWon,
  ComputerWon,
}

export interface IOutcomeValue {
  value: Outcomes;
  name: string;
}

export const OutcomeValues: IOutcomeValue[] = [
  {
    value: Outcomes.Initial,
    name: '–',
  },
  {
    value: Outcomes.Tie,
    name: 'Tie',
  },
  {
    value: Outcomes.PlayerWon,
    name: 'You won!',
  },
  {
    value: Outcomes.ComputerWon,
    name: 'Computer won :(',
  },
];
