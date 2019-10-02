import {API} from "../api/api";
import {dataTest} from "../api/movies_updates";
import React from "react";
import ScreenSpinner from "@vkontakte/vkui/dist/es6/components/ScreenSpinner/ScreenSpinner";

const SET_TOKEN = 'SET_TOKEN';
const SET_ARTICLE= 'SET_ARTICLE';
const SET_FILTER= 'SET_FILTER';
const SET_CATEGORY= 'SET_CATEGORY';
const SET_WIDTH= 'SET_WIDTH';
const SET_HEIGHT= 'SET_HEIGHT';
const SET_STORY= 'SET_STORY';
const SET_SCHEME= 'SET_SCHEME';
const SET_IFRAME_URL= 'SET_IFRAME_URL';
const SET_MOVIE_INFO= 'SET_MOVIE_INFO';

const GET_NEW_FILMS_LIST= 'GET_NEW_FILMS_LIST';


const SET_ACTIVE_MODAL_PAGE = 'SET_ACTIVE_MODAL_PAGE';
const SET_MODAL_HISTORY = 'SET_MODAL_HISTORY';






let initialState = {
    token: "",
    isVisible: false,
    activeArticle: "films",
    activeFilter: "top",
    activeCategory: "films",
    width: "20",
    height: "20",
    filmsList: {},
    activeStory: null,
    activeModal: null,
    modalHistory: [],
    scheme: false,
    isReady: <ScreenSpinner />,
    defaultIframeUrl: "",
    moviesInfo: {
        title_ru: "",
        year: "",
        kinopoisk_id: "",
        token: "",
        iframe_url: "",
        added_at: "",
        material_data: {
            countries: "",
            genres: [""],
            actors: [],
            directors: [],
            kinopoisk_rating: ""
        }
    }
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
        case SET_STORY:
            return {...state, activeStory: action.activeStory};
        case SET_SCHEME:
            let schemeAttribute = document.createAttribute('scheme');
            schemeAttribute.value = action.scheme ? 'client_dark' : 'client_light';
            document.body.attributes.setNamedItem(schemeAttribute);
            return {...state, scheme: action.scheme};
        case SET_ACTIVE_MODAL_PAGE:
            return {...state, activeModal: action.activeModal};
        case SET_MODAL_HISTORY:
            return {...state, modalHistory: action.modalHistory};
        case SET_IFRAME_URL:
            let url = action.defaultIframeUrl;
            if (url.includes("http:")) {
                url = "https" + url.slice(4);
            }
            debugger
            console.log(url);
            return {...state, defaultIframeUrl: action.defaultIframeUrl};
        case SET_MOVIE_INFO:
            return {...state, moviesInfo: action.moviesInfo};
        case SET_WIDTH:
            return {...state, width: action.width};
        case SET_HEIGHT:
            return {...state, height: action.height};
        case GET_NEW_FILMS_LIST:
            debugger
            switch (action.moviesType) {
                case "movies_updates":
                    return {...state, filmsList: action.filmsList.updates, isReady: null};
                case "movies_foreign":
                    let oldArr = action.filmsList.report.movies;
                    let newArr =  [];
                    let position = 10;
                    for (let i = 0; i < position; i++) {
                        newArr.push(oldArr[i])
                    }
                    return {...state, filmsList: newArr, isReady: null};
                default:
                    return state;
            }

        default:
            return state;
    }

};
// const showPositionAC = (positionData) => ({type: SHOW_POSITION, positionData: positionData});
export const activeArticleAC = (article) => ({type: SET_ARTICLE, article: article});
export const activeFilterAC = (activeFilter) => ({type: SET_FILTER, activeFilter: activeFilter});
export const activeCategoryAC = (activeCategory) => ({type: SET_CATEGORY, activeCategory: activeCategory});
export const activeStoryAC = (activeStory) => ({type: SET_STORY, activeStory: activeStory});
export const activeModalAC = (activeModal) => ({type: SET_ACTIVE_MODAL_PAGE, activeModal: activeModal});
export const setSchemeAC = (scheme) => ({type: SET_SCHEME, scheme: scheme});
export const setIframeUrlAC = (defaultIframeUrl) => ({type: SET_IFRAME_URL, defaultIframeUrl: defaultIframeUrl});
export const setMoviesInfoAC = (moviesInfo) => ({type: SET_MOVIE_INFO, moviesInfo: moviesInfo});
export const modalHistoryAC = (modalHistory) => ({type: SET_MODAL_HISTORY, modalHistory: modalHistory});
export const widthAC = (width) => ({type: SET_WIDTH, width: width});
export const heightAC = (height) => ({type: SET_HEIGHT, height: height});
const setTokenAC = (token) => ({type: SET_TOKEN, token: token});
const getFilmsListAC = (type, filmsList) => ({type: GET_NEW_FILMS_LIST, moviesType: type, filmsList: filmsList});



export const getFilmsListThunkCreator = (type) => {
    return (dispatch) => {
        // dispatch(getFilmsListAC(dataTest));
        API.getNewFilms(type)
            .then(data => {
                dispatch(getFilmsListAC(type, data));
            })
    }
};



export default MainReducer;