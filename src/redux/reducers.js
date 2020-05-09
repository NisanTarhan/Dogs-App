import * as Actions from './types';

const initialState = {
    favorites: [],
    loadingFavorites: false,
    disableButtonById: null,
    errorMessage: ""
}

export const dogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOADING_START:
            return { ...state, loadingFavorites: true }
        case Actions.FETCH_FAVORITE_DOGS:
            return { ...state, favorites: action.payload, loadingFavorites: false }
        case Actions.REMOVE_FAVORITE_DOGS:
            return { ...state, favorites: state.favorites.filter((dog) => dog.dogId !== action.payload), disableButtonById: false }
        case Actions.ADD_FAVORITE_DOGS:
            return { ...state, favorites: [...state.favorites, action.payload], disableButtonById: false }
        case Actions.DISABLE_BUTTON_BY_ID:
            return { ...state, disableButtonById: action.payload }
        case Actions.FETCH_ERROR:
            return { ...state, loadingFavorites: false, errorMessage: action.payload, disableButtonById: false }
        default:
            return state;
    }
}