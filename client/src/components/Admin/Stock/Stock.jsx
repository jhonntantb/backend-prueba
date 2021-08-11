import React,{ useState,useEffect,useMemo } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { useTable,useRowSelect } from 'react-table'
import { COLUMNS } from './columns'
import { getAllOffice } from "../../../redux/actions/office/index"
import { getAllProduct } from '../../../redux/actions/product'
 


function Stock() {
    const dispatch=useDispatch()
    
    useEffect(() => {
        dispatch(getAllOffice())
        dispatch(getAllProduct())
    }, [])

    const offices= useSelector(state =>state.officeReducer.offices)
    const productsAll= useSelector(state =>state.productReducer.products)

    const columns=useMemo(()=>COLUMNS,[{}])
    const data=useMemo(()=>productsAll,[{}])
    const tableInstance= useTable({
        columns,
        data,
    })

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance
    //me esta llegando office falta mapear botones para que solo selecciones una officina
    //back enviar officina con productos y stock 
    //una oficina tiene muchos productos <<>> un producto tiene muchas oficinas
    //un producto tiene muchos stocks <<>> un stock pertenece a un producto
    
    return (
        <div>
            <p>Estamos en Stock</p>
            {offices&&offices.length>0?offices.map(e=><p>{e.name}</p>):
            <p>No hay oficinas</p>}
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.headers.map((column)=>(
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))} >    
                        </tr>
                    ))}    
                </thead>
                <tbody {...getTableBodyProps()} >
                    {
                        rows.map(row=> {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} >
                                    {row.cells.map((cell)=>{
                                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    })}
                                    
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default Stock
