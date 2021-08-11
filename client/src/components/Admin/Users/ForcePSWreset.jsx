import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForcePasswordResetButton = (props) => (
  <div>
    <ForcePasswordReset props={props}/>
  </div>
);



function ForcePasswordResetBase (props) {
   console.log('esto es props dentro del boton: ' , Object.keys(props))
    var users=props.props.users;
    var setChanged=props.props.setChanged;
    var changed=props.props.changed
    console.log('esto es user FUERA del hanlder ' , users)

  const handlePasswordReset = async (event, users) => {
      console.log('esto es user dentro del hanlder ' , users)
    event.preventDefault();
    let aux=[]

    users.forEach( u=> {

        aux.push(
            props.firebase
          .doPasswordReset(u.email)
          .catch(error => {
            alert('se ha producido un error: ' , error.message);
          })
        )
    })

    try{
        var forzados = await Promise.all(aux);

        if(forzados) {
            alert('Se Forzó el cambio de contraseña para los usuarios seleccionados')
        }

        setChanged(!changed)

    } catch (err) { console.log('se produjo un error en Promise.all : ' , err.message)}
   
    
    
  };


  return (
    <div>
        <button onClick={e => handlePasswordReset(e, users)}>
            Forzar Reset de Contraseña
        </button>
    </div>
  );
}


export default ForcePasswordResetButton;

const ForcePasswordReset = withFirebase(ForcePasswordResetBase);

export { ForcePasswordReset };