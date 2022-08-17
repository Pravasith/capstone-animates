import "./App.css"
import Layout from "./components/Layout"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { useReducer } from "react"
import userReducer from "./reducers/userReducer"
import AppContext from "./contexts/AppContext"
import Settings from "./components/Settings"
import Login from "./components/Login"
import Register from "./components/Register"

const RoutesComp = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Layout>
    </BrowserRouter>
)

function App() {
    const initialState = {
        user: {
            name: null,
            pp: "https://i.pinimg.com/736x/c3/e4/24/c3e424e35083c15a4bd106c46fd051f5.jpg",
        },
    }

    const [globalState, dispatch] = useReducer(userReducer, initialState)

    return (
        <div className="App">
            <AppContext.Provider value={{ globalState, dispatch }}>
                <RoutesComp />
            </AppContext.Provider>
        </div>
    )
}

export default App
