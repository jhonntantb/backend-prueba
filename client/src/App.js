import React from 'react';
import Home from './components/Home/Home';
import {Route} from 'react-router-dom';
// import ImageUpLoader from './components/ImageUpLoader/ImageUpLoader'
import FileUpload from './components/FileUploader/FileUploader';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home}/>
      <Route path='/uploadPhoto' component={FileUpload}/>
    </React.Fragment>
  )
}

export default App
