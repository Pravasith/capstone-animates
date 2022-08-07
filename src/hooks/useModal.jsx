import { useState } from "react"
import Icon from "../components/UI/Icon"
import Button from "../components/UI/Button"
import { useForm } from "./useForm"

import closeIcon from "../assets/images/close.webp"

export const useModal = () => {
    const [close, setClose] = useState(true)

    const openModal = () => {
        setClose(false)
    }

    const Modal = props => {
        const { values, handler } = useForm({})

        const handleSubmit = e => {
            e.preventDefault()
            if (props.submitHandler) props.submitHandler(values)
            closeModal()
        }

        const closeModal = () => {
            setClose(true)
            props.onCloseModal && props.onCloseModal()
        }

        return (
            <>
                {!close && (
                    <div className="fixed w-screen h-screen top-0 z-20">
                        <div className="flex-col-center w-full h-full bg-black/30">
                            <form
                                className="flex-col-center my-4 w-1/3 py-4 px-8 bg-white rounded-3xl relative"
                                onSubmit={handleSubmit}
                            >
                                <div
                                    className="absolute -top-5 -right-5"
                                    onClick={closeModal}
                                >
                                    <Icon src={closeIcon} />
                                </div>

                                <h3 className="font-bold underline">
                                    {props.title}
                                </h3>
                                <br />

                                {props.labels.map((label, i) => {
                                    return (
                                        <label
                                            key={"label-" + i}
                                            className="my-2 w-full"
                                        >
                                            {label.title + ":"}{" "}
                                            <input
                                                className="w-full border-4 border-blue-400"
                                                name={label.name}
                                                type="text"
                                                value={values[props.name]}
                                                onChange={handler}
                                            />
                                        </label>
                                    )
                                })}

                                <Button
                                    className={"my-2"}
                                    type={"submit"}
                                    text={"Change"}
                                />
                            </form>
                        </div>
                    </div>
                )}
            </>
        )
    }

    return { Modal, openModal }
}
