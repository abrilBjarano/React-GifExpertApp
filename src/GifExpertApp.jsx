import { useState } from "react";

import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Miranda Hobbes' ]);


  const onAddCategory = ( newCategory ) => {
    if( categories.includes( newCategory )) return;
    setCategories([ newCategory, ...categories ]);
  };


  
  return ( 
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewValue={ onAddCategory }
      />

      <br /><br />

      { categories.map( category => ( 
          <GifGrid 
            key={ category } 
            categoryGifExpertAppProp={ category } 
          /> 
      ))}
    </>
  )

}