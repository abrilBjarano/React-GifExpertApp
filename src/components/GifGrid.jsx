import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ categoryGifExpertAppProp }) => {


   getGifs( categoryGifExpertAppProp );

   return (
      <>
         <h3>{ categoryGifExpertAppProp }</h3>
      </>
   )
}
