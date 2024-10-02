import TextField from '@mui/material/TextField';
import React from 'react';
import './Input.css';

interface InputType {
  name: string;
  type: string;
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputType> = ({ value, label, name, placeholder, type, onChange }: InputType) => {
  const id = `${name}-input`;
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <TextField
        variant='outlined'
        name={name}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default Input