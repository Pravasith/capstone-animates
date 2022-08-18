import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import AppContext from "../../contexts/AppContext"
import api from "../../services/api"
import { API_URLS } from "../../services/routes"
import Feed from "../Feed"

const Profile = () => {
    const [feedData, setFeedData] = useState()

    const { id } = useParams()

    useEffect(() => {
        api.GET(API_URLS.POSTS_BY_USER + id)
            .then(res => {
                setFeedData(
                    res.body.map(post => {
                        return {
                            postId: post._id,
                            userId: post.userId,
                            fullName: post.firstName + " " + post.lastName,
                            description: post.description,
                            thumbnail: post.profilePicture,
                            image: post.imageUrl,
                        }
                    })
                )
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="flex-row-center w-full">
            {feedData && <Feed feed={feedData} />}
        </div>
    )
}

export default Profile
