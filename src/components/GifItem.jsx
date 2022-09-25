import React from 'react'




//Este componente se encarga de mostrar los  gif.
//Estamos recibiendo por parametros (props) el id, title, url.
export const GifItem = ({title, url, id}) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}


export default GifItem