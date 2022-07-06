import { useForm } from "../hooks/useForm"
import Button from "../UI/Button"

const Settings = props => {
    const { values, handler } = useForm({})

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <div className="flex-col-center w-full">
            <h1>Settings</h1>

            <form
                className="flex-col-center my-4 w-full"
                onSubmit={handleSubmit}
            >
                <label className="my-2 w-1/5">
                    Username:{" "}
                    <input
                        className="w-full"
                        name="username"
                        type="text"
                        value={values.username}
                        onChange={handler}
                    />
                </label>

                <label className="my-2 w-1/5">
                    Password:{" "}
                    <input
                        className="w-full"
                        name="password"
                        type="text"
                        value={values.password}
                        onChange={handler}
                    />
                </label>

                <Button className={"my-2"} type={"submit"} text={"Change"} />
            </form>
        </div>
    )
}

export default Settings
