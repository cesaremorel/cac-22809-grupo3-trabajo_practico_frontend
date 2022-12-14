import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const productsEndpoint = "http://localhost:9000/product/"

export const CreateProduct = () => {
    const [codigo, setCodigo] = useState("")
    const [nombre, setNombre] = useState("")
    const [marca, setMarca] = useState("")

    const navigate = useNavigate()

    //crear nuevo registro/producto
    const create = async (e) => {
        e.preventDefault()
        await axios.post(productsEndpoint, {
            code: codigo,
            name: nombre,
            brandId: marca
        })
        navigate("/")
    }
    return (
        <>
            <h3>Agregar producto</h3>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <form onSubmit={create}>
                        <div className="mb-3">
                            <label className="form-label">Código</label>
                            <input
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                            <small className="text-muted">Ejemplo "000-00-00123"</small>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
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
                                onChange={(e) => setMarca(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-success">Crear producto</button>

                    </form>
                </div>
            </div>
        </>
    )
}
