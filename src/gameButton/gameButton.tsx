import * as React from 'react';

interface IProps {
  text: string,
  img: string,
  handleClick(): void;
}

export const GameButton = (props: IProps) => (
  <button
    type="button"
    className="btn-item"
    aria-label={props.text}
    onClick={props.handleClick}
  >
    <img src={props.img} alt={props.text} aria-hidden={true}/>
  </button>
);
