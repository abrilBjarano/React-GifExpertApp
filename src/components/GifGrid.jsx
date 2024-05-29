import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

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

         <br /><br />

         <div className="card-grid">
            { images.map( ( image ) => (
               <GifItem 
               key={ image.id }
                  { ...image }
               />
            ))}
         </div>
      </>
   )
}
