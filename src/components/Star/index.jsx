import { useState } from 'react';
import './style.css';

export const Star = ({value, onVote, glowing}) => {
  const onClick = () => {
      onVote(value);
  }
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div className={starClass} onClick={onClick}></div>
  );
};
