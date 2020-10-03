import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="nav-menu d-none d-lg-block ml-auto">
            <ul>
                <li className={router.pathname == "/" ? "active" : ""}><a href="/">Home</a></li>
                <li className={router.pathname == "/about" ? "active" : ""}><a href="/about">About</a></li>
                <li className={router.pathname == "/services" ? "active" : ""}><a href="/services">Services</a></li>
                <li className={router.pathname == "/portfolio" ? "active" : ""}><a href="/portfolio">Portfolio</a></li>
                <li className={router.pathname == "/contact" ? "active" : ""}><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};