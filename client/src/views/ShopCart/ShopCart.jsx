import { useEffect, useRef } from "react";
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
      history.push(PRODUCTS)
  }, [])

  return (
    <div>
      <ShowCartProducts/>
    </div>
  )
}
