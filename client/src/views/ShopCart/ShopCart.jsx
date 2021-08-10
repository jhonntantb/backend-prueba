import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../redux/actions/order/index"
import ShowCartProducts from "../../components/ShopCart/ShowCartPoducts"

export default function ShopCart(){
    const products = [{
        title: "Autitos de juguete",
        price: 900,
        productimages: [{url: "https://http2.mlstatic.com/D_NQ_NP_722299-MLA46928877990_072021-O.webp"}]
    }]
    
    return (
    <div>
        <ShowCartProducts products={products}/>
    </div>
    )
}