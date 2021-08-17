import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/product";
import Carrousel from "../../components/Carrousel/Carrousel";
import CardProduct from "../../components/ProductList/CardProduct";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "./../../components/Footer/Footer";
import './Landing.css'


export const Landing = () => {
  const items = [
    {
      image_url:
        "https://images.unsplash.com/photo-1597484662003-7cf93e97447c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1597484657134-cfa8511b913b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&w=1080",
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1546957236-5fde4e0b25eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=1080&w=1080",
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];
  const dispatch = useDispatch();

  const list = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  let list4 = [];
  list4.push(list[1], list[2], list[3], list[4]);

  //console.log("LIST: ",list5)
  //console.log("acaaaa")
  //console.log(list)
  return (
    <div>
      <div class="container-fluid ">
          <Carrousel images={items} />
      </div>
      <div class="container-fluid position-relative">
        <div class="row row-cols-lg-1 row-cols-md-2 row-cols-sm-2 row-cols-xs-2">
          <div class="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12 position-relative">
            <Newsletter />
            </div>
            <div id="cardgroup" class="card-deck col col-lg-6 position-absolute bottom-0 start-50 translate-middle-x">
              <div className=" col-lg-12 col-md-12 col-sm-12">
                <h2>Productos Destacados</h2>
              {list.length > 0 &&
                list4.map((c) => (
                  <CardProduct
                    url={c.productimages[0].image_url}
                    price={c.price}
                    title={c.title}/>
                ))}
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
