import {goToCheckout} from '../../redux/actions/checkout/index';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

function CreateCheckoutButton (userId, products) {
    const dispatch=useDispatch()
    const mpData=useSelector(state=>state.checkoutReducer.MP_data)

    //comentar la siguiente linea cuando este terminado
    var userid2=localStorage.getItem('pg_merceria')

    useEffect(()=>{
        if(mpData!==null) {
            var script = document.createElement("script");
            script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
            script.type = "text/javascript";
            script.dataset.preferenceId = mpData.id;
            document.getElementById("button-checkout").innerHTML = "";
            document.querySelector("#button-checkout").appendChild(script);

        }

    },[mpData])

    
  
  // The source domain must be completed according to the site for which you are integrating.
  // For example: for Argentina ".com.ar" or for Brazil ".com.br".
  

  function checkoutHandler (userId, products) {
      var products2= [
          {
              title: 'ojotas',
              price: 150,
              discount: 0,
              quantity: 2
          }
      ]
      //recordar cambiar products2 por products y userid
    dispatch(goToCheckout(userid2, products2))
  }

  return (<button id='button-checkout' onClick={()=>checkoutHandler(userId, products)}>Confirmar</button>)

}

export default CreateCheckoutButton;
