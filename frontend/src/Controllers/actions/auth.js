import { AUTH } from "../actionTypes";
import * as api from "../api";

export const signin = (userObject) =>  async (dispatch) => {
    try {
        const { data } = await api.signin(userObject)
        dispatch({ type: AUTH, data })
    } catch (error) {
        console.log(error)
    }
}

export const signup = (userObject) =>  async (dispatch) => {
    try {
        const { data } = await api.signup(userObject)
        dispatch({ type: AUTH, data })
    } catch (error) {
        console.log(error)
    }
}