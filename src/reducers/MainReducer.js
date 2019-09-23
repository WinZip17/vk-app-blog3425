import {API} from "../api/api";

const SET_TOKEN = 'SET_TOKEN';
const SET_ARTICLE= 'SET_ARTICLE';
const SET_FILTER= 'SET_FILTER';
const SET_CATEGORY= 'SET_CATEGORY';
const SET_WIDTH= 'SET_WIDTH';
const SET_HEIGHT= 'SET_HEIGHT';
const GET_NEW_FILMS_LIST= 'GET_NEW_FILMS_LIST';



let initialState = {
    token: "",
    isVisible: false,
    activeArticle: "films",
    activeFilter: "top",
    activeCategory: "films",
    width: "20",
    height: "20",
    filmsList: {}

};

const MainReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.token};
        case SET_ARTICLE:
            return {...state, activeArticle: action.article};
        case SET_CATEGORY:
            return {...state, activeCategory: action.activeCategory};
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter};
        case SET_WIDTH:
            return {...state, width: action.width};
        case SET_HEIGHT:
            return {...state, height: action.height};
        case GET_NEW_FILMS_LIST:
            return {...state, filmsList: action.filmsList};
        default:
            return state;
    }

};
// const showPositionAC = (positionData) => ({type: SHOW_POSITION, positionData: positionData});
export const activeArticleAC = (article) => ({type: SET_ARTICLE, article: article});
export const activeFilterAC = (activeFilter) => ({type: SET_FILTER, activeFilter: activeFilter});
export const activeCategoryAC = (activeCategory) => ({type: SET_CATEGORY, activeCategory: activeCategory});
export const widthAC = (width) => ({type: SET_WIDTH, width: width});
export const heightAC = (height) => ({type: SET_HEIGHT, height: height});
const setTokenAC = (token) => ({type: SET_TOKEN, token: token});
const getFilmsListAC = (filmsList) => ({type: GET_NEW_FILMS_LIST, filmsList: filmsList});



export const getFilmsListThunkCreator = () => {
    return (dispatch) => {
        API.getNewFilms()
            .then(data => {
                dispatch(getFilmsListAC(data));
            })
    }
};



export default MainReducer;