import {getUser} from '../../../redux/actions/user/index';
import { useSelector, useDispatch } from 'react-redux';


export default function CheckUser () {

    const dispatch=useDispatch();

    const storeUser = useSelector(state=>state.userReducer.user)



    var localUser = localStorage.getItem("pg_merceria")
    var localAdmin = localStorage.getItem("admin")


    if(localUser!=="guest") {
            if(storeUser.id===undefined) {
                dispatch(getUser(localUser))
            }
    }



    return
}