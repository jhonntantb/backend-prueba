import {getUser} from '../../../redux/actions/user/index';
import { useSelector, useDispatch } from 'react-redux';
import {useState, useEffect} from 'react';

export default function CheckUser () {

    const dispatch=useDispatch();

    const storeUser = useSelector(state=>state.userReducer.user)

    const [userLoaded, setUserLoaded] = useState(false)

    var localUser = localStorage.getItem("pg_merceria")
    var localAdmin = localStorage.getItem("admin")

    // let aux =[]
    // aux.push(localUser)
    // aux.push(localAdmin)

    if(localUser!=="guest") {
            if(storeUser.id===undefined) {
                dispatch(getUser(localUser))
            }
    }

    // useEffect(()=>{
    //     if(storeUser.id!==undefined) {
    //         setUserLoaded(true)
    //     }

    // },[storeUser])

    // if(userLoaded) return aux;
    
    return
}