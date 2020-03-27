
import { axiosWithAuth } from "../utils/axiosWithAuth";


export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_JOKES = "UPDATE_JOKES";
export const SET_ERROR = "SET_ERROR";



export const getData = () => dispatch => {
   dispatch({ type: FETCH_DATA});
   axiosWithAuth()
   .get('')
   .then(res => {
    console.log(res)
    dispatch ({ type: UPDATE_JOKES, payload:res.data.results})
   })
   .catch(error => console.error(error))
   dispatch ({type: SET_ERROR, payload: "Error gather data from database"})

}
