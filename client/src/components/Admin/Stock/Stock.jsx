import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllOffice } from "../../../redux/actions/office/index";
import { getAllProduct } from "../../../redux/actions/product";
import { updateStock } from "../../../redux/actions/stock";
import * as ROUTES from "../../../routes";
import "./Stock.css";
import "./Table.css";

function Stock() {
  const dispatch = useDispatch();
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

  useEffect(() => {
    setStock([]);
    setProduct([]);
    setChecked([]);
    setIdOffice([]);
  }, [productsAll]);
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
      //var abled=document.getElementById(id)
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
    setChecked([]);
    setProduct([]);
    dispatch(getAllProduct());
    setIdOffice("");
    push("/admin");
  };
  /*useEffect(() => {
        setStock(productsAll.filter(e=>e.stocks[0].officeId===idOffice))
    }, [idOffice])*/

  //-------------------------Paginado de Tablas------------------//
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState(10); //modificamos esto si queremos mostrar mas filas
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLmit, setMinPageNumberLmit] = useState(0);
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLmit(minPageNumberLmit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLmit(minPageNumberLmit - pageNumberLimit);
    }
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(stock.length / rows); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * rows;
  const indexOfFirstItem = indexOfLastItem - rows;
  const currentItems = stock.slice(indexOfFirstItem, indexOfLastItem);
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLmit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "activo" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  //-------------------------------------------------------------------------
  return (
    <div>
      {/* <nav
        className="navbar justify-content-start mx-3"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href={ROUTES.ADMIN}>Admin</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Stock
          </li>
        </ol>
      </nav> */}

      <br />

      <div className="table-responsive">
        <table className="table">
          <div id="tableleft" className="d-table-cell ">
            <h3 className="mx-4"> Oficinas</h3>
            {offices && offices.length > 0 ? (
              offices.map((office) => (
                <div id="buttoncategory" className="mx-2 my-2" key={office.id}>
                  <button
                    id="buttonstock"
                    onClick={(e) => handleClickOffice(e, office.id)}
                  >
                    {office.name}
                  </button>
                </div>
              ))
            ) : (
              <p>No hay oficinas</p>
            )}
          </div>

          <table
            id="tableright"
            className="d-table-cell justify-content-center"
          >
            <h3 className="text-center">Stock</h3>

            <thead>
              <tr>
                <th scope="col">check</th>
                <th scope="col">Catalogo ID</th>
                <th scope="col">Productos</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Agregar Cantidad</th>
              </tr>
            </thead>

            <tbody>
              {currentItems && currentItems.length > 0
                ? currentItems.map((e) => (
                    <tr>
                      <td>
                        <input
                          className="checkbox"
                          type="checkbox"
                          value={e.stocks[0].id}
                          onChange={(event) => selectProduct(event, e.id)}
                          defaultChecked={false}
                        />
                      </td>
                      <td>{e.catalog_id}</td>
                      <td>{e.title}</td>
                      <td>{e.stocks[0].quantity}</td>
                      <td id={e.id}>
                        <input
                          id={e.stocks[0].id}
                          type="number"
                          value={!checked.includes(e.id) ? "" : null}
                          onChange={(event) => handleStockchange(event)}
                          disabled={!checked.includes(e.id)}
                        />
                      </td>
                    </tr>
                  ))
                : null}
              {stock && stock.length > 0 ? (
                <button onClick={(e) => handleChanges(e)}>
                  Enviar cambios
                </button>
              ) : null}
            </tbody>
          </table>
        </table>
      </div>

      {/* <nav aria-label="Page navigation example" className="pageNumbers">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              prev
            </button>
          </li>
          {renderPageNumbers}
          <li className="page-item">
            <button
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              next
            </button>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Stock;
