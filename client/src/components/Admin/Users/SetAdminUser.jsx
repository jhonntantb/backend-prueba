import { useDispatch } from "react-redux";
import { updateUser, getAllUser } from "../../../redux/actions/user/index";
import "./ButtonUsers.css";

export default function SetAdminUser(props) {
  const dispatch = useDispatch();

  var users = props.users;
  var setChanged = props.setChanged;
  var changed = props.changed;
  console.log("changed es: ", changed);
  var aux = [];

  function toogleAdmin(e, users) {
    users.forEach((u) => {
      aux.push({ id: u.id, changes: { isAdmin: !u.isAdmin } });
    });
    dispatch(updateUser(aux));
    setChanged(!changed);
    console.log("changed AHORA ES es: ", changed);
    aux = [];
  }

  return (
    <div>
      <button id="buttonusers" onClick={(e) => toogleAdmin(e, users)}>
        Otorgar / Quitar Permisos de Administrador
      </button>
    </div>
  );
}

// export default function BannAdminUser (props) {

//     const dispatch=useDispatch()

//     var users=props.users;
//     var setChanged=props.setChanged;
//     var changed=props.changed
//     console.log('changed es: ' , changed)
//     var aux =[];
//         function toogleAdmin (e, users) {

//             users.forEach(u => {
//                 aux.push({id: u.id, changes:{isAdmin:!u.active}})
//             });
//             dispatch(updateUser(aux))
//             setChanged(!changed)
//             console.log('changed AHORA ES es: ' , changed)
//         }

//     return (
//         <div>

//             <button onClick={e=> toogleActive(e, users)}>
//                 Habilitar/Inhabilitar Usuarios
//                 </button>
//         </div>
//     )
// }
