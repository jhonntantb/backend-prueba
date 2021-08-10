import { Link } from "@material-ui/core";
import { ListGroupItem } from "reactstrap";

export default function CartProduct({content}){
    return (
        <ListGroupItem tag="button" action>
            <Link to={"/product/" + content.id}>
                <img src={content.productimages[0].url} height="100px" width="100px"/>
                {content.title + "   "}
                ${content.price}
            </Link>
        </ListGroupItem>
    )
}