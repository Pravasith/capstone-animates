import Icon from "../UI/Icon"

import upload from "../../assets/images/upload.webp"
import send from "../../assets/images/send.webp"

import Button from "../UI/Button"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import { useState } from "react"
import { useForm } from "../../hooks/useForm"
import api from "../../services/api"
import { API_URLS } from "../../services/routes"

const PostNew = props => {
    const { globalState } = useContext(AppContext)

    const { values, handler } = useForm({})

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
                        .join("upload/c_limit,h_1000,w_800/")
                )
            }
        }
    )

    const uploadHandler = () => {
        widget.open()
    }

    const postHandler = () => {
        const request = {
            imageUrl: image,
            description: values.post,
            email: globalState.user?.email,
        }

        api.POST(API_URLS.NEW_POST, request)
            .then(response => {
                if (response.error) {
                    setMessage(response.message)
                } else {
                    window.location.replace("/")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="flex-row-north w-full border-b-2 border-black">
            <div
                onClick={() => {
                    window.location.replace("/user/" + globalState.user?.id)
                }}
                className="hover:scale-105"
            >
                <Icon src={globalState.user?.pp} />
            </div>

            <div className="w-full ml-2 flex-col-north ">
                <textarea
                    onChange={handler}
                    name="post"
                    rows={2}
                    placeholder={"What's on your mind?"}
                    className="border-2 mx-1 py-2 px-4 rounded-3xl w-full"
                />

                {image && (
                    <div>
                        <img
                            className="image mt-4 border-4 border-red-400 rounded-2xl"
                            src={image}
                        />
                    </div>
                )}

                {!!message && (
                    <p className="bg-red-500 px-5 py-2 text-white">{message}</p>
                )}

                <div className="w-full flex-row-spaced my-4">
                    {!image && (
                        <Button
                            onClick={uploadHandler}
                            iconSrc={upload}
                            text={"Upload"}
                        />
                    )}
                    <Button
                        onClick={postHandler}
                        iconSrc={send}
                        text={"Post"}
                    />
                </div>
            </div>
        </div>
    )
}

export default PostNew
