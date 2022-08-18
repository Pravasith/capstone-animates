import "./App.css"
import Layout from "./components/Layout"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Home from "./components/Home"
import { useReducer } from "react"
import userReducer from "./reducers/userReducer"
import AppContext from "./contexts/AppContext"
import Settings from "./components/Settings"
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"

const RoutesComp = props => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route
                    path="/"
                    element={props.user ? <Home /> : <Navigate to="/login" />}
                />
                <Route
                    path="/settings"
                    element={
                        props.user ? <Settings /> : <Navigate to="/login" />
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/user/:id"
                    element={
                        props.user ? <Profile /> : <Navigate to="/login" />
                    }
                />
            </Routes>
        </Layout>
    </BrowserRouter>
)

function App() {
    const user = JSON.parse(localStorage.getItem("user"))

    const initialState = {
        user: {
            firstName: user?.firstName,
            lastName: user?.lastName,
            id: user?.id,
            email: user?.email,
            pp:
                user?.pp ||
                "https://res.cloudinary.com/dyvki0hhn/image/upload/c_limit,h_50,w_50/v1660778426/user_f4vklt.png",
        },
    }

    const [globalState, dispatch] = useReducer(userReducer, initialState)

    return (
        <div className="App">
            <AppContext.Provider value={{ globalState, dispatch }}>
                <RoutesComp user={user} />
            </AppContext.Provider>
        </div>
    )
}

export default App
