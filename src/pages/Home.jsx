export default function Home() {
    return (
        <>
            <main className="my-5">
                <section>
                    <div className="jumbo mb-5 mt-3 ">
                        <div className="container bg-dark p-5 border">
                            <h1>Welcome!</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla vero atque, voluptatum ducimus delectus laboriosam incidunt voluptas maxime debitis ab hic similique ex mollitia veritatis animi optio aut explicabo molestiae?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta in, quam quaerat perferendis, doloribus esse eos culpa saepe eum fugiat doloremque repellat architecto quas, a dolor? Eveniet at dolor cupiditate?
                            </p>
                            <button className="btn btn-outline-success" type="button">Register now!</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="description">
                        <div className="container row justify-content-between m-auto">
                            <div className="col-6">
                                <div className="card">
                                    <img src="https://picsum.photos/id/29/4000/2670" className="p-3" width={"100%"} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card p-3">
                                    <div className="card-head p-3 border-bottom">
                                        <h1>Where the magic happens</h1>
                                    </div>
                                    <div className="card-body p-2 mt-3">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas numquam, expedita a beatae aperiam dolore temporibus, nemo quibusdam, asperiores nam iusto dolores doloremque quam obcaecati deleniti nesciunt necessitatibus ipsam!</p>
                                        <form action="" className="my-5">
                                            <input type="email" name="user-mail" id="user-mail" className="btn border-light" />
                                            <button type="submit" className="btn btn-outline-success ">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}