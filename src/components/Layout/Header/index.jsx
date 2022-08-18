import "./index.css"

import SearchIcon from "../../../assets/images/search.webp"

import Icon from "../../UI/Icon"

import { useContext } from "react"
import AppContext from "../../../contexts/AppContext"

import { Link } from "react-router-dom"

const Header = () => {
    const { globalState, dispatch } = useContext(AppContext)

    const onLogout = () => {
        dispatch({
            type: "USER_LOGGED_OUT",
            payload: null,
        })

        window.location.replace("/login")
    }

    return (
        <div className="header-container fixed w-full bg-white">
            <div className="flex-col-center w-full">
                <div className="flex-row-spaced w-full  border-black border-b-2">
                    <div className="flex-row-center px-4 py-1 hover:underline">
                        <Link to={"/"}>
                            <h3>Animates</h3>
                        </Link>
                    </div>

                    {/* <div className="flex-row-center px-4 py-1">
                        <Icon src={SearchIcon} />
                        <div className="w-full">
                            <textarea
                                rows={1}
                                placeholder={"What's on your mind?"}
                            />
                        </div>
                    </div> */}

                    <Link to={"/settings"}>
                        <div className="flex-row-center px-4 py-1">
                            <Icon src={globalState.user?.pp} />
                            <p className="p-4">
                                {globalState.user?.firstName +
                                    " " +
                                    globalState.user?.lastName}
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="flex-row-spaced w-full  border-white border-b-2">
                    <div className="flex-row-center w-full">
                        <h3 className="px-4 py-1 hover:underline cursor-pointer">
                            <Link to="/">{"Home"}</Link>
                        </h3>

                        <h3 className="px-4 py-1 hover:underline cursor-pointer">
                            <Link to="/settings">{"Settings"}</Link>
                        </h3>

                        <h3
                            onClick={onLogout}
                            className="px-4 py-1 hover:underline cursor-pointer"
                        >
                            Logout
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
