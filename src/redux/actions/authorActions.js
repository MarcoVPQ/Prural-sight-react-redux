import {  LOAD_AUTHORS_SUCCESS } from './actionTypes'
import * as authorApi from '../../api/authorApi'
import { beginApiCall } from './apiStatusActions';


export const loadAuthorsSuccess = (authors) => {
    return {
        type: LOAD_AUTHORS_SUCCESS,
        authors
    }
}


export const loadAuthors = () => {

    return (dispatch) => {
        dispatch(beginApiCall())
        return authorApi.getAuthors()
        .then(authors => {
            dispatch(loadAuthorsSuccess(authors))
        })
        .catch(err => {
            throw err
        })
    }
}