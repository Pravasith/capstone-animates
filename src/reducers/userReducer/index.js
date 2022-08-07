export const userReducer = (state, action) => {
    const { payload } = action
    switch (action.type) {
        case "USER_LOGGED_IN":
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    fullName: payload.fullName,
                },
            }

        case "LOGIN_CLICKED":
            return {
                ...state,
                showLogin: payload,
            }

        case "USER_SIGNED_IN":
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    fullName: payload.fullName,
                },
            }

        case "SIGNUP_CLICKED":
            return {
                ...state,
                showSignUp: payload,
            }

        default:
            return state
    }
}

export default userReducer
