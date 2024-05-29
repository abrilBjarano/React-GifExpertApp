import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ categoryGifExpertAppProp }) => {

   const { images, isLoading } = useFetchGifs( categoryGifExpertAppProp );

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
