import Icon from "../UI/Icon"

import Noelle from "../../assets/images/noelle.webp"
import upload from "../../assets/images/upload.webp"
import send from "../../assets/images/send.webp"

import TextArea from "../UI/TextArea"
import Post from "../Post"

const Button = props => {
    return (
        <button className="flex-row-center border-2 border-black rounded-full bg-black hover:border-blue-400">
            {props.iconSrc && (
                <div className="px-2">
                    <Icon src={props.iconSrc} size={"sm"} noBackground={true} />
                </div>
            )}
            <div className="pr-4 text-white">{props.text}</div>
        </button>
    )
}

const Feed = props => {
    return (
        <div className="h-6 w-1/3  flex-col-north">
            <div className="flex-row-north w-full border-b-2 border-black">
                <Icon src={Noelle} />
                <div className="w-full ml-2 flex-col-north ">
                    <TextArea placeholder={"What's on your mind?"} />
                    <div className="w-full flex-row-spaced my-2">
                        <Button iconSrc={upload} text={"Upload"} />
                        <Button iconSrc={send} text={"Post"} />
                    </div>
                </div>
            </div>

            <div className="flex-col-north">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed
