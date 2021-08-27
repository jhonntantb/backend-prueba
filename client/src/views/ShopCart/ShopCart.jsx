import Swal from "sweetalert2";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ShowCartProducts from "../../components/ShopCart/ShowCartPoducts";
import { PRODUCTS } from "../../routes"

export default function ShopCart() {
  const history = useHistory()
  const user = useSelector(state => state.userReducer.user)

  useEffect(() => {
    //AÑADIR UN SWEET ALERT
    if(!user.id)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes estar logueado para poder acceder al carrito',
        confirmButtonText: 'Ok',
        allowOutsideClick: false
      })
      .then((result) => {
        if (result.isConfirmed) 
        {
          history.push(PRODUCTS)
        }
      })
    }
  }, [])

  return (
    <div>
      <ShowCartProducts/>
    </div>
  )
}
