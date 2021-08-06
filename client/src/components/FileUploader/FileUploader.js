import React, { useState } from 'react';
// import * as firebase from 'firebase/app';
import firebase from "firebase";
// import 'firebase/<PACKAGE>'; 
import firebaseConfig from '../FireBase/FBconfig';



// export default function FileUpload(props) {
//     var [status, setStatus] = useState({ uploadValue: 0, picture: null });



//     // if (!firebase.apps.length) {
//     //     const firebaseApp = firebase.initializeApp(firebaseConfig);

//     //     const db = firebaseApp.firestore();

//     //  }else {
//     //     firebase.app(); // if already initialized, use that one
//     //  }


//     function handleUpload(e) {
//         var file = e.target.files[0];
//         var storageRef = firebase.storage().ref('images/' + file.name);
//         const task = storageRef.put(file)

//         var file = e.target.files

//         var storageRef = firebase.storage().ref('images/' + file.name);
//         const task = storageRef.put(file)

//         task.on('state_changed',
//             function progress(snapshot) {
//                 var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 setStatus({ uploadValue: percentage });
//             },
//             function error(err) {
//                 if (err.message) {
//                     return err.message;
//                 } else {
//                     return 'An error ocurred'
//                 }
//             },
//             async function complete() {
//                 setStatus({
//                     uploadValue: 100,
//                     picture: await storageRef.getDownloadURL()
//                 })
//                 console.log('File Uploaded Succesfully');
//                 return status.picture
//             }
//         )
//     }

//     return (
//         <div>
//             <progress value={status.uploadValue} max="100"></progress>
//             <br />
//             <input type='file' multiple onChange={handleUpload} />
//             <br />
//             <img width='200' height='170' src={status.picture} alt="" />
//         </div>
//     )

// }

const ReactFirebaseFileUpload = ({ setImages, images }) => {
    // const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };

    const handleUpload = () => {
        const promises = [];
        images.map((image) => {
            const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
            promises.push(uploadTask);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    await firebase.storage()
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((urls) => {
                            setUrls((prevState) => [...prevState, urls]);
                            //ojooo
                            //aqui tiene que ir el dispatch de las imagenes
                        });
                }
            );
        });

        Promise.all(promises)
            .then(() => console.log("All images uploaded"))
            .catch((err) => console.log(err));
    };

    console.log("images: ", images);
    console.log("urls", urls);




    return (
        <div className="container">
            <progress value={progress} max="100" />
            <br />
            <br />
            <input className="btn btn-" type="file" multiple onChange={handleChange} />
            <button className="btn btn-info" onClick={handleUpload}>Upload</button>
            <br />
            {urls.map((url, i) => (
                <div key={i}>
                    <a href={url} target="_blank">
                        {url}
                    </a>
                </div>
            ))}
            <br />
            {urls.map((url, i) => (
                <img
                    key={i}
                    style={{ width: "500px" }}
                    src={url || "http://via.placeholder.com/300"}
                    alt="firebase-image"
                />
            ))}


        </div>
    );
};

export default ReactFirebaseFileUpload;
