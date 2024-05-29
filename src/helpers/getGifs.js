export const getGifs = async( category ) => {

   const api_key = 'Nu9wQ0GY2RzS3mKEvHqAM4IEzt6hlfeU';

   const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=8`;
   const resp = await fetch( url );
   const { data } = await resp.json();

   const gifs = data.map( ({ id, title, images }) => ({
      id,
      title,
      url: images.downsized_medium.url
   }));
   

   return gifs;
};