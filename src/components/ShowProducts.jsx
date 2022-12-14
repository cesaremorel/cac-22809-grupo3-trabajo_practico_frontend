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
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <Link to='/create' className='btn btn-light mt-4 mb-4 d-block'><i class="fas fa-plus" aria-hidden="true"></i> CREAR REGISTRO 
                    </Link>

                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Id</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Brand Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.code}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand_id}</td>
                                    <td>
                                        <Link to = {`/edit/${product.id}`} className='btn btn-success'><i className='fas fa-edit'></i></Link>
                                        <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'><i className='fas fa-trash'></i></button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default ShowProducts