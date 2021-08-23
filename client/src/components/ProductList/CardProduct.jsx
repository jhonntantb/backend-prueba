import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions/cart/index";
import { NavLink } from "react-router-dom";
import { deleteWishlist } from "../../redux/actions/wishlist/index";
import { createWishlist } from "../../redux/actions/wishlist/index";
import { getWishlist } from "../../redux/actions/wishlist/index";
import { updateOrder, createOrder, getAllOrder } from "../../redux/actions/order/index"
import "./CardProduct.css";
import Swal from "sweetalert2";


function CardProduct(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const user = useSelector((state) => state.userReducer.user);
  const order = useSelector((state) => state.orderReducer.orders);
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const [Fav, addFav] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if(cart)
      if(!user.id)
        setAdd(cart.find((prod) => props.id == prod.id) ? true : false)
  }, [cart])

  useEffect(() => {
    if(user.id)
      if(order.length > 0) setAdd(order[0].products.find((prod) => props.id == prod.id) ? true : false)
  }, [order])

  const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "¡Enhorabuena!",
      text: "El producto se agrego correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    if (
      typeof wishlist.find != undefined &&
      typeof wishlist.find == "function" &&
      typeof wishlist.map == "function"
    ) {
      if (wishlist.find((wish) => wish.productId == props.id)) addFav(true);
      else addFav(false);
    }
  }, [wishlist]);

  const handleAddCart = () => {
    

    if(user.id)
    {
      const prod = {
        productId: props.id,
        unitprice: Number(props.price),
        quantity: 1
      }

      if(order.length > 0)
      {
        if(order[0].products.find(e => e.id == prod.productId))
          alert("El producto ya esta agregado al carrito");
        else
        { 
          console.log("entro al update")
          const orderProducts = order[0].products.map(e => {
            return {
              productId: e.id,
              unitprice: Number(e.price),
              quantity: Number(e.Order_Product.quantity)
            }
          })
          dispatch(updateOrder(order[0].id,
            {...order[0], products: orderProducts.concat(prod)}
          ))
          .then(() => dispatch(getAllOrder(user.id, "cart")))

          setAdd(true);
          sweetAlert();
        }
      }
      else
      {
        dispatch(createOrder({
          status: "cart",
          home_address: "",
          location: "",
          total_price: 0,
          province: "",
          country: "Argentina",
          postal_code: "0000",
          phone_number: "0000000000",
          userId: user.id,
          products: [prod]
        }))
        .then(() => dispatch(getAllOrder(user.id, "cart")))

        setAdd(true);
        sweetAlert();
      }
    }
    else
    {
      let obj = {...props, cant: 1}
      if(cart) 
      {
        if(cart.find(e => e.id == props.id))
          alert("El producto ya esta agregado al carrito");
        else 
        {
          localStorage.setItem("cart", JSON.stringify([...cart, obj]));
          setAdd(true);
          sweetAlert();
          dispatch(getCart())
        }
      } 
      else 
      {
        localStorage.setItem("cart", JSON.stringify([obj]));
        setAdd(true);
        sweetAlert();
        dispatch(getCart())
      }
    }
  }

  const handleSubmit = (e) => {
    console.log(typeof(e.target.value))
    if(e.target.value == "true" )  {
      console.log("aca a punto de entrar al dispatch para deletearlo")

      if(user.id != undefined && props.id != undefined)
      {
        dispatch(deleteWishlist({userId:user.id,productId:props.id})).then(()=> {
          if(document.getElementById("wishlist") !=undefined ){
            console.log("magia de jacobo");
            console.log(document.getElementById("wishlist"))
            dispatch(getWishlist(user.id))
          }
        })

        addFav(false)
      }       
    }
  
    if(e.target.value == "false"){
      console.log("aca a punto de entrar al dispatch para crearlo")
      if(user.id != undefined && props.id != undefined)
      {
        dispatch(createWishlist({productId:props.id,userId:user.id, })).then(()=>{
          if(document.getElementById("wishlist") !=undefined )
          dispatch(getWishlist(user.id))
        })
        addFav(true)
      }
    }
  }

  console.log("order")
  console.log(order)
  return (
    <div class="card">
      <div class="text-center p-4">
        <img id="main-image" src={props.url} width="300" />
      </div>
      <div class="about text-center">
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={`/product/${props.id}`}
        >
          <h6>{props.title}</h6>
        </NavLink>
        <span>${props.price}</span>
        {props.stock > 0 && <h6>Stock Disponible </h6>}
      </div>
      <div class="cart-button mt-3 px-2 d-flex justify-content-around align-items-center">
        <button
          class="btn btn-dark text-uppercase "
          disabled={add}
          onClick={handleAddCart}
        >
          Añadir al carro
        </button>
        {user.id?(<div class="add">
          <span class="product_fav">
            {
              (<button
                class={Fav === true ? "fa fa-heart" : "fa fa-heart-o"}
                value={Fav}
                onClick={handleSubmit}
              ></button>)
            }
          </span>
        </div>):null}
      </div>
    </div>
  );
}

export default CardProduct;
