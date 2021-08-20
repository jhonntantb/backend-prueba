import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CardProduct from "../../components/ProductList/CardProduct";
import { getWishlist } from "../../redux/actions/wishlist";
import { getProduct } from "../../redux/actions/product";



export default function Wishlist() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.userReducer.user.id);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);

  useEffect(() => {
    dispatch(getWishlist(id));
  }, []);
  
  console.log(wishlist)
 
 return (
  <div id="wishlist">
    {
     wishlist.length > 0 && typeof wishlist.map == "function"? wishlist.map((wish)=>{
     return <CardProduct title={wish.product.title} price={wish.product.price} url={wish.product.productimages[0].image_url} id={wish.product.id} stock={wish.product.stocks[0].quantity} />
     }) 
     : <h1>No hay productos :)</h1>
    }
  </div>)
  ;
}