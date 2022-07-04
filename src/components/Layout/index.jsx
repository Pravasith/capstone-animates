import Footer from "./Footer"
import Header from "./Header"
import "./index.css"

const Layout = props => {
    return (
        <div className="layout-container">
            <Header />
            <div className="pt-36">{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout
