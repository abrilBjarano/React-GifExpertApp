import { useState } from "react";

import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Miranda', 'Marina' ]);

  const onAddCategory = () => {
    setCategories([ 'Dolores', ...categories ]);
  };


  
  return ( 
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={ setCategories } />

      <ol>
        { categories.map( category => {
          return <li key={ category }>{ category }</li>
        })}
      </ol>
    </>
  )

}