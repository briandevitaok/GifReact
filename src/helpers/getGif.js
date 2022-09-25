

//Hacemos un fecht a la url de API 
 export const getGif = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=ON9Y8pVebQpJXUJd9zFCsuU1fTebB830&q=${category}&limit=10`
    const resp = await fetch(url) //Obtemeos los los datos
    const {data} = await resp.json() //Desestructuramos con dada y lo convertimos a json
  
    const gifs = data.map( img => ({ //Mapeamos la data y la retornamos.
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    console.log(gifs)
    return gifs
  
  }