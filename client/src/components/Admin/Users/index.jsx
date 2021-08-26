import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../../redux/actions/user/index";


import SetAdminUser from "./SetAdminUser";
import BannAdminUser from "./BannUser";
import ForcePasswordResetButton from "./ForcePSWreset";

// {id: userId, changes:{isAdmin:true}}

// este componente sirve para :
// cambiar el estado de los usuarios admin - banned
// forzar un reset de password a un usuario

export default function UsersAdmin(props) {
  const dispatch = useDispatch();
  var [usersSelected, setUsersSelected] = useState([]);
  const [changed, setChanged] = useState(false);

  const storeUsers = useSelector((state) => state.userReducer.users);



  function selectUser(e) {
    var userId = e.target.value;
    if (!e.target.checked) {
      let selecteds = usersSelected.filter((u) => u.id !== userId);
      setUsersSelected(selecteds);
    } else {
      let added = storeUsers.find((u) => u.id === userId);

      setUsersSelected([...usersSelected, added]);
    }
  }

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  useEffect(() => {
    var checkeds = document.getElementsByClassName("checkbox");

    for (let i = 0; i < checkeds.length; i++) {
      checkeds[i].checked = false;
    }
    setUsersSelected([]);
    dispatch(getAllUser());
  }, [changed]);

  useEffect(() => {}, [storeUsers]);

  return storeUsers.length > 0 ? (
    <div className="table-responsive">
      <h1 className="text-center mt-4">Control de usuarios</h1>
      <div className="table">
        <div id="tableleft" className="d-table-cell me-5">
          <div className="mt-3">
            <SetAdminUser
              users={usersSelected}
              changed={changed}
              setChanged={setChanged}
            />
          </div>

          <div className="mt-3">
            <BannAdminUser
              users={usersSelected}
              changed={changed}
              setChanged={setChanged}
            />
          </div>

          <div className="mt-3">
            <ForcePasswordResetButton
              users={usersSelected}
              changed={changed}
              setChanged={setChanged}
            />
          </div>
        </div>

        <table id="tableright" className="d-table-cell ms-5">
          <thead class="thead-warning">
            <tr>
              <th>Email</th>
              <th>Usuario</th>
              <th>Estado</th>
              <th>Administrador</th>
              <th>check</th>
            </tr>
          </thead>

          <tbody>
            {storeUsers.map((u) => (
             
             <tr key={u.id}>
                <td>{u.email}</td>
                <td>{u.last_name + " " + u.first_name}</td>
                <td>{u.active ? "Habilitado" : "Inhabilitado"}</td>
                <td>{u.isAdmin ? "Si" : "No"}</td>
                <td>
                  {u.user_name != "superuser"?<input
                    className="checkbox"
                    type="checkbox"
                    value={u.id}
                    onChange={(e) => selectUser(e)}
                    defaultChecked={false}
                  ></input> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <p className="text-dark text-center mt-4">Loading...</p>
  );
}
