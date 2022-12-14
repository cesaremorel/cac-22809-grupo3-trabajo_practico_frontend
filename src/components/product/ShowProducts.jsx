import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const url = "http://localhost:9000/product/"

//mostrar todos los productos
const ShowProducts = () => {

    const [products, setProduct] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const res = await axios.get(url)
        setProduct(res.data)
    }

    //eliminar producto
    const deleteProduct = async (id) => {
        await axios.delete(`${url}${id}`)
        getProducts()
    }

    return (
        <>
            <div className='row '>
                <div className="col-md-3 offset-md-9">
                    <Link to='/create' className='btn btn-primary mt-4 mb-4 d-block'><i className="fas fa-plus" aria-hidden="true"></i> Agregar producto
                    </Link>
                </div>
            </div>
            <table className="table table-striped table-hover">
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td className='col-sm-12 col-md-9'>
                            <p className="mb-0">Producto: <strong>{product.name}</strong></p>
                            <p className="mb-0 small text-muted"><small>Código {product.code}</small></p>
                            <p className="mb-0">Marca: <strong>{product.brand.name}</strong></p>
                        </td>
                        <td className='col-sm-12 col-md-3 gx-5 text-center'>
                            <Link to={`/edit/${product.id}`} className='mx-1 btn btn-outline-primary'><i className='fas fa-edit'></i></Link>
                            <Link to='#' onClick={() => deleteProduct(product.id)} className='mx-2 btn btn-outline-danger'><i className='fas fa-trash'></i></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    )

}

export default ShowProducts