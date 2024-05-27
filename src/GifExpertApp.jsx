/* eslint-disable no-unused-vars */
import { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Miranda', 'Marina' ]);

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

      { categories.map( category => ( 
          <GifGrid 
            key={ category } 
            categoryGifExpertAppProp={ category } 
          /> 
      ))}
    </>
  )

}