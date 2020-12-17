const phonebooks = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_PHONEBOOKS_SUCCESS':
            return action.phonebooks.map((item) => {
                item.sent = true;
                return item
            })

        case 'EDIT_PHONEBOOKS':
            const newState = [];
            state.map(item => {
                if (item.id === action.id) {
                    item.name = action.name;
                    item.phone = action.phone;
                }
                return newState.push(item);
            });
            return newState;

        case 'ADD_PHONEBOOKS':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    phone: action.phone,
                    sent: true
                }
            ]

        case 'ADD_PHONEBOOKS_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false;
                }
                return item
            })

        case 'EDIT_PHONEBOOKS_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false;
                }
                return item
            })

        case 'DELETE_PHONEBOOKS':
            return state.filter((item) => item.id !== action.id)

        case 'RESEND_PHONEBOOKS_SUCCESS':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = true;
                }
                return item
            })

        case 'RESEND_PHONEBOOKS_FAILURE':
        case 'DELETE_PHONEBOOKS_SUCCESS':
        case 'ADD_PHONEBOOKS_SUCCESS':
        case 'EDIT_PHONEBOOKS_SUCCESS':
        case 'LOAD_PHONEBOOKS_FAILURE':
        case 'DELETE_PHONEBOOKS_FAILURE':
        default:
            return state
    }
}

export default phonebooks