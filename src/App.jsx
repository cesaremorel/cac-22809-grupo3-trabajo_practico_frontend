
import './App.css';

//Importamos los componentes
import ShowProducts from "./components/ShowProducts"
import {EditProduct} from "./components/EditProduct"
import {CreateProduct} from "./components/CreateProduct"

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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
