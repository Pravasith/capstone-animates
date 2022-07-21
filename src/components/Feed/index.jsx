import Post from "../Post"

import PostNew from "../PostNew"

const data = [
    {
        username: "Jotaro",
        fullName: "Jotaro Kujo",
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium perferendis quisquam voluptates odit molestias
            tempora neque aspernatur, illo nulla! Temporibus, nobis
            autem cumque fugit cupiditate reprehenderit laborum vitae
            facilis adipisci!`,
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/93.jpg",
        image: "https://i.pinimg.com/564x/c3/ba/d9/c3bad915da5c351e78209b0e32ab16e0.jpg",
    },
    {
        username: "noelleSilva",
        fullName: "Noelle Silva",
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium perferendis quisquam voluptates odit molestias
            tempora neque aspernatur, illo nulla! Temporibus, nobis
            autem cumque fugit cupiditate reprehenderit laborum vitae
            facilis adipisci!`,
        thumbnail:
            "https://i.pinimg.com/736x/c3/e4/24/c3e424e35083c15a4bd106c46fd051f5.jpg",
        image: "https://4.bp.blogspot.com/-HpMidnxOryw/T2m5sxRvkzI/AAAAAAAAAGo/uV_32oef80M/s1600/monkey+D+luffy00.jpg",
    },
    {
        username: "abrahamx",
        fullName: "Abraham X",
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium perferendis quisquam voluptates odit molestias
            tempora neque aspernatur, illo nulla! Temporibus, nobis
            autem cumque fugit cupiditate reprehenderit laborum vitae
            facilis adipisci!`,
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
        image: "https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg",
    },
    {
        username: "noelleSilva",
        fullName: "Noelle Silva",
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium perferendis quisquam voluptates odit molestias
            tempora neque aspernatur, illo nulla! Temporibus, nobis
            autem cumque fugit cupiditate reprehenderit laborum vitae
            facilis adipisci!`,
        thumbnail:
            "https://i.pinimg.com/736x/c3/e4/24/c3e424e35083c15a4bd106c46fd051f5.jpg",
        image: "https://4.bp.blogspot.com/-HpMidnxOryw/T2m5sxRvkzI/AAAAAAAAAGo/uV_32oef80M/s1600/monkey+D+luffy00.jpg",
    },

    {
        username: "Rita",
        fullName: "Rita Grace",
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium perferendis quisquam voluptates odit molestias
            tempora neque aspernatur, illo nulla! Temporibus, nobis
            autem cumque fugit cupiditate reprehenderit laborum vitae
            facilis adipisci!`,
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
        image: "https://image.shutterstock.com/image-illustration/beautiful-anime-boy-character-background-260nw-1986627173.jpg",
    },
    {
        username: "YK",
        fullName: "Avie Chan",
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium perferendis quisquam voluptates odit molestias
            tempora neque aspernatur, illo nulla! Temporibus, nobis
            autem cumque fugit cupiditate reprehenderit laborum vitae
            facilis adipisci!`,
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
        image: "https://assets3.thrillist.com/v1/image/2932199/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg",
    },
    {
        username: "sakura",
        fullName: "Useless Sakura",
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium perferendis quisquam voluptates odit molestias
            tempora neque aspernatur, illo nulla! Temporibus, nobis
            autem cumque fugit cupiditate reprehenderit laborum vitae
            facilis adipisci!`,
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
        image: "https://4.bp.blogspot.com/-HpMidnxOryw/T2m5sxRvkzI/AAAAAAAAAGo/uV_32oef80M/s1600/monkey+D+luffy00.jpg",
    },
    {
        username: "noelleSilva",
        fullName: "Noelle Silva",
        description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium perferendis quisquam voluptates odit molestias
            tempora neque aspernatur, illo nulla! Temporibus, nobis
            autem cumque fugit cupiditate reprehenderit laborum vitae
            facilis adipisci!`,
        thumbnail:
            "https://i.pinimg.com/736x/c3/e4/24/c3e424e35083c15a4bd106c46fd051f5.jpg",
        image: "https://9tailedkitsune.com/wp-content/uploads/2022/01/marin33.jpg",
    },
]

const Feed = props => {
    return (
        <div className="h-6 w-1/3  flex-col-north">
            <PostNew />

            <div className="flex-col-north">
                {data.map((post, i) => (
                    <Post key={"post" + i} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed
