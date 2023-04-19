import './Navbarstyle.css'

const Navbar = () => {
    return (
        <div>
            <nav className="sticky navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">MovieAddict</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className=" nav-link active" aria-current="page" href=""
                             style={{color: "white"}}>New Realese</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Up Coming</a>
                        </li>
                        <li><a className="nav-link btn btn-primary">Sign In</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar