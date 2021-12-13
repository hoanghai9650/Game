import { getGameById, getListGame } from "../../api";
import { mapIP } from "../../utils/common";
import { getListGameSuccess, getRequest, getGameDetailSuccess, getGameDetailFail } from "../actions/gameActions";



export const getRequestListGame = () => {
    return (dispatch) =>{
        dispatch(getRequest())
    getListGame()
    .then((res) => {
        const listGame = mapIP(res.data);
        dispatch(getListGameSuccess(listGame));
    })
    .catch(err => {
        
        console.log(err)
    })
}
}

export const getRequestGameById = (id) => {
   return async dispatch => {
       try {
           const res = await getGameById(id);
           const game = mapIP(res.data);
           dispatch(getGameDetailSuccess(game));

       } catch (error) {
           dispatch(getGameDetailFail())
       }

   }
}
