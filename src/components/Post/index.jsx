import noelle from "../../assets/images/noelle.webp"
import Icon from "../UI/Icon"

const Post = props => {
    return (
        <div className="flex-row-north mt-6 border-b-2 border-black">
            <Icon src={noelle} />

            <div className="flex-col-north ml-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium perferendis quisquam voluptates odit molestias
                    tempora neque aspernatur, illo nulla! Temporibus, nobis
                    autem cumque fugit cupiditate reprehenderit laborum vitae
                    facilis adipisci!
                </p>

                <div className="flex-col-center w-full rounded-xl bg-black h-80 my-6">
                    <img
                        className="object-contain h-80 p-0"
                        src={noelle}
                        alt=""
                        srcset=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Post
