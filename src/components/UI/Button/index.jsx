import Icon from "../Icon"

const Button = props => {
    return (
        <button className="flex-row-center border-2 border-black rounded-full bg-black hover:border-blue-400">
            {props.iconSrc && (
                <div className="px-2">
                    <Icon src={props.iconSrc} size={"sm"} noBackground={true} />
                </div>
            )}
            <div className="pr-4 text-white">{props.text}</div>
        </button>
    )
}

export default Button
