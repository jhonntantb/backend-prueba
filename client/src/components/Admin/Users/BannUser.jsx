import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateUser, getAllUser } from "../../../redux/actions/user/index";

export default function BannAdminUser(props) {
  const dispatch = useDispatch();

  var users = props.users;
  var setChanged = props.setChanged;
  var changed = props.changed;
  console.log("changed es: ", changed);
  var aux = [];

  function toogleActive(e, users) {
    users.forEach((u) => {
      aux.push({ id: u.id, changes: { active: !u.active } });
    });
    dispatch(updateUser(aux));
    setChanged(!changed);
    console.log("changed AHORA ES es: ", changed);
  }

  return (
    <div>
      <button
        className="btn btn btn-danger"
        onClick={(e) => toogleActive(e, users)}
      >
        Habilitar/Inhabilitar Usuarios
      </button>
    </div>
  );
}
