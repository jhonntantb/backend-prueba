import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProduct } from "../../redux/actions/product/index";
import { getReview } from "../../redux/actions/review/index";
import ShowReviews from "../../components/ShowReviews/ShowReviews";
import CreateReview from "../../components/Review/CreateReview";
import Carrousel from "../../components/Carrousel/Carrousel";
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap";
import { getCart } from "../../redux/actions/cart/index"
import "./Product.css";

export default function Product({ match }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  const cart = useSelector(state => state.cartReducer.cart);
  const user =  useSelector(state => state.userReducer.user)
  const reviews = useSelector((state) => state.reviews);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getReview(match.params.id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct(match.params.id));
    user.id ? dispatch(getCart(user.id)) : dispatch(getCart())
  }, []);
  useEffect(() => {
   if(product.id != undefined) setLoading(false)
  }, [product]);

  const handleAddCart = () => {
    const prod = {
      id: product.id,
      title: product.title,
      price: product.price,
      cant: 1,
      img: product.productimages[0].image_url,
    };

    if (cart) {
      if (cart.find((e) => e.id == prod.id))
        alert("El producto ya esta agregado al carrito");
      else localStorage.setItem("cart", JSON.stringify([...cart, prod]));
    } else localStorage.setItem("cart", JSON.stringify([prod]));

    user.id ? dispatch(getCart(user.id)) : dispatch(getCart())
  };
  
  return !Loading ? (
    <div className="container">
      <div className="cartas">
        <div className="container-fluid">
          <div className="wrapper row box-shadow bg-white">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <Carrousel images={product.productimages || []} />
              </div>
            </div>

            <div className="details col-md-6 text-center">
              <h3 className="product-title">{product.title}</h3>

              <p className="product-description text-dark">{product.resume}</p>

              <h5 className="text-dark">{product.detail}</h5>
              <h4 className="price text-dark mt-3">Articulo:{product.catalog_id}</h4>
              <h4 className="price text-dark mt-3">Stock:{product.stocks.length > 0 ? product.stocks[0].quantity :(product.stock ? product.stock : "0")} unidades</h4>
              {/* <div className="productDetails">
              </div> */}
              <div className="action">
                <button
                  className="add-to-cart btn btn-default"
                  onClick={handleAddCart}
                  style={{ marginLeft: "20px" }}
                >
                  Añadir al carrito
                </button>

                <NavLink to={`/productupdate/${product.id}`}>
                 {'Modificar producto'}
                </NavLink>
 
              </div>
            </div>
            <CreateReview match={match.params.id} />
            <ShowReviews reviews={product.reviews} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}