import React from 'react';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ id, type, placeholder, value, onChange }: InputProps) {
  
  return (
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
