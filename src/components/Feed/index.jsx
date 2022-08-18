import Post from "../Post"

import PostNew from "../PostNew"

const Feed = props => {
    return (
        <div className="h-6 w-1/3  flex-col-north">
            <PostNew />

            <div className="flex-col-north-west w-full">
                {props.feed.map((post, i) => (
                    <Post key={"post" + i} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed
