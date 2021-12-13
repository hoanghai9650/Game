import { getListGame } from "../../api";
import { mapIP } from "../../utils/common";


export const GET_GAME_DETAIL_SUCCESS = 'SET_GAME_DETAIL_SUCCESS';
export const GET_GAME_DETAIL_FAIL = 'SET_GAME_DETAIL_FAIL';

export const FETCHING_DATA ='FETCHING_DATA'

export const GET_LIST_GAMES_SUCCESS ='GET_LIST_GAMES_SUCCESS';
export const GET_LIST_GAMES_FAIL ='GET_LIST_GAMES_FAIL';

export const getListGameSuccess = (listGame) => ({type: GET_LIST_GAMES_SUCCESS, payload: listGame})
export const getListGameFail = () => ({type: GET_LIST_GAMES_FAIL})

export const getGameDetailSuccess = (game) => ({type: GET_GAME_DETAIL_SUCCESS, payload: game})
export const getGameDetailFail = () => ({type: GET_GAME_DETAIL_FAIL})

export const getRequest = () =>({type: FETCHING_DATA});





