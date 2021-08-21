import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardProduct from "../../components/ProductList/CardProduct";
import { getWishlist } from "../../redux/actions/wishlist";
import  Swal  from 'sweetalert2';




export default function Wishlist() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.userReducer.user.id);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);

  useEffect(() => {
    dispatch(getWishlist(id));
    noproducts()
  }, []);
  
 

  const noproducts = () => {
  Swal.fire({
    icon: "error",
    title: 'Oops',
    text:"Parece que todavia no tenes favoritos",
    confirmButtonText: `Ir a productos`,
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href="/productlist"
    } 
  })
}
 
 return (
  <div id="wishlist">
    {
     wishlist.length > 0 && typeof wishlist.map == "function"? wishlist.map((wish)=>{
     return <CardProduct title={wish.product.title} price={wish.product.price} url={wish.product.productimages[0].image_url} id={wish.product.id} stock={wish.product.stocks[0].quantity} />
     }) 
     : <h1 >{noproducts}</h1>
    }
  </div>)
  ;
}