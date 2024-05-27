export const GifGrid = ({ categoryGifExpertAppProp }) => {

   const getGifs = async() => {

      const url = `https://api.giphy.com/v1/gifs/search?api_key=WZtLUbb5kAarT0hF9HfCavhNLUqHUahK&q=cheeseburgers&limit=8`;
      const resp = await fetch( url );
      const { data } = await resp.json();

      const gifs = data.map( ({ id, title, images }) => ({
         id,
         title,
         url: images.downsized_medium.url
      }));
      

      console.log(gifs);
   };

   getGifs();

   return (
      <>
         <h3>{ categoryGifExpertAppProp }</h3>
      </>
   )
}
