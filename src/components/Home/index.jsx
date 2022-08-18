import { useState } from "react"
import { useEffect } from "react"
import api from "../../services/api"
import { API_URLS } from "../../services/routes"
import Feed from "../Feed"

const Home = () => {
    const [feedData, setFeedData] = useState()

    useEffect(() => {
        api.GET(API_URLS.ALL_POSTS)
            .then(res => {
                setFeedData(
                    res.body.map(post => {
                        return {
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

export default Home
