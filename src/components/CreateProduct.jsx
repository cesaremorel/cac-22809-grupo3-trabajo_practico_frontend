import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:9000/product/"

export const CreateProduct =()=>{
    const [codigo, setCodigo] = useState("")
    const [nombre, setNombre] = useState("")
    const [marca, setMarca] = useState("")

    const navigate = useNavigate()

    //crear nuevo registro/producto
    const crear = async (e)=>{
        e.preventDefault()
        await axios.post(url, {
            code: codigo,
            name: nombre,
            brand_id: marca
        })
        navigate("/")
    }

    return (
        <div>
            <h3>Nuevo Producto</h3>
            <form onSubmit={crear}>
            <div className="mb-3">
                <label className="form-label">Código</label>
                <input 
                value={codigo}
                onChange={(e)=>setCodigo(e.target.value)}
                type="text"
                className="form-control"
                />
                </div>

                <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input 
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                type="text"
                className="form-control"
                />
                </div>

                <div className="mb-3">
                <label className="form-label">Marca</label>
                <input 
                type="text" 
                className="form-control" 
                value={marca}
                onChange={(e)=>setMarca(e.target.value)}
                />
                </div>

            <button type="submit" className="btn btn-success">CREAR</button>
            
            
            </form>
            </div>
        
    )
}
