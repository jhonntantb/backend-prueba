import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../redux/actions/product';
import Carrousel from '../../components/Carrousel/Carrousel';
import CardProduct from '../../components/ProductList/CardProduct';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from './../../components/Footer/Footer';
//import './Landing.css'



export const Landing = () => {
  const items = [
    {
      image_url: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHwxfHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      image_url: 'https://images.unsplash.com/photo-1578922180039-6c13a4671d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHwzfHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      image_url: 'https://images.unsplash.com/photo-1569061831972-d1ed3635136e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHw0fHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
  const dispatch = useDispatch()


  const list = useSelector(state => state.productReducer.products)
  useEffect(() => {
    dispatch(getAllProduct());
  }, [])

  let list4 = []
  list4.push(list[1], list[2], list[3], list[4])

  //console.log("LIST: ",list5)

  return (
    <div>
      <h1>LANDING</h1>
      <div class="container ">
        <div class="site-content">
          <Carrousel images={items}  />
        </div>
      </div>
      <div class="container-fluid  ">
        <div class="row-fluid ">
          <div class="col-xl-10 col-lg-8 col-md-12 col-sm-12">
          <Newsletter />
            <div class="cards">

              {list.length > 0 && list4.map(c =>
                <CardProduct url={c.productimages[0].image_url} price={c.price} title={c.title} />)}
              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Landing;
