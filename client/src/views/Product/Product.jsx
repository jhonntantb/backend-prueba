import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProduct } from "../../redux/actions/product/index";
import { getReview } from "../../redux/actions/review/index";
import ShowReviews from "../../components/ShowReviews/ShowReviews";
import CreateReview from "../../components/Review/CreateReview";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap";
import "./Product.css";

export default function Product({ match }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  const reviews = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getReview(match.params.id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, []);

  const handleAddCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
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
  };

  return product ? (
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
              <h4 className="price text-dark mt-3">{product.price}$</h4>
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

  //   <div className="container mt-4">
  //     <div className="carts">
  //       <div className="container-fliud">
  //         <div className="wrapper row">
  //           <div className="preview col-md-6">
  //             <div className="preview-pic tab-content">
  //               <div className="tab-pane active" id="pic-1">
  //                 <img src="http://placekitten.com/400/252" />
  //               </div>
  //               <div className="tab-pane" id="pic-2">
  //                 <img src="http://placekitten.com/400/252" />
  //               </div>
  //               <div className="tab-pane" id="pic-3">
  //                 <img src="http://placekitten.com/400/252" />
  //               </div>
  //               <div className="tab-pane" id="pic-4">
  //                 <img src="http://placekitten.com/400/252" />
  //               </div>
  //               <div className="tab-pane" id="pic-5">
  //                 <img src="http://placekitten.com/400/252" />
  //               </div>
  //             </div>
  //             <ul className="preview-thumbnail nav nav-tabs">
  //               <li className="active">
  //                 <a data-target="#pic-1" data-toggle="tab">
  //                   <img src="http://placekitten.com/200/126" />
  //                 </a>
  //               </li>
  //               <li>
  //                 <a data-target="#pic-2" data-toggle="tab">
  //                   <img src="http://placekitten.com/200/126" />
  //                 </a>
  //               </li>
  //               <li>
  //                 <a data-target="#pic-3" data-toggle="tab">
  //                   <img src="http://placekitten.com/200/126" />
  //                 </a>
  //               </li>
  //               <li>
  //                 <a data-target="#pic-4" data-toggle="tab">
  //                   <img src="http://placekitten.com/200/126" />
  //                 </a>
  //               </li>
  //               <li>
  //                 <a data-target="#pic-5" data-toggle="tab">
  //                   <img src="http://placekitten.com/200/126" />
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="details col-md-6">
  //             <h3 className="product-title">men's shoes fashion</h3>

  //             <p className="product-description">
  //               Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
  //               cubilia sem sem! Repudiandae et! Massa senectus enim minim
  //               sociosqu delectus posuere.
  //             </p>
  //             <h4 className="price">
  //               current price: <span>$180</span>
  //             </h4>
  //             <p className="vote">
  //               <strong>91%</strong> of buyers enjoyed this product!{" "}
  //               <strong>(87 votes)</strong>
  //             </p>
  //             <h5 className="sizes">
  //               sizes:
  //               <span className="size" data-toggle="tooltip" title="small">
  //                 s
  //               </span>
  //               <span className="size" data-toggle="tooltip" title="medium">
  //                 m
  //               </span>
  //               <span className="size" data-toggle="tooltip" title="large">
  //                 l
  //               </span>
  //               <span className="size" data-toggle="tooltip" title="xtra large">
  //                 xl
  //               </span>
  //             </h5>
  //             <h5 className="colors">
  //               colors:
  //               <span
  //                 className="color orange not-available"
  //                 data-toggle="tooltip"
  //                 title="Not In store"
  //               />
  //               <span className="color green" />
  //               <span className="color blue" />
  //             </h5>
  //             <div className="action">
  //               <button className="add-to-cart btn btn-default" type="button">
  //                 add to cart
  //               </button>
  //               <button className="like btn btn-default" type="button">
  //                 <span className="fa fa-heart" />
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
