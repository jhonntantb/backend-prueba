import React from 'react'
import { useDispatch } from 'react-redux';

/*Como admin gestionar la disponibilidad de un item (stock)
  (un item que no esta disponible,
 no deberá estar listado en la página, pero su detalle debe seguir siendo accesible desde el
  historial de compras o con su URL, pero debe mencionar que el item no está disponible).*/

export const Stock = () => {

    const dispatch = useDispatch();
    return (
        <div>
            
        </div>
    )
}
