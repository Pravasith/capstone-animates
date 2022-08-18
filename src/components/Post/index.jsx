import { Link } from "react-router-dom"
import Icon from "../UI/Icon"

const Post = props => {
    const { post } = props

    return (
        <div className="flex-row-north-west mt-6 border-b-2 border-black w-full">
            <Link to={"/user/" + post.userId}>
                <div className="hover:scale-105">
                    <Icon src={post.thumbnail} />
                </div>
            </Link>

            <div className="flex-col-north-west ml-4">
                <Link to={"/user/" + post.userId}>
                    <div className="w-full my-2 hover:underline">
                        <h3>{post.fullName}</h3>
                    </div>
                </Link>

                <p>{post.description}</p>

                <div className="flex-col-center w-full rounded-xl bg-black my-6">
                    <img className="object-contain p-0" src={post.image} />
                </div>
            </div>
        </div>
    )
}

export default Post
