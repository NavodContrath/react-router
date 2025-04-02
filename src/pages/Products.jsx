import products from "../data/products"
import { Link } from "react-router-dom"
export default function Products() {
    return (
        <>
            <main className="my-5">
                <section>
                    <div className="jumbo mb-5 mt-3 ">
                        <div className="container bg-dark p-5 border">
                            <h1>What we offer...</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla vero atque, voluptatum ducimus delectus laboriosam incidunt voluptas maxime debitis ab hic similique ex mollitia veritatis animi optio aut explicabo molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta in, quam quaerat perferendis, doloribus esse eos culpa saepe eum fugiat doloremque repellat architecto quas, a dolor? Eveniet at dolor cupiditate?
                            </p>
                            <button className="btn btn-outline-success" type="button">Go to shop..</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container border p-3">
                        <div className="g-3 row">
                            {
                                products.map(prod => {
                                    return (
                                        <div className="col-3" key={prod.id}>
                                            <div className="card">
                                                <div className="card-head p-3">
                                                    <h3>{prod.title}</h3>
                                                </div>
                                                <div className="card-body">
                                                    <p>{prod.price} $</p>
                                                    <Link to={`/products/${prod.id}`} className="btn btn-success">
                                                        Buy now..
                                                    </Link>
                                                </div>
                                                <div className="card-foot p-3">
                                                    <p>{prod.description}</p>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}