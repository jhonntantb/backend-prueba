import { Form, Label, Input } from "reactstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CartForm(){
    const user = useSelector(state => state.userReducer.user)
    const [provincias, setProvincias] = useState([])
    const [localidades, setLocalidades] = useState([])
    const [selectProv, setSelectProv] = useState("")
    const [selectLoc, setSelectLoc] = useState("")

    useEffect(() => {
        axios.get("https://apis.datos.gob.ar/georef/api/provincias?campos=nombre&orden=nombre")
        .then(res => setProvincias(res.data.provincias))
        setSelectProv("Buenos Aires")
    }, [])

    useEffect(() => {
        axios.get("https://apis.datos.gob.ar/georef/api/localidades?campos=nombre&orden=nombre&max=1000&provincia=" + selectProv)
        .then(res => setLocalidades(res.data.localidades))
    }, [selectProv])

    const handleProvChange = (e) => {
        setSelectProv(e.target.value)
    }

    return (
        provincias ? 
        <div>
            <Form>
                <Label>Provincia</Label>
                <Input onChange={handleProvChange} type="select" name="city" id="orderCity">
                    {provincias.map(e => <option>{e.nombre}</option>)}
                </Input>
                <Label>Ciudad</Label>
                <Input type="select" name="city" id="orderCity">
                    {localidades.map(e => <option>{e.nombre}</option>)}
                </Input>
                <Label>Direccion</Label>
                <Input type="text" name="address" id="orderAddress"/>
                <Label>Codigo Postal</Label>
                <Input type="text" maxLength="4" name="postalCod" id="orderPostalCod"/>
                <Label>Numero de Telefono</Label>
                <Input type="text" maxLength="10" name="phone" id="orderPhone"/>
            </Form>
        </div>
        :
        <div>Cargando...</div>
    )
} 