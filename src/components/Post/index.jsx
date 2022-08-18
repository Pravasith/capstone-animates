import Icon from "../UI/Icon"

const Post = props => {
    const { post } = props

    return (
        <div className="flex-row-north mt-6 border-b-2 border-black">
            <Icon src={post.thumbnail} />

            <div className="flex-col-north-west ml-4">
                <div className="w-full my-2">
                    <h3>{post.fullName}</h3>
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
