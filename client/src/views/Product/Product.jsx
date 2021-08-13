import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect} from "react"
import { getProduct } from "../../redux/actions/product/index"
import { getReview } from "../../redux/actions/review/index"
import ShowReviews from "../../components/ShowReviews/ShowReviews"
import CreateReview from "../../components/Review/CreateReview"
import Carrousel from '../../components/Carrousel/Carrousel'
import { Card, CardBody, CardSubtitle, CardTitle, CardText} from "reactstrap"
import "./Product.css"

export default function Product ({match}){
    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer.product)
    const reviews = useSelector((state) => state.reviews );
   
    useEffect(()=> {
        dispatch(getReview(match.params.id))
    },[dispatch])

    useEffect(()=>{
        dispatch(getProduct(match.params.id))
    }, [])

    const handleAddCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        const prod = {
            id: product.id,
            title: product.title,
            price: product.price,
            cant: 1,
            img: product.productimages[0].image_url
        }

        if(cart.length > 0)
        {
            if(cart.find((e) => e.id == prod.id))
                alert("El producto ya esta agregado al carrito")
            else
                localStorage.setItem("cart", JSON.stringify([...cart, prod]))
        } 
        else 
            localStorage.setItem("cart", JSON.stringify([prod]))
    }
   
    return (
        product ?
        <div className='main-container'>
            <div className='card-container'>
                    <Card fluid>
                        <CardBody >
                            <CardTitle className='product-title'>{product.title}</CardTitle>
                            <button onClick={handleAddCart}>Añadir al carrito</button>
                            <CardSubtitle>{product.resume}</CardSubtitle>
                        </CardBody>
                    </Card>
                <div className="productImages">
                    <Carrousel images={product.productimages || []}/>
                </div>
                {/* <div className="productDetails">
                </div> */}
            </div>
            <div>
                {product.detail}
            </div>
            <CreateReview match={match.params.id}/>
            <ShowReviews reviews={product.reviews}/>
        </div>
        :
        <div></div>
    )
}