import { useState } from "react"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import { useForm } from "../../hooks/useForm"
import api from "../../services/api"
import { API_URLS } from "../../services/routes"
import Button from "../UI/Button"

const Register = props => {
    const { values, handler } = useForm()
    const [message, setMessage] = useState()

    const { globalState, dispatch } = useContext(AppContext)

    const validateEmpty = values => {
        if (
            !values.firstName ||
            !values.lastName ||
            !values.email ||
            !values.password
        ) {
            return false
        }

        return true
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (validateEmpty(values)) {
            const request = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
            }

            api.POST(API_URLS.REGISTER_USER, request)
                .then(response => {
                    if (response.error) {
                        setMessage(response.message)
                    } else {
                        dispatch({
                            type: "USER_LOGGED_IN",
                            payload: {
                                name:
                                    response.body.firstName +
                                    " " +
                                    response.body.lastName,
                            },
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            setMessage("Fields cannot be empty")
        }
    }

    return (
        <div className="flex-col-center w-full">
            <h1>Welcome to animates</h1>

            <div className="register-screen w-full flex-col-center ">
                <form
                    className="flex-col-center my-4 w-1/3 py-4 px-8 bg-white rounded-3xl relative"
                    onSubmit={handleSubmit}
                >
                    <h3 className="font-bold underline">Register here</h3>
                    <br />

                    <label className="my-2 w-full">
                        {"First name :"}
                        <input
                            className="w-full border-4 border-blue-400"
                            name={"firstName"}
                            type="text"
                            value={values?.firstName}
                            onChange={handler}
                        />
                    </label>

                    <label className="my-2 w-full">
                        {"Last Name :"}
                        <input
                            className="w-full border-4 border-blue-400"
                            name={"lastName"}
                            type="text"
                            value={values?.lastName}
                            onChange={handler}
                        />
                    </label>

                    <label className="my-2 w-full">
                        {"Email :"}
                        <input
                            className="w-full border-4 border-blue-400"
                            name={"email"}
                            type="text"
                            value={values?.email}
                            onChange={handler}
                        />
                    </label>

                    <label className="my-2 w-full">
                        {"Password :"}
                        <input
                            className="w-full border-4 border-blue-400"
                            name={"password"}
                            type="text"
                            value={values?.password}
                            onChange={handler}
                        />
                    </label>

                    <Button
                        className={"my-2"}
                        type={"submit"}
                        text={"Register"}
                    />

                    {!!message && (
                        <p className="bg-red-500 px-5 py-2 text-white">
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Register
