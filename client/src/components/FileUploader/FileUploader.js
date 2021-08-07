import React, { useState } from 'react';
// import * as firebase from 'firebase/app';
import firebase from "firebase";
// import 'firebase/<PACKAGE>'; 
import firebaseConfig from '../FireBase/FBconfig';



const ReactFirebaseFileUpload = (  images, setImages ) => {
    // const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            // setImages((prevState) => [...prevState, newImage]);
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
                            setImages(urls)
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
                    style={{ width: "250px" }}
                    src={url || "http://via.placeholder.com/300"}
                    alt="firebase-image"
                />
            ))}


        </div>
    );
};

export default ReactFirebaseFileUpload;
