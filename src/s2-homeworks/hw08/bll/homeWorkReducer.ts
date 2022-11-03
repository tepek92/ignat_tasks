import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.sort((a, b) =>
                action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)); // need to fix
        }
        case 'check': {
            return state.sort((a, b) => a.name.localeCompare(b.name)).filter(u => u.age >= 18);
        }
        default:
            return state
    }
}
