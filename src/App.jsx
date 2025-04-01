

function App() {


  return (
    <>
      <header className="bg-primary py-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <h2>LOGO</h2>
            </div>
            <ul className="nav justify-content-between">
              <li className="nav-item">
                <a className="nav-link text-white" href="#" aria-current="page">Active link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Disabled link</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

    </>
  )
}

export default App
