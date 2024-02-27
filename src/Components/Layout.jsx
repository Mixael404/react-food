import { Link, Outlet } from "react-router-dom"
import Footer from './Footer'
export default function Header() {
    const name = "Iron"
    return (
        <>
            <header>
                <nav className="light-blue darken-1">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">React Menu Catalog</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/contacts">Repo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className="container content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}