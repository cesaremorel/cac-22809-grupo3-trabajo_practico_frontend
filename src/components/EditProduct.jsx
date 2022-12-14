import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const url = "http://localhost:9000/product/"

export const EditProduct=()=>{
    const [codigo, setCodigo] = useState("")
    const [nombre, setNombre] = useState("")
    const [marca, setMarca] = useState("")

    const navigate = useNavigate()

    const{id} = useParams()

    //Editar/Actualizar registro

    const update = async(e)=>{
        e.preventDefault()
        await axios.put(url+id,{
            code: codigo,
            name: nombre,
            brand_id: marca
        })
        navigate("/")
    }

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async()=>{
        const res = await axios.get(url+id)
        setCodigo(res.data.code)
        setNombre(res.data.name)
        setMarca(res.data.brand_id)

    }
    return(
        <div>
            <h3>Actualizar Registro</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="">Código</label>
                    <input 
                    value={codigo}
                    onChange={(e)=>setCodigo(e.target.value)}
                    type="text" className="form-control" />
                    </div>

                <div className="mb-3">
                    <label className="">Nombre</label>
                    <input 
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    type="text" className="form-control" />
                    </div>

                <div className="mb-3">
                    <label className="">Marca</label>
                    <input 
                    value={marca}
                    onChange={(e)=>setMarca(e.target.value)}
                    type="text" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-success">ACTUALIZAR REGISTRO</button>
            </form>
        </div>
    )

}