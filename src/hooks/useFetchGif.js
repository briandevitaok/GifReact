import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";


///Custom hook se puede llamar y utilizarlo cada vez que neceistemos los gifs
export const useFetchGif = (category) => {

      const [images, setImages] = useState([])
      const [isLoading, setIsLoading] = useState(true)
  
  const getImage = async () =>{
      const newImages = await getGif(category);
      setImages(newImages);
      setIsLoading(false)

  } 


  useEffect(() => {  //useEffect es una funcion que nos sirve para ejecutar solo una vez lo que tengamos
    //Adentro de ella
    getImage()


  }, [])
  
    return {
        images,
        isLoading 
      }
}
