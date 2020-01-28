import * as React from 'react';

interface IProps {
  text: string,
  handleClick(): void;
}

export const GameButton = (props: IProps) => (
  <button
    type="button"
    onClick={props.handleClick}
  >
    {props.text}
  </button>
);
