export const getGifs = async( category ) => {

   const api_key = 'BUZCS4sYWcpdjQdSnVysyy6PomKRW2MO';

   const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=5`;
   const resp = await fetch( url );
   const { data } = await resp.json();

   const gifs = data.map( ({ id, title, images }) => ({
      id,
      title,
      url: images.downsized_medium.url
   }));
   

   return gifs;
};