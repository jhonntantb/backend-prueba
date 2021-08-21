import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { useHistory} from "react-router-dom"
import { getAllOffice } from "../../../redux/actions/office/index"
import { getAllProduct } from '../../../redux/actions/product'

function SetProductOffice() {
    const dispatch=useDispatch()
    const { push } = useHistory();

    const [stock, setStock] = useState([]); //en que viene para la tabla
    const [product, setProduct] = useState([]); //lo que vamos enviar para modificar
    const [checked, setChecked] = useState([]);
    const [idOffice, setIdOffice] = useState("");

    useEffect(() => {
        dispatch(getAllOffice());
        dispatch(getAllProduct());
    }, []);

  const offices = useSelector((state) => state.officeReducer.offices);
  const productsAll = useSelector((state) => state.productReducer.products);


  const handleClickOffice = (e, id) => {
    e.preventDefault();
    setIdOffice(id);
    setCurrentPage(1);
  };

  const selectProduct = (e, id) => {
    const stockId = e.target.value;
    if (!e.target.checked) {
      const selecteds = product.filter((e) => e.id !== stockId);
      const checkeds = checked.filter((e) => e !== id);
      setChecked(checkeds);
      setProduct(selecteds);
    } else {
      let added = productsAll.find((e) => e.stocks[0].id == stockId);
      setProduct([
        ...product,
        { id: added.stocks[0].id, quantity: added.stocks[0].quantity },
      ]);
      setChecked(checked.concat([id]));
    }
  };
  const handleStockchange = (event) => {
    event.preventDefault();
    const search = productsAll.find((e) => e.stocks[0].id === event.target.id);
    const stockback = product.filter((e) => e.id !== event.target.id);
    setProduct(
      stockback.concat([
        {
          id: event.target.id,
          quantity: +search.stocks[0].quantity + +event.target.value,
        },
      ])
    );
  };
  const handleChanges = (e) => {
    dispatch(updateStock({ stocks: product }));
    //window.location.reload() en caso extremo
  };
  useEffect(() => {
        idOffice.length>0&&setStock(productsAll.filter(e=>e.stocks[0].officeId===idOffice))
    }, [idOffice])

    //agregar productos ya existentes en la central a otras oficinas y mandar stock
    //formulario : seleccionar officina
    //listar los productos que no tiene esa oficina
    //seleccionar el producto a gregar y la cantidas enviar cambios creanado new stock del mismo producto 
    //cantida a agregar

    return (
        <div>
            <h3>Agregar Productos existentes con stock a oficinas que no tengan</h3>
            {/* mapear las oficinas */}
            <h4>Productos que no tiene</h4>
            {/*maper los productos que no tiene*/}

            
        </div>
    )
}

export default SetProductOffice
