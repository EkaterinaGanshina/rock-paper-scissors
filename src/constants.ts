export enum StorageKeys {
  Player = 'rps-player',
  Computer = 'rps-computer',
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
    name: 'Камень',
  },
  {
    value: Values.Paper,
    name: 'Бумага',
  },
  {
    value: Values.Scissors,
    name: 'Ножницы',
  },
];

export enum Outcomes {
  Initial,
  Draw,
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
    name: '',
  },
  {
    value: Outcomes.Draw,
    name: 'Ничья',
  },
  {
    value: Outcomes.PlayerWon,
    name: 'Вы выиграли!',
  },
  {
    value: Outcomes.ComputerWon,
    name: 'Компьютер выиграл',
  },
];

