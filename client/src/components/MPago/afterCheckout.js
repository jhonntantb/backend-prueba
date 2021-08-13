import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getUser} from '../../../redux/actions/user/index';

function AfterCheckout (props) {
    const dispatch=useDispatch();
    var storeUser=useSelector(state=>state.userReducer.user);

    var localUserId=localStorage.getItem("pg_merceria");

    var [loading, setLoading]=useState(true)


    var query=props.location.query;


    useEffect(()=>{
        if(localUserId!=='guest') {
            dispatch(getUser(localUserId))
        }
        
    },[])

    useEffect(()=>{
        if(storeUser.user.id) {
            setLoading(false)
        }
        

    },[storeUser])


    

}