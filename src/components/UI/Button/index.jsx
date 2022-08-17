import Icon from "../Icon"

const Button = props => {
    return (
        <button
            onClick={props.onClick}
            type={props.type || "button"}
            className={`px-4 flex-row-center border-4 border-black rounded-full bg-black hover:border-blue-400 active:border-yellow-400 ${props.className}`}
        >
            {props.iconSrc && (
                <div className="pr-4">
                    <Icon src={props.iconSrc} size={"sm"} noBackground={true} />
                </div>
            )}
            <div
                className={`text-white font-bold py-2 ${
                    props.iconSrc && "pr-4"
                }`}
            >
                {props.text}
            </div>
        </button>
    )
}

export default Button
