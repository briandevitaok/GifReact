import { useState } from "react"
import {AddCategory, GifGrid} from "./components"

export const  GitExpertApp = () => {

    //Cateories tiene todas las categorias. setCategories actualiza las categoiras.
      const [categories, setCategories] = useState(['Homero'])


      //La funcion onAddCategory agrega una nueva categoria cuando pulsamos el boton "Agregar".
      //[...categories] Lo que hace es traernos todo lo que tenemos en el estado y asi agregar uno nuevo
      //Con setcategories.
      const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return; //Si la newCategory que recibimos esta en las categorias
        //Entonces no hace nada, si no existe la agrega en el setcategories.
        setCategories([newCategory, ...categories])
      }

  return (
    <>
    <h1>GiftExperApp</h1>

    {/* El componente AddCategory recibe la newCategory  */}
    <AddCategory  onNewCategory={(event) =>  onAddCategory(event)} />

      {
          categories.map( category => (
                <GifGrid key={category} category={category}/>  //El componente GifGrid pinta los gif
          ))
        }
    </>
  )
}

export default GitExpertApp