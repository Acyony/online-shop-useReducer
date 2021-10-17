export default function categoriesReducer(state, action) {
    switch (action.type) {
        case 'getCategories':
            return {categories: action.payload};

        default:
            return state;

    }

}