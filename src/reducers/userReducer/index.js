export const userReducer = (state, action) => {
    const { payload } = action
    switch (action.type) {
        case "USER_LOGGED_IN":
            const data = {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                id: payload.id,
                pp: payload.pp,
            }

            localStorage.setItem("user", JSON.stringify(data))

            return {
                ...state,
                user: data,
            }

        case "USER_LOGGED_OUT":
            localStorage.removeItem("user")

            return {
                ...state,
                user: null,
            }

        default:
            return state
    }
}

export default userReducer
