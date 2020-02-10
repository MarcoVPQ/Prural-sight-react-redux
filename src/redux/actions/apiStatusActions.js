import { BEGIN_API_CALL, API_CALL_ERROR } from "./actionTypes";

export const beginApiCall = () => ({
    type: BEGIN_API_CALL
})

export const apiCallFail = () => ({
    type: API_CALL_ERROR
})