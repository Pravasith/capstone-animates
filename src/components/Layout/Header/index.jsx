import "./index.css"

import SearchIcon from "../../../assets/images/search.webp"
import noelle from "../../../assets/images/noelle.webp"

import Icon from "../../UI/Icon"
import TextArea from "../../UI/TextArea"
import { useContext } from "react"
import AppContext from "../../../contexts/AppContext"

import { Link } from "react-router-dom"

const Header = () => {
    const { globalState, dispatch } = useContext(AppContext)

    const onLogin = () => {
        dispatch({ type: "LOGIN_CLICKED", payload: true })
    }

    const onSignUp = () => {
        dispatch({ type: "SIGNUP_CLICKED", payload: true })
    }

    const onLogout = () => {
        dispatch({
            type: "USER_LOGGED_IN",
            payload: { fullName: "" },
        })
    }

    return (
        <div className="header-container fixed w-full bg-white">
            <div className="flex-col-center w-full">
                <div className="flex-row-spaced w-full  border-black border-b-2">
                    <div className="flex-row-center px-4 py-1">
                        <h3>Animates</h3>
                    </div>

                    <div className="flex-row-center px-4 py-1">
                        <Icon src={SearchIcon} />
                        <div className="w-full">
                            <TextArea
                                rows={1}
                                placeholder={"What's on your mind?"}
                            />
                        </div>
                    </div>

                    <div className="flex-row-center px-4 py-1">
                        <Icon src={globalState.userProfile.thumbnail} />
                        <p className="p-4">
                            {globalState.userProfile.fullName}
                        </p>
                    </div>
                </div>

                <div className="flex-row-spaced w-full  border-white border-b-2">
                    <div className="flex-row-center w-full">
                        <h3 className="px-4 py-1 hover:underline cursor-pointer">
                            <Link to="/">{"Home"}</Link>
                        </h3>

                        <h3 className="px-4 py-1 hover:underline cursor-pointer">
                            <Link to="/settings">{"Settings"}</Link>
                        </h3>

                        {!globalState.userProfile.fullName && (
                            <h3
                                onClick={
                                    globalState.userProfile.fullName
                                        ? onLogout
                                        : onSignUp
                                }
                                className="px-4 py-1 hover:underline cursor-pointer"
                            >
                                {"Register"}
                            </h3>
                        )}

                        <h3
                            onClick={
                                globalState.userProfile.fullName
                                    ? onLogout
                                    : onLogin
                            }
                            className="px-4 py-1 hover:underline cursor-pointer"
                        >
                            {globalState.userProfile.fullName
                                ? "Logout"
                                : "Login"}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
