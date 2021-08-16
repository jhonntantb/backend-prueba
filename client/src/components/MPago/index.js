import {goToCheckout} from '../../redux/actions/checkout/index';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import {updateOrderStatus, createOrder} from '../../redux/actions/order/index';

function CreateCheckoutButton ({products}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
  const createdOrder = useSelector(state => state.orderReducer.order)
  const mpData = useSelector(state => state.checkoutReducer.MP_data)
  
  const productsOk = products.map(p=> {
    return {
        title: p.id,
        price: p.price,
        discount: 0,
        quantity: p.cant
    }
  })

  useEffect(() => {
    var total = products.reduce((acum, e) => acum + (e.price * e.cant), 0)

    dispatch(createOrder({
      status: "checkout",
      total_price: total,
      home_address: user.address,
      location: user.location,
      province: user.province,
      country: user.country,
      postal_code: 1111,
      phone_numer: 0,
      delivery_date: "2021-08-20",
      userId: user.id,
      products: productsOk
    }))
  }, [])

  useEffect(() => createdOrder.length > 0 && dispatch(goToCheckout(user.id, productsOk)), [createdOrder])

  useEffect(()=>{
    if(mpData) {
        var script = document.createElement("script");
        script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.type = "text/javascript";
        script.dataset.preferenceId = mpData.id;
        document.getElementById("button-checkout").innerHTML = "";
        document.querySelector("#button-checkout").appendChild(script);
    }
  }, [mpData])

  // The source domain must be completed according to the site for which you are integrating.
  // For example: for Argentina ".com.ar" or for Brazil ".com.br".

  return (mpData ? <div id='button-checkout'></div> : <div></div>)
}

export default CreateCheckoutButton;
