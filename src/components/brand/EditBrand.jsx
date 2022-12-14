import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const url = "http://localhost:9000/brand/"

export const EditBrand = () => {
    const [codigo, setCodigo] = useState("")
    const [nombre, setNombre] = useState("")

    const navigate = useNavigate()

    const { id } = useParams()

    //Editar/Actualizar registro

    const update = async (e) => {
        e.preventDefault()
        await axios.put(url + id, {
            code: codigo,
            name: nombre,
        })
        navigate("/brand")
    }

    useEffect(() => {
        getBrandById()
    }, [])

    const getBrandById = async () => {
        const res = await axios.get(url + id)
        setCodigo(res.data.code)
        setNombre(res.data.name)
    }
    return (
        <div>
            <h3>Editar Marca</h3>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <form onSubmit={update}>
                        <div className="mb-3">
                            <label className="">Código</label>
                            <input
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="">Nombre</label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                type="text" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-success">Actualizar marca</button>
                    </form>
                </div>
            </div>
        </div>
    )
}