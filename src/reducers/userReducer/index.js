export const userReducer = (state, action) => {
    const { payload } = action
    switch (action.type) {
        // case "ADD_ITEM":
        //     return addNewItem(state, payload.todoItem)
        default:
            return state
    }
}

export default userReducer
