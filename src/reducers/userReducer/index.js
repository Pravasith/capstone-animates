export const userReducer = (state, action) => {
    const { payload } = action
    switch (action.type) {
        case "USER_LOGGED_IN":
            localStorage.setItem(
                "user",
                JSON.stringify({
                    name: payload,
                })
            )

            return {
                ...state,
                user: {
                    name: payload,
                },
            }

        default:
            return state
    }
}

export default userReducer
