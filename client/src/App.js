import React from 'react';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
// import ImageUpLoader from './components/ImageUpLoader/ImageUpLoader'
import FileUpload from './components/FileUploader/FileUploader';
import ProductCreation from './components/ProductCreation/ProductCreation';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/uploadPhoto' component={FileUpload} />
      <Route path='/productCreation' component={ProductCreation} />
    </React.Fragment>
  )
}

export default App
