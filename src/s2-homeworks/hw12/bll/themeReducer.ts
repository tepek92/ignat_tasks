type ActionsType = ReturnType<typeof changeThemeId>
type ThemeState = typeof initState

const initState = {
    themeId: 1,
}

// fix any
export const themeReducer = (state = initState, action: ActionsType): ThemeState => {
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}


// fix any
export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) as const
