import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:9000/brand/"

export const CreateBrand = () => {
    const [codigo, setCodigo] = useState("")
    const [nombre, setNombre] = useState("")

    const navigate = useNavigate()

    //crear nuevo registro/brando
    const crear = async (e) => {
        e.preventDefault()
        await axios.post(url, {
            code: codigo,
            name: nombre,
        })
        navigate("/brand")
    }

    return (
        <>
            <h3>Agregar Marca</h3>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <form onSubmit={crear}>
                        <div className="mb-3">
                            <label className="form-label">Código</label>
                            <input
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                            <small className="text-muted">Ejemplo "000"</small>
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
                        <button type="submit" className="btn btn-success">Agregar marca</button>

                    </form>
                </div>
            </div>
        </>
    )
}
