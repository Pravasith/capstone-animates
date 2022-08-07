import { useContext, useEffect } from "react"
import AppContext from "../../contexts/AppContext"
import { useModal } from "../../hooks/useModal"

const Register = props => {
    const { globalState, dispatch } = useContext(AppContext)

    const data = {
        title: "Register to VideoFlix",
        labels: [
            {
                name: "username",
                title: "Enter Username",
            },
            {
                name: "fullName",
                title: "Enter Full Name",
            },
            {
                name: "password",
                title: "Enter password",
            },
        ],
        submitHandler: values => {
            dispatch({
                type: "USER_SIGNED_IN",
                payload: { fullName: values.fullName },
            })
        },
        onCloseModal: () => {
            dispatch({
                type: "SIGNUP_CLICKED",
                payload: false,
            })
        },
    }

    const { Modal, openModal } = useModal()

    useEffect(() => {
        if (globalState.showSignUp) openModal()
    }, [globalState.showSignUp])

    return (
        <>
            <Modal {...data} />
        </>
    )
}

export default Register
