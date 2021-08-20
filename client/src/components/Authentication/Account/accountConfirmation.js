import { useDispatch } from "react-redux";
import { getUser, updateUser } from "../../../redux/actions/user";
import { useEffect } from "react";


export default function AccountConfirmation (props) {

    const dispatch=useDispatch()
    
    var search = props.location.search
    
    var id = search.split("&")[1].split("=")[1];

    var activateUser = [
        {id: id, 
        changes: {active: true}}
    ]
    
    useEffect(()=>{
        dispatch(updateUser(activateUser))
        localStorage.setItem("pg_merceria", id)
        dispatch(getUser(id))

    },[])
    



    
    function cartRedirect (e) {
        props.history.push("/cart")
    }

    function accountRedirect (e) {
        props.history.push("/account")
    }

    return (
        <div> 
            <h1>{`¡¡¡Te damos la bienvenida!!!`}</h1>
            <br/>
            <h3>Muchas gracias por registrate</h3>
            <hr/>
            <p>Araceli Merceria </p>
            <div>
                <button onClick={cartRedirect}>Ir al carrito</button>
                <button onClick={accountRedirect}>Ver la informacion de mi cuenta</button>
            </div>
            
        </div>)
}