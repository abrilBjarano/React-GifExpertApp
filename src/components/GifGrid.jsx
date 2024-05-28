import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ categoryGifExpertAppProp }) => {

   useEffect( () => {
      getGifs( categoryGifExpertAppProp );
   }, [])


   return (
      <>
         <h3>{ categoryGifExpertAppProp }</h3>
      </>
   )
}
