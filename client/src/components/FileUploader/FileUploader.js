import React, { useState} from 'react';
// import * as firebase from 'firebase/app';
import firebase from "firebase";
// import 'firebase/<PACKAGE>'; 
import firebaseConfig from './FBconfig';



export default function FileUpload (props) {
    var [status, setStatus] = useState({uploadValue: 0, picture: null});

    

    if (!firebase.apps.length) {
        const firebaseApp = firebase.initializeApp(firebaseConfig);

        const db = firebaseApp.firestore();
        
     }else {
        firebase.app(); // if already initialized, use that one
     }
     

    function handleUpload (e) {
        var file= e.target.files[0];
        var storageRef = firebase.storage().ref('images/' + file.name);
        const task =storageRef.put(file) 

        task.on('state_changed',
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
                setStatus( { uploadValue : percentage } );
            },
            function error (err) {
                if(err.message) {
                    return err.message;
                }else {
                    return 'An error ocurred'
                }
            },
            async function complete() {
                setStatus({
                    uploadValue: 100,
                    picture:await storageRef.getDownloadURL()
                })
                console.log('File Uploaded Succesfully');
                return status.picture;
            }
        )
    }

    return (
        <div>
            <progress value={status.uploadValue} max="100"></progress>
            <br/>
            <input type='file'onChange={handleUpload}/>
            <br/>
            <img width='200' height='170' src={status.picture} alt=""/>
        </div>
    )

}