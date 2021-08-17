import {goToCheckout} from '../../redux/actions/checkout/index';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {updateOrderStatus, createOrder} from '../../redux/actions/order/index';
import setDeliveryDate from './setDeliveryDate';

function CreateCheckoutButton ({products, direction}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
  const createdOrder = useSelector(state => state.orderReducer.order)
  const mpData = useSelector(state => state.checkoutReducer.MP_data)

  const [abble, setAbble] =useState(true)
  
  const productsOk = products.map(p=> {
    return {
        title: p.id,
        price: p.price,
        discount: 0,
        quantity: p.cant
    }
  })

  console.log("esta es la direccion recibida en el checkoutbutton " , direction)

  // useEffect(() => {
  //   var total = products.reduce((acum, e) => acum + (e.price * e.cant), 0)

  //   dispatch(createOrder({
  //     status: "checkout",
  //     total_price: total,
  //     home_address: user.address,
  //     location: user.location,
  //     province: user.province,
  //     country: user.country,
  //     postal_code: 1111,
  //     phone_numer: 0,
  //     delivery_date: "2021-08-20",
  //     userId: user.id,
  //     products: productsOk
  //   }))
  // }, [])

  // useEffect(() => {createdOrder.length > 0 && dispatch(goToCheckout(user.id, productsOk))}, [createdOrder])

  useEffect(()=>{
    

    if(mpData!==null) {
        var script = document.createElement("script");
        script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.type = "text/javascript";
        script.dataset.preferenceId = mpData.id;
        document.getElementById("button-checkout").innerHTML = "";
        document.querySelector("#button-checkout").appendChild(script);
    }
  }, [mpData])

  // useEffect(()=>{
    

  //   if(direction.location!==undefined){
      
  //     var total = 0
  //     products.forEach(e => {total = total + (e.price*e.cant)});

  //     dispatch(createOrder({
  //     status: "checkout",
  //     total_price: total,
  //     home_address: direction.home_address,
  //     location: direction.location,
  //     province: direction.province,
  //     country: user.country,
  //     postal_code: direction.postal_code,
  //     phone_number: direction.phone_number,
  //     delivery_date: setDeliveryDate(),
  //     userId: user.id,
  //     products: productsOk
  //   }))}

  // },[])

  // The source domain must be completed according to the site for which you are integrating.
  // For example: for Argentina ".com.ar" or for Brazil ".com.br".

  function createMPpreference () {
     console.log("esto es products " , products) 
     console.log("esto es products[0]" , products[0])
    var total = 0
      products.forEach(e => total = total +  (e.price*parseInt(e.cant)));

      dispatch(createOrder({
      status: "checkout",
      total_price: total,
      home_address: direction.home_address,
      location: direction.location,
      province: direction.province,
      country: user.country,
      postal_code: direction.postal_code,
      phone_number: direction.phone_number,
      // delivery_date: "",
      userId: user.id,
      products: productsOk
    }))

    dispatch(goToCheckout(user.id, productsOk))

    setAbble(false)

  }

  return (<div>

    <button disabled={!abble} onClick={createMPpreference} className='btn btn-block btn-black rm-border'>Confirmar Pedido</button>
    <br/>
    <div id='button-checkout'></div>
  </div>)
  
}

export default CreateCheckoutButton;
