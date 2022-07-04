const TextArea = props => {
    return (
        <textarea
            rows={props.rows || 2}
            placeholder={props.placeholder}
            className="border-2 mx-1 py-2 px-4 rounded-3xl w-full"
        />
    )
}

export default TextArea
