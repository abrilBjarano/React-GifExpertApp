/* eslint-disable react/prop-types */
import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  };

  const onSubmit = ( event ) => {
    event.preventDefault();

    const newValue = inputValue.trim();

    if( newValue.length < 1 ) return;
    onNewValue( newValue );
    setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
  
}