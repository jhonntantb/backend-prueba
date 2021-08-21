import { goToCheckout } from '../../redux/actions/checkout/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createOrder, getAllOrder } from '../../redux/actions/order/index';
import "./index.css"

function CreateCheckoutButton ({products, direction}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
  const dbOrder = useSelector(state => state.orderReducer.orders)
  const createdOrder = useSelector(state => state.orderReducer.order)
  const mpData = useSelector(state => state.checkoutReducer.MP_data)
  
  const productsToMP = products.map(p => {
    return {
      title: p.id,
      price: p.price,
      discount: 0,
      quantity: p.cant
    }
  })

  const productsToDB = products.map(p => {
    return {
      productId: p.id,
      unitprice: Number(p.price),
      quantity: Number(p.cant)
    }
  })

  useEffect(() => {
    user.id && dispatch(getAllOrder(user.id, "checkout"))
  }, [])

  useEffect(() => {
    var total = products.reduce((acum, e) => acum += (e.price * e.cant));

    (dbOrder.length > 0) || dispatch(createOrder({
      status: "checkout",
      home_address: direction.home_address,
      location: direction.location,
      total_price: total,
      province: direction.province,
      country: user.country,
      postal_code: direction.postal_code,
      phone_number: direction.phone_number,
      userId: user.id,
      products: productsToDB
    }))
    
  }, [dbOrder])

  useEffect(() => {createdOrder.id && dispatch(goToCheckout(user.id, productsToMP))}, [createdOrder])

  useEffect(() => {
    if(mpData) {
        var script = document.createElement("script");
        script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.type = "text/javascript";
        script.dataset.preferenceId = mpData;
        document.getElementById("button-checkout").innerHTML = "";
        document.querySelector("#button-checkout").appendChild(script);
    }
  }, [mpData])
  
  return (
    <div className="btn btn-block rm-border" id='button-checkout'></div>
  )
}

export default CreateCheckoutButton;