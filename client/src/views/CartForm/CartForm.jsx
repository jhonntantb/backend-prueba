import { Form, Label, Input } from "reactstrap";
import { useSelector } from "react-redux";

export default function CartForm(){
    const user = useSelector(state => state.userReducer.user)
    return (
        <div>
            <Form>
                <Label>Provincia</Label>
                <Input type="select" name="city" id="orderCity">
                        <option>1</option>
                        <option>2</option>ç
                </Input>
                <Label>Ciudad</Label>
                <Input type="select" name="city" id="orderCity">
                    <option>1</option>
                    <option>2</option>
                </Input>
                <Label>Direccion</Label>
                <Input type="text" name="address" id="orderAddress"/>
                <Label>Numero de Telefono</Label>
                <Input type="text" maxLength="10" name="phone" id="orderPhone"/>
            </Form>
        </div>
    )
} 