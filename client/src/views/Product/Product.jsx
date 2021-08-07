import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect} from "react"
import { getProduct } from "../../redux/actions/product/index"
import ShowReviews from "../../components/ShowReviews/ShowReviews"
import Carrousel from '../../components/Carrousel/Carrousel'

export default function Product (id){
    const [content, setContent] = useState({})
    const dispatch = useDispatch();
    //const product = useEffect(state => state.product)
    //const reviews = useEffect(state => state.reviews)
    const product = {}
    const reviews = [
        {score: 4, description: "Me parecio un gran producto", date: "07/06/2021"}
    ]

    useEffect(()=>{
        dispatch(getProduct(id))
    }, [])

    return (
        <div>
            
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            <Carrousel/>
            <h1 id="title">TITULO</h1>
            <div id="resume">
                -resumen
                -resumen
                -resumen
            </div>                                            
            <div id="description">
                descripcion
            </div>
            
            <ShowReviews reviews={reviews}/>
        </div>
    )
}