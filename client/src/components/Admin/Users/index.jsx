import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser, updateUser } from "../../../redux/actions/user/index";
import { withFirebase } from "../../FireBase/index";

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

  //console.log("usersSelected tiene " + usersSelected.length + " elementos");

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
      //   console.log('esto es cada elemento ' , checkeds[i])
      console.log();
      checkeds[i].checked = false;
    }
    setUsersSelected([]);
    dispatch(getAllUser());
  }, [changed]);

  useEffect(() => {}, [storeUsers]);

  return storeUsers.length > 0 ? (
    <div className="container">
      <h1 className="text-center mt-4">Control de usuarios</h1>
      {/* {console.log('storeUsers[0].id: ' + storeUsers[0].id)}
            {console.log('USERSELECTED: ' + usersSelected[0])} */}
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
      <div className=" mt-4">
        <table className="table-responsive">
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
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={u.id}
                    onChange={(e) => selectUser(e)}
                    defaultChecked={false}
                  ></input>
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
