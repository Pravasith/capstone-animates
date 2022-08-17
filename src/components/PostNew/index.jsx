import Icon from "../UI/Icon"

import upload from "../../assets/images/upload.webp"
import send from "../../assets/images/send.webp"

import TextArea from "../UI/TextArea"
import Button from "../UI/Button"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"
import { useState } from "react"

const PostNew = props => {
    const { globalState } = useContext(AppContext)

    const [image, setImage] = useState()

    const widget = window.cloudinary.createUploadWidget(
        {
            cloudName: "dyvki0hhn",
            uploadPreset: "etu3pxka",
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

    return (
        <div className="flex-row-col">
            <div className="flex-row-north w-full border-b-2 border-black">
                <Icon src={globalState.user.pp} />
                <div className="w-full ml-2 flex-col-north ">
                    <TextArea placeholder={"What's on your mind?"} />

                    {image && (
                        <div>
                            <img
                                className="image mt-4 border-4 border-red-400 rounded-2xl"
                                src={image}
                            />
                        </div>
                    )}

                    <div className="w-full flex-row-spaced my-4">
                        <Button
                            onClick={uploadHandler}
                            iconSrc={upload}
                            text={"Upload"}
                        />
                        <Button iconSrc={send} text={"Post"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNew
