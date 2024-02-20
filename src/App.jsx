import './app.css';
import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';


function App(){
  return (

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='create' element={<Create/>}></Route>
  <Route path='update' element={<Update/>}></Route>
  <Route path='read' element={<Read/>}></Route>
</Routes>

);
}
export default App