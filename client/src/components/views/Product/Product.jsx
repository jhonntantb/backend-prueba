import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect} from "react"
import { getProduct } from "../../../redux/actions/product/index"
import ShowReviews from "../../showReviews/ShowReviews"
import Carrousel from "../../Carrousel/Carrousel"

export default function Product (id){
    const [content, setContent] = useState({})
    const dispatch = useDispatch();
    //const product = useEffect(state => state.product)
    product = {}
    const reviews = useEffect(state => state.reviews)

    useEffect(()=>{
        dispatch(getProduct(id))
    }, [])

    return (
        <div>
            <img src={product.img}/>
            <Carrousel/>
            <h1 id="title">{product.title}</h1>
            <div id="resume">
                {product.resume}
            </div>
            <div id="description">
                {product.detail}
            </div>
            <ShowReviews reviews={reviews}/>
        </div>
    )
}