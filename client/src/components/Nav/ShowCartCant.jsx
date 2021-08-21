import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from "../../redux/actions/cart/index"

export  const ShowCartCant = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)
    const user =  useSelector(state => state.userReducer.user)
    
    useEffect(() => user.id ? dispatch(getCart(user.id)) : dispatch(getCart()), [user])
    
    return cart ? cart.length : 0
}


