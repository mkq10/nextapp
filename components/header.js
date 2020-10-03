import Navbar from "./navbar.js";

export default function Header() {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
                <h1 className="logo"><a className="d-flex align-items-center" href="/">Sai<img src="/assets/img/logo.png" alt="" className="img-fluid"/>or</a></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
                <div className="container d-flex align-items-center">
                    <Navbar/>
                    {/* <!-- .nav-menu --> */}
                </div>
            </div>
        </header>
    );
};