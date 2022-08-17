import Icon from "../UI/Icon"

import upload from "../../assets/images/upload.webp"
import send from "../../assets/images/send.webp"

import TextArea from "../UI/TextArea"
import Button from "../UI/Button"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

const PostNew = props => {
    const { globalState } = useContext(AppContext)

    return (
        <div className="flex-row-north w-full border-b-2 border-black">
            <Icon src={globalState.user.pp} />
            <div className="w-full ml-2 flex-col-north ">
                <TextArea placeholder={"What's on your mind?"} />
                <div className="w-full flex-row-spaced my-2">
                    <Button iconSrc={upload} text={"Upload"} />
                    <Button iconSrc={send} text={"Post"} />
                </div>
            </div>
        </div>
    )
}

export default PostNew
