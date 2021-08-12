import {withFirebase} from '../../FireBase/index'
import './google.css';
import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getGoogleUser, clearUser} from '../../../redux/actions/user/index';
import {LogInUser} from '../../../redux/actions/login/index';
import * as ROUTES from '../../../routes';


const GoogleButton = (props) => {
    return (<div className='google-btn'>
        <RenderButton props={props}/>
    </div>)
}



const GoogleBase = (props) => {
    const dispatch = useDispatch();
    const storeUser = useSelector(state=>state.userReducer.user);


    function handleGoogle(e) {

        // console.log('Firebase: ')
        // console.log(Firebase)
        // console.log('app:  ' , app)

        

        props.props.firebase
            .doSignInWithGoogle()
            .then(credentials => {

                console.log(credentials)
                //capturo datos con credentials.additionalUserInfo.profile  .email o .family_name o .given_name
                var user = {
                    id: credentials.user.uid,
                    email: credentials.additionalUserInfo.profile.email,
                    first_name: credentials.additionalUserInfo.profile.given_name,
                    last_name: credentials.additionalUserInfo.profile.family_name,
                    user_name: 'no especificado',
                    address: 'no especificado',
                    province: 'no especificado',
                    location: 'no especificado',
                    country: 'no especificado'
                }
                //voy a tener que implementar una action especifica para esto =(
                    dispatch(getGoogleUser(user))

            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        // console.log('esto es user:  ' + user)
        if(storeUser.active!==undefined) {
    
    
            //verifica el estado active del usuario
    
              if(storeUser.active===true) {
                //verifica si es admin
                if(storeUser.isAdmin===true) {
                  sessionStorage.setItem("pg_merceria" , ('admin-'+storeUser.id))
                  props.props.history.push(ROUTES.HOME);
                }else {
    
                  //setea el id del usuario al sessionStorage
                  sessionStorage.setItem("pg_merceria", storeUser.id)
                  props.props.history.push(ROUTES.HOME);
    
                }
                dispatch(LogInUser(storeUser.email))
              }else {
                //si esta inactivo arroja un mensaje
                dispatch(clearUser())
                alert('El usuario ha sido inhabilitado por el administrador')
                props.props.history.push('/')
    
              }
    
        } else {
          //si user es guest, setea la session a guest
          sessionStorage.setItem("pg_merceria", 'guest')
          // dispatch(clearUser())
        }
    
      },[storeUser])

    return (
    <div>
    <button onClick={(e) =>handleGoogle(e)}>
        iniciar sesion con Google
    </button>

    </div>)
}

const RenderButton = withFirebase(GoogleBase)

export default GoogleButton;

export {RenderButton, GoogleButton};