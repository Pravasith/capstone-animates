import "./App.css"
import Layout from "./components/Layout"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"

const RoutesComp = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
)

function App() {
    return (
        <div className="App">
            <Layout>
                <RoutesComp />
            </Layout>
        </div>
    )
}

export default App
