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
      className="block w-full p-4 ps-10 text-sm text-brown-50 rounded-full focus:outline-none"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
