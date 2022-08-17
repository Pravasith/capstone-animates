import Footer from "./Footer"
import Header from "./Header"
import "./index.css"

import { useLocation } from "react-router-dom"

const Layout = props => {
    const showHeadersAndFooters = !useLocation().pathname.includes(
        "register" || "login"
    )

    return (
        <div className="layout-container">
            {showHeadersAndFooters && <Header />}
            <div className="pt-36">{props.children}</div>

            {showHeadersAndFooters && <Footer />}
        </div>
    )
}

export default Layout
