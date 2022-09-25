
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem"


//Funcion que recibe una category y la pinta en el div.
export const GifGrid = ({category}) => {

  const {images, isLoading} =  useFetchGif(category);

  
  return (
    <>
      <h3>{category }</h3>
      {
        isLoading &&  ( <h2>Cargando..</h2>)
      }
      <div className="card-grid">

          {
            images.map ( (image) => (
              <GifItem key={image.id} {...image}/> //Componente que se encarga de mostrar los gifs
            ))
          }


      </div>
    
    
    </>
  )
}

export default GifGrid