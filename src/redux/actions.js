import axios from "axios";
import * as Actions from './types';
import { apiHost } from '../constant';

//ACTION CREATORS FOR FETCHING 
export const fetchData = () => {
    return async dispatch => {
        dispatch(loadingStart());
        try {
            const response = await axios.get(`${apiHost}/favorites`);
            dispatch(successHandle(response.data));
        } catch (error) {
            console.log(error);
            dispatch(errorHandle());
        }
    }
}

const loadingStart = () => {
    return {
        type: Actions.LOADING_START
    }
};

const successHandle = (response) => {
    return {
        type: Actions.FETCH_FAVORITE_DOGS,
        payload: response
    }
}

const errorHandle = () => {
    return {
        type: Actions.FETCH_ERROR,
        payload: "Oops something went wrong..."
    }
}

//ACTION CREATORS FOR TOGGING 
export const removeFavoriteDog = (foundDogId, dogId) => {
    return async dispatch => {
        try {
            await axios.delete(`${apiHost}/favorites/${foundDogId}`)
            dispatch({
                type: Actions.REMOVE_FAVORITE_DOGS,
                payload: dogId
            })
        } catch (error) {
            console.log(error);
            dispatch(errorHandle());
        }
    }
}

export const addFavoriteDog = (dogId) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${apiHost}/favorites`, { dogId })
            const favoriteDog = response.data
            dispatch({
                type: Actions.ADD_FAVORITE_DOGS,
                payload: favoriteDog
            })

        } catch (error) {
            console.log(error);
            dispatch(errorHandle());
        }
    }
}

export const disableFavoriteButtonById = (id) => {
    return {
        type: Actions.DISABLE_BUTTON_BY_ID,
        payload: id
    }
}