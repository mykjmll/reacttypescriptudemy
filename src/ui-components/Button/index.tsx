import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = ({type="default", selected, onClick, className, children}) => {
  const selectedClass = selected ? "selected" : "";
  return (
    <button
      onClick={onClick}
      className={`btn btn-${type} ${selectedClass} ${className || ''}`}
    >
      {children}
    </button>
  )
}