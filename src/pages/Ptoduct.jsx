import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

export default function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const foundProduct = products.find(prod => prod.id === Number(id))
        setProduct(foundProduct)
    }, [id])

    return (
        <>
            <main className="my-5">
                <section>
                    <div className="container border p-3">
                        <h2 className='border-bottom pb-3'>{product.title}</h2>
                        <div className="displayer my-5">
                            <div className="card m-auto" style={{ width: '18rem' }}>
                                <img src="https://picsum.photos/id/29/4000/2670" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted ">{product.price}$</h6>
                                    <p className="card-text">{product.description}</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate(-1)} className='btn btn-success'>
                            <i class="bi bi-arrow-left-short"></i>
                        </button>
                    </div>
                    <div className='container border'>
                        <h2>See more..</h2>
                        <ul>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                            <li>Product ...</li>
                        </ul>

                    </div>

                </section>
            </main>
        </>
    )
}