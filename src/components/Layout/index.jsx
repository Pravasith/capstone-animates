import Footer from "./Footer"
import Header from "./Header"
import Login from "../Login"
import Register from "../Register"
import "./index.css"

const Layout = props => {
    return (
        <div className="layout-container">
            <Header />
            <div className="pt-36">{props.children}</div>
            <Login />
            <Register />
            <Footer />
        </div>
    )
}

export default Layout
