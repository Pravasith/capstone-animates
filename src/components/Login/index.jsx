import { useContext, useEffect } from "react"
import AppContext from "../../contexts/AppContext"
import { useModal } from "../../hooks/useModal"

const Login = props => {
    const { globalState, dispatch } = useContext(AppContext)

    const data = {
        title: "Login to VideoFlix",
        labels: [
            {
                name: "username",
                title: "Enter Username",
            },
            {
                name: "password",
                title: "Enter password",
            },
        ],
        submitHandler: values => {
            dispatch({
                type: "USER_LOGGED_IN",
                payload: { fullName: values.username },
            })
        },
        onCloseModal: () => {
            dispatch({
                type: "LOGIN_CLICKED",
                payload: false,
            })
        },
    }

    const { Modal, openModal } = useModal()

    useEffect(() => {
        if (globalState.showLogin) openModal()
    }, [globalState.showLogin])

    return (
        <>
            <Modal {...data} />
        </>
    )
}

export default Login
