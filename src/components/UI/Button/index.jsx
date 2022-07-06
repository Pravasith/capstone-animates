import Icon from "../Icon"

const Button = props => {
    return (
        <button
            type={props.type || "button"}
            className={`px-2 flex-row-center border-2 border-black rounded-full bg-black hover:border-blue-400 ${props.className}`}
        >
            {props.iconSrc && (
                <div className="pr-2">
                    <Icon src={props.iconSrc} size={"sm"} noBackground={true} />
                </div>
            )}
            <div className={`text-white ${props.iconSrc && "pr-2"}`}>
                {props.text}
            </div>
        </button>
    )
}

export default Button
