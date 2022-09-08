import React from "react";
import ReactDOM from "react-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Firebase, { FirebaseContext } from "./components/FireBase/index";
import { Provider } from "react-redux";
import ConfigureStore from "./redux/store/index";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const store = ConfigureStore();
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3005";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
