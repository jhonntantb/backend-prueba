import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getUser} from '../../redux/actions/user/index';
import {getOrdersFromUser, updateOrderStatus} from '../../redux/actions/order/index';

export default function AfterCheckoutRejected (props) {
    const dispatch=useDispatch();
    var storeUser=useSelector(state=>state.userReducer.user);
    var storeOrder=useSelector(state=>state.orderReducer.order);
    var localUserId=localStorage.getItem("pg_merceria");

    var [loading, setLoading]=useState(true)
    

    

    //aqui capturo y filtro para conocer el status de pago de MP
    var query=props.location.search;
    console.log('esto es query ' , query)
    var mp_response_detail = query.split("&")
    console.log('mp_response : ' , mp_response_detail)
    var order_status_fromMP = mp_response_detail[3].split('=')[1]
    console.log('status : ' , order_status_fromMP)

    console.log('storeOrder ' , storeOrder)




    useEffect(()=>{
        if(localUserId!=='guest') {
            dispatch(getUser(localUserId))
            dispatch(getOrdersFromUser(localUserId, 'checkout'))
        }
    },[])

    useEffect(()=>{
        if(storeOrder.length>0 ) {

            
            
            if(storeOrder[0].status==='checkout') {
                dispatch(updateOrderStatus(storeOrder[0].id, "cart"))
                console.log("cambió el estado de la orden")
            }
            setLoading(false)
        }

    },[storeOrder])

    const redirectHandler = (e) => {
        e.preventDefault()
        props.history.push('/cart')
    }

    return (<div>
            {!loading?
                <div>
                    
                    <h3>Lo sentimos {storeUser.user_name}!!!</h3>
                    <br/>
                    <br/>
                    <span>=/</span>
                    <br/>
                    <br/>
                    <span>{`tu orden numero  [ ${storeOrder[0].id} ]  no pudo ser confirmada...`}</span>
                    <br/>
                    <br/>
                    
                    <span>Por favor, vuelve a intentarlo o ponte en contacto con el administrador</span>
                    <div>
                        <button 
                            onClick={redirectHandler}
                            className='btn btn-block btn-black rm-border'
                             >Volver a intentar</button>
                    </div>
                    

            </div>

            :<p>loading</p>}
        </div>)


}