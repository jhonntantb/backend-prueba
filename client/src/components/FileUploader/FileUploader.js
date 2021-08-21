import React, { useState } from 'react';
// import * as firebase from 'firebase/app';
import firebase from "firebase";
// import 'firebase/<PACKAGE>'; 
import { useEffect } from 'react';
import './FileUploaderButton.css'



const ReactFirebaseFileUpload = ({ storeImages, setStoreImages }) => {
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    // var aux=[]

    const handleChange2 = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const promises = [];
        images.forEach((image) => {
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
                        .then((url) => {
                            let aux = []
                            console.log(url)
                            aux.push(url)
                            setUrls(aux.concat(urls));
                        });

                }
            );


        }

        );

        Promise.all(promises)
            .then(() => {
                console.log("All images uploaded")
                console.log('URLS DENTRO DE LA PROMISE: ' + urls)
            })

            .catch((err) => console.log(err));
    };

    console.log("images: ", images);
    console.log('storeImages : ', storeImages)
    console.log("urls", urls);


    useEffect(() => {
        setStoreImages(urls)
    }, [urls])


    return (
        <div className="container">
            <progress value={progress} max="100" />
            <br />
            <br />
            <input className="btn btn-" type="file" multiple onChange={handleChange2}/>
            <button id="buttonupload" onClick={(e) => handleUpload(e)}>Upload</button>
            <br />
            {/* {urls.length>0?urls.map((url, i) => (
                <div key={i}>
                    <a href={url} target="_blank">
                        {url}
                    </a>
                </div>
            )):null} */}
            <br />
            {urls.length > 0 ? urls.map((url, i) => (
                <img
                    key={i}
                    style={{ width: "250px" }}
                    src={url || "http://via.placeholder.com/300"}
                    alt="firebase-image"
                />
            )) : null}


        </div>
    );
};

export default ReactFirebaseFileUpload;
