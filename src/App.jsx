
import './App.css';

//Importamos los componentes
import ShowProducts from "./components/product/ShowProducts"
import {EditProduct} from "./components/product/EditProduct"
import {CreateProduct} from "./components/product/CreateProduct"

import ShowBrands from "./components/brand/ShowBrands"
import {EditBrand} from "./components/brand/EditBrand"
import {CreateBrand} from "./components/brand/CreateBrand"



import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowProducts/>} />
        <Route path='/create' element={<CreateProduct/>} />
        <Route path='/edit/:id' element={<EditProduct/>} />
        <Route path='/brand' element={<ShowBrands/>} />
        <Route path='/brand/create' element={<CreateBrand/>} />
        <Route path='brand/edit/:id' element={<EditBrand/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
