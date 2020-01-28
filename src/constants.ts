export enum Values {
  Rock,
  Paper,
  Scissors,
}

export interface IValue {
  value: Values;
  name: string;
}

export const GameValues: IValue[] = [
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

export const GameOutcomes = {
  initial: '',
  draw: 'Ничья',
  computerWon: 'Компьютер выиграл :(',
  playerWon: 'Вы выиграли!',
};
