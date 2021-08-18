import {withFirebase} from '../../FireBase/index'
import './google.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getGoogleUser, clearUser, getUser} from '../../../redux/actions/user/index';
import {LogInUser} from '../../../redux/actions/login/index';
import * as ROUTES from '../../../routes';
import { useHistory } from 'react-router-dom';


const GoogleButton = (props) => {

  

    const history=useHistory();
    return (<div className='google-btn'>
        <RenderButton props={props} history={history}/>
    </div>)
}



const GoogleBase = (props) => {
  const [userok, setUserOk] = useState()
    const {history}=props
    const dispatch = useDispatch();
    const storeUser = useSelector(state=>state.userReducer.user);

  // console.log('props: ' , props)
    function handleGoogle(e) {

        // console.log('Firebase: ')
        // console.log(Firebase)
        // console.log('app:  ' , app)

        

        props.firebase
            .doSignInWithGoogle()
            .then(credentials => {

                console.log(credentials)
                //capturo datos con credentials.additionalUserInfo.profile  .email o .family_name o .given_name
                var user = {
                    id: credentials.user.uid,
                    email: credentials.additionalUserInfo.profile.email,
                    first_name: credentials.additionalUserInfo.profile.given_name,
                    last_name: credentials.additionalUserInfo.profile.family_name,
                    user_name: 'fede',
                    address: 'no especificado',
                    province: 'no especificado',
                    location: 'no especificado',
                    country: 'no especificado'
                }
                //voy a tener que implementar una action especifica para esto =(
                    
                    dispatch(getGoogleUser(user))
                    setUserOk(user)
            })
            .catch(err=>alert(err.message))
    }

    useEffect(()=>{
      if(userok){
        dispatch(getUser(userok.id))
      }
      

    },[userok])


    useEffect(()=>{
        // console.log('esto es user:  ' + user)
        
        if(storeUser.active!==undefined) {
    
    
            //verifica el estado active del usuario
    
              if(storeUser.active===true) {
                //verifica si es admin
                if(storeUser.isAdmin===true) {
                  localStorage.setItem("pg_merceria" , (storeUser.id))
                  localStorage.setItem("admin" , storeUser.email)
                  history.push('/');
                }else {
    
                  //setea el id del usuario al sessionStorage
                  localStorage.setItem("pg_merceria", storeUser.id)
                  localStorage.setItem("admin" , null)
                  history.push('/');
    
                }
                dispatch(LogInUser(storeUser.email))
              }else {
                //si esta inactivo arroja un mensaje
                dispatch(clearUser())
                alert('El usuario ha sido inhabilitado por el administrador')
                history.push('/')
                
              }
    
        } else {
          //si user es guest, setea la session a guest
          localStorage.setItem("pg_merceria", 'guest')
          // dispatch(clearUser())
        }
    
      },[storeUser])

    return (
    // <div>
    // <button onClick={(e) =>handleGoogle(e)}>
    //     iniciar sesion con Google
    // </button>

    // </div>)
    <div className="container text-center">
  <a
    className="btn btn-outline-dark"
    role="button"
    style={{ textTransform: "none" }}
    onClick={(e) =>handleGoogle(e)}
  >
    <img
      width="20px"
      height= "20px"
      style={{ marginBottom: 3, marginRight: 5 }}
      alt="Google sign-in"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
      
    />
    Login with Google
  </a>
</div>

    )
}

const RenderButton = withFirebase(GoogleBase)

export default GoogleButton;

export {RenderButton, GoogleButton};