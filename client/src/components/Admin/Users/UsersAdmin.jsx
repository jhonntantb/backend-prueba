import React , {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getAllUser, updateUser} from '../../../../redux/actions/user/index'

// {id: userId, changes:{isAdmin:true}}

function UsersAdmin () {

    const dispatch=useDispatch()

    const [storeUsers, setStoreUsers] = useSelector(state=>state.userReducer.users)


}