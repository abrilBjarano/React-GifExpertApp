import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ categoryGifExpertAppProp }) => {


   const [ images, setImages ] = useState([]);

   const getImages = async() => {
      const newImages = await getGifs( categoryGifExpertAppProp );
      setImages( newImages );
   };

   useEffect( () => {
      getImages();
   }, [])


   return (
      <>
         <h3>{ categoryGifExpertAppProp }</h3>

         <ol>
            { images.map( ({ id, title }) => (
               <li key={ id }>{ title }</li>
            ))}
         </ol>
      </>
   )
}
