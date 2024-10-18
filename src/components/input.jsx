import React, { useState } from 'react';

export const Input = ({ inputSize, label, type = 'text', id, placeholder, onChange }) => {
  const [value, setValue] = useState('');

  const handleBlur = async () => {
    if (id === 'cep' && value.length === 8) {
      try {
        const response = await fetch(`https://api.postmon.com.br/v1/cep/${value}`);
        const data = await response.json();
        if (onCepChange) {
          onCepChange({ 
            endereco: data.logradouro, 
            cidade: data.cidade, 
            uf: data.estado 
          });
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
      }
    }
  };
  
  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`col-${inputSize}`}>
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur} // Chama a função ao sair do campo
        className="form-control"
      />
    </div>
  );
};