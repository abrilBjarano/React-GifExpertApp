import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoryGifExpertAppProp ) => {

   const [ images, setImages ] = useState([]);
   const [ isLoading, setIsLoading ] = useState( true );

   const getImages = async() => {
      const newImages = await getGifs( categoryGifExpertAppProp );
      setImages( newImages );
      setIsLoading( false );
   };

   useEffect( () => {
      getImages();
   }, [])

   return {
      images,
      isLoading
   }
}
