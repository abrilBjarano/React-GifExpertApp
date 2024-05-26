import { useState } from "react";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Miranda', 'Marina' ]);

  const onAddCategory = () => {
    setCategories([ 'Dolores', ...categories ]);
  };

  console.log(categories);



  return (
    <>
      <h1>GifExpertApp</h1>

      <button onClick={ onAddCategory }>Agregar</button>

      <ol>
        { categories.map( category => {
          return <li key={ category }>{ category }</li>
        })}
      </ol>
    </>
  )

}