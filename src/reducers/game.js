import {
    QUERY, QUERY_WITH_ITEM
}
    from '../action/type'
const initState = {
    numberOfGold: {
        price: 0
    },
    dead: true,
    items: [],
    playersName: []
}

export default function authRed(state = initState, action) {
    switch (action.type) {
        case QUERY_WITH_ITEM:
        case QUERY:
            return { ...action.payload }
        default:
            return state
    }
}