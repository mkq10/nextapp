export default function Header () {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">

            <h1 className="logo"><a href="index.html">Sailor</a></h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

            <nav className="nav-menu d-none d-lg-block ml-auto">

                <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>

                </ul>

                </nav>
                {/* <!-- .nav-menu --> */}

            </div>
        </header>
    );
};