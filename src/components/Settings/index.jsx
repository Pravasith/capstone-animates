import { useContext } from "react"
import { useState } from "react"
import AppContext from "../../contexts/AppContext"
import { useForm } from "../../hooks/useForm"
import api from "../../services/api"
import { API_URLS } from "../../services/routes"
import Button from "../UI/Button"

const Settings = props => {
    const { globalState, dispatch } = useContext(AppContext)
    const { values, handler } = useForm({
        firstName: globalState.user?.firstName,
        lastName: globalState.user?.lastName,
        email: globalState.user?.email,
        profilePicture: globalState.user?.pp,
    })

    const [image, setImage] = useState()

    const [message, setMessage] = useState()

    const widget = window.cloudinary.createUploadWidget(
        {
            cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
                setImage(
                    result.info.secure_url
                        .split("upload/")
                        .join("upload/c_limit,h_80,w_80/")
                )
            }
        }
    )

    const validateEmpty = values => {
        if (
            !values.firstName ||
            !values.lastName ||
            !values.email ||
            !values.profilePicture
        ) {
            return false
        }

        return true
    }

    const uploadHandler = () => {
        widget.open()
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (validateEmpty(values)) {
            const request = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                profilePicture: image || values.profilePicture,
            }

            api.PUT(API_URLS.UPDATE_USER + globalState.user?.id, request)
                .then(response => {
                    if (response.error) {
                        setMessage(response.message)
                    } else {
                        dispatch({
                            type: "USER_LOGGED_IN",
                            payload: {
                                firstName: response.body.firstName,
                                lastName: response.body.lastName,
                                email: response.body.emailId,
                                id: response.body._id,
                                pp: response.body.profilePicture,
                            },
                        })

                        window.location.reload()
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
            <h1>Settings</h1>

            <form
                className="flex-col-center my-4 w-1/3 py-4 px-8 bg-white rounded-3xl relative"
                onSubmit={handleSubmit}
            >
                <h3 className="font-bold underline">Edit your details</h3>
                <br />

                <label className="my-2 w-full">
                    {"Click on the image below to change"}
                    {
                        <div
                            onClick={uploadHandler}
                            className="w-full cursor-pointer"
                        >
                            <img
                                className="image mt-4 border-4 border-red-400 rounded-2xl"
                                src={image || globalState.user?.pp}
                            />
                        </div>
                    }
                </label>

                <label className="my-2 w-full">
                    {"First name :"}
                    <input
                        className="w-full border-4 border-blue-400"
                        name={"firstName"}
                        type="text"
                        value={values.firstName}
                        onChange={handler}
                    />
                </label>

                <label className="my-2 w-full">
                    {"Last Name :"}
                    <input
                        className="w-full border-4 border-blue-400"
                        name={"lastName"}
                        type="text"
                        value={values.lastName}
                        onChange={handler}
                    />
                </label>

                <label className="my-2 w-full">
                    {"Email :"}
                    <input
                        className="w-full border-4 border-blue-400"
                        name={"email"}
                        type="text"
                        value={values.email}
                        onChange={handler}
                    />
                </label>

                <Button className={"my-2"} type={"submit"} text={"Change"} />

                {!!message && (
                    <p className="bg-red-500 px-5 py-2 text-white">{message}</p>
                )}
            </form>
        </div>
    )
}

export default Settings
