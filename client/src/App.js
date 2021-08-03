import React from 'react';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
// import ImageUpLoader from './components/ImageUpLoader/ImageUpLoader'
import FileUpload from './components/FileUploader/FileUploader';
import ProductCreation from './components/ProductCreation/ProductCreation';
import Login from './components/Login/Login'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/uploadPhoto' component={FileUpload} />
      <Route path='/productcreation' component={ProductCreation} />
      <Route path='/login' component={Login} />
    </React.Fragment>
  )
}

export default App
