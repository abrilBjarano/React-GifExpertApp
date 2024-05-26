import { useState } from "react";

export const AddCategory = () => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  };

  // TODO: Entender bien como funciona la conexión entre todas las funciones y propiedades que están manejando inputValue y setInputValue
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( inputValue );
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
 