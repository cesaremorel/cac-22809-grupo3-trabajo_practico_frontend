import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const url = "http://localhost:9000/brand/"

const ShowBrands = () => {

    const [brands, setBrand] = useState([])

    useEffect(() => {
        getBrands()
    }, [])

    const getBrands = async () => {
        const res = await axios.get(url)
        setBrand(res.data)
    }

    const deleteBrand = async (id) => {
        await axios.delete(`${url}${id}`)
        getBrands()
    }

    return (
        <>
            <div className='row '>
                <div className="col-md-3 offset-md-9">
                    <Link to='/brand/create' className='btn btn-primary mt-4 mb-4 d-block'><i className="fas fa-plus" aria-hidden="true"></i> Agregar marca
                    </Link>
                </div>
            </div>
            <table className="table table-striped table-hover">
            <tbody>
                {brands.map((brand) => (
                    <tr key={brand.id}>
                        <td className='col-sm-12 col-md-9'>
                            <p className="mb-0">Marca: <strong>{brand.name}</strong> (id: {brand.id})</p>
                            <p className="mb-0 small text-muted"><small>Código {brand.code}</small></p>
                        </td>
                        <td className='col-sm-12 col-md-3 gx-5 text-center'>
                            <Link to={`/brand/edit/${brand.id}`} className='mx-1 btn btn-outline-primary'><i className='fas fa-edit'></i></Link>
                            <Link to='#' onClick={() => deleteBrand(brand.id)} className='mx-2 btn btn-outline-danger'><i className='fas fa-trash'></i></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    )

}

export default ShowBrands