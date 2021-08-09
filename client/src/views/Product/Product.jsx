import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect} from "react"
import { getProduct } from "../../redux/actions/product/index"
import ShowReviews from "../../components/ShowReviews/ShowReviews"
import Carrousel from '../../components/Carrousel/Carrousel'
import { Card, CardBody, CardSubtitle, CardTitle, CardText} from "reactstrap"
import "./Product.css"

export default function Product ({match}){
    const [content, setContent] = useState({})
    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer.product)
    //const reviews = useEffect(state => state.reviews)
    const reviews = [
        {score: 4, description: "Me parecio un gran producto", date: "07/06/2021"},
        {score: 5, description: "Lo mejor", date: "04/06/2021"},
        {score: 2, description: "Malisimo", date: "03/06/2021"}
    ]

    useEffect(()=>{
        console.log(match.params.id)
        dispatch(getProduct(match.params.id))
    }, [])
    console.log("Productooooooooooooooo")
    console.log(product)
    return (
        product ?
        <div className='main-container'>
            <div className='card-container'>
                    <Card fluid>
                        <CardBody >
                        <CardTitle className='product-title'>{product.title}</CardTitle>
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
            <ShowReviews reviews={reviews}/>
        </div>
        :
        <div></div>
    )
}