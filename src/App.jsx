import "./App.css"
import Layout from "./components/Layout"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import { useReducer } from "react"
import userReducer from "./reducers/userReducer"
import AppContext from "./contexts/AppContext"

const RoutesComp = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
)

function App() {
    const initialState = {
        userProfile: {
            username: "noelleSilva",
            thumbnail:
                "https://i.pinimg.com/736x/c3/e4/24/c3e424e35083c15a4bd106c46fd051f5.jpg",
            fullName: "Noelle Silva",
        },
    }

    const [globalState, dispatch] = useReducer(userReducer, initialState)

    return (
        <div className="App">
            <AppContext.Provider value={{ globalState, dispatch }}>
                <Layout>
                    <RoutesComp />
                </Layout>
            </AppContext.Provider>
        </div>
    )
}

export default App
