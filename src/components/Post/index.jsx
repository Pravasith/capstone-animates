import { Link } from "react-router-dom"
import Icon from "../UI/Icon"

import TrashIcon from "../../assets/images/trash.webp"
import Button from "../UI/Button"
import api from "../../services/api"
import { API_URLS } from "../../services/routes"
import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

const Post = props => {
    const { post } = props

    const { globalState } = useContext(AppContext)

    const deleteHandler = () => {
        api.DELETE(
            API_URLS.DELETE_POST.replace(
                "userId",
                globalState.user?.id
            ).replace("postId", post.postId)
        )
            .then(res => {
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="flex-row-north-west mt-6 border-b-2 border-black w-full">
            <Link to={"/user/" + post.userId}>
                <div className="hover:scale-105">
                    <Icon src={post.thumbnail} />
                </div>
            </Link>

            <div className="flex-col-north-west ml-4 w-full">
                <div className="w-full flex flex-row justify-between items-center mb-2">
                    <div className="flex-row-west">
                        <Link
                            className="hover:underline"
                            to={"/user/" + post.userId}
                        >
                            <h3>{post.fullName}</h3>
                        </Link>

                        {process.env.REACT_APP_ADMIN_ID === post.userId && (
                            <p className="bg-pink-600 px-2 py-1 mx-2 text-white">
                                ADMIN
                            </p>
                        )}
                    </div>

                    {(globalState.user?.id === post.userId ||
                        globalState.user?.id ===
                            process.env.REACT_APP_ADMIN_ID) && (
                        <Button onClick={deleteHandler} iconSrc={TrashIcon} />
                    )}
                </div>

                <p>{post.description}</p>

                <div className="flex-col-center w-full rounded-xl bg-black my-6">
                    <img className="object-contain p-0" src={post.image} />
                </div>
            </div>
        </div>
    )
}

export default Post
