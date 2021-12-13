import {SET_LIST_GAME, SET_GAME_DETAIL, FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL, GET_LIST_GAMES_SUCCESS, GET_LIST_GAMES_FAIL, GET_GAME_DETAIL_SUCCESS, GET_GAME_DETAIL_FAIL} from '../actions/gameActions'

const initialState = {
  listGame: [],
  gameDetails: {},
  isFetching: false,
}

const gameReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING_DATA:
            return {...state, isFetching: true};
           
        case GET_LIST_GAMES_SUCCESS:
            state.listGame = payload;
            state.isFetching= false;
            return {...state};
        case GET_LIST_GAMES_FAIL:
            return {...state, isFetching: false};
        case SET_GAME_DETAIL:
            state.gameDetails = payload;
            return {...state};
        case GET_GAME_DETAIL_SUCCESS:
            return {...state, gameDetails: payload, isFetching: false};
        case GET_GAME_DETAIL_FAIL:
            return {...state,isFetching: false}


    default:
        return state
    }
}

export default gameReducer;