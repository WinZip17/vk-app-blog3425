import {API} from "../api/api";
import React from "react";
import ScreenSpinner from "@vkontakte/vkui/dist/es6/components/ScreenSpinner/ScreenSpinner";


const SET_FETCHING = 'SET_FETCHING';
const SET_VIEW= 'SET_VIEW';
const SET_CATEGORY= 'SET_CATEGORY';
const SET_STORY= 'SET_STORY';
const SET_SCHEME= 'SET_SCHEME';
const SET_IFRAME_URL= 'SET_IFRAME_URL';
const SET_MOVIE_INFO= 'SET_MOVIE_INFO';
const SET_MOVIE_SORT= 'SET_MOVIE_SORT';
const SET_MOVIE_ORDER= 'SET_MOVIE_ORDER';
const SET_MOVIE_TYPES= 'SET_MOVIE_TYPES';
const SET_MOVIE_CAMRIP= 'SET_MOVIE_CAMRIP';
const GET_NEW_MOVIE_LIST= 'GET_NEW_MOVIE_LIST';
const ON_CHANGE_SEARCH= 'ON_CHANGE_SEARCH';
const ON_CHANGE_FILTER_CATEGORY= 'ON_CHANGE_FILTER_CATEGORY';
const SET_ACTIVE_MODAL_PAGE = 'SET_ACTIVE_MODAL_PAGE';
const SET_MODAL_HISTORY = 'SET_MODAL_HISTORY';
const CHANGE_LIST_OPTIONS = 'CHANGE_LIST_OPTIONS';
const SET_MOVIE_GENRES = 'SET_MOVIE_GENRES';
const GO_HOME = 'GO_HOME';
const GET_ADD_MOVIE_LIST = 'GET_ADD_MOVIE_LIST';

let initialState = {
    activeView: "content",
    activeArticle: "films",
    activeFilter: "top",
    activeCategory: "films",
    searchCategory: "",
    subCategory: [],
    filmsList: {},
    activeStory: null,
    activeModal: null,
    modalHistory: [],
    scheme: false,
    isReady: <ScreenSpinner />,
    defaultIframeUrl: "",
    moviesInfo: {
        id: "",
        title: "", //название
        title_orig: "", //Оригинальное название
        other_title: "", //другое название, у аниме
        link: "", //Ссылка на плеер
        year: "",
        kinopoisk_id: "",
        imdb_id: "",
        camrip: "",
        created_at: "", //Дата создания материала.
        updated_at: "", // Дата обновления материала.
        material_data: {
            poster_url: ""
        }
    },
    currentListOptions: {
        limit: 21, //количество материалов, выводимое за один раз.
        sort: 'updated_at', //сортировка year, created_at, updated_at
        order: 'desc', // направление сортировки asc (по возрастанию), desc (по убыванию)
        types: 'foreign-movie,russian-movie', // фильтрация по типу, мультиики фильмы и  т.д.
        year: "", //фильтр по году
        camrip: true,
        genres: null
    },
    nextListOptions: {
        limit: 21, //количество материалов, выводимое за один раз.
        sort: 'updated_at', //сортировка year, created_at, updated_at
        order: 'desc', // направление сортировки asc (по возрастанию), desc (по убыванию)
        types: 'foreign-movie,russian-movie', // фильтрация по типу, мультиики фильмы и  т.д.
        year: "", //фильтр по году
        camrip: true,
        genres: null
    },
    search: "",
    fetching: false,
    next_page: "",
    text: '',
    snackbar: null
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIEW:
            return {...state, activeView: action.activeView};
        case SET_CATEGORY:
            return {...state, activeCategory: action.activeCategory};
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
            return {...state, defaultIframeUrl: action.defaultIframeUrl};
        case SET_MOVIE_INFO:
            return {...state, moviesInfo: action.moviesInfo};
        case GET_NEW_MOVIE_LIST:
            if (!action.filmsList) {return state}
            if ("next_page" in action.filmsList && action.filmsList.next_page.length > 1) {
                return {...state, filmsList: action.filmsList.results, isReady: null, next_page: action.filmsList.next_page, fetching: true} ;
            }
            return {...state, filmsList: action.filmsList.results, isReady: null, next_page: null, fetching: false};
        case GET_ADD_MOVIE_LIST:
            let fetching = false;
            if (action.filmsList.next_page !== null) {
                fetching = true
            }
            return {...state, filmsList : [...state.filmsList, ...action.filmsList.results] , isReady: null, next_page: action.filmsList.next_page, fetching: fetching} ;
        case SET_MOVIE_SORT:
            if (action.sort === '') {return state}
            return {
                ...state,
                nextListOptions: {
                    ...state.nextListOptions,
                    sort: action.sort
                }
            };
        case SET_MOVIE_ORDER:
            if (action.order === '') {return state}
            return {
                ...state,
                nextListOptions: {
                    ...state.nextListOptions,
                    order: action.order
                }
            };
        case SET_MOVIE_TYPES:
            if (action.types === '') {return state}
            return {
                ...state,
                nextListOptions: {
                    ...state.nextListOptions,
                    types: action.types
                }
            };
        case SET_MOVIE_CAMRIP:
            return {
                ...state,
                nextListOptions: {
                    ...state.nextListOptions,
                    camrip: action.camrip
                }
            };
        case SET_MOVIE_GENRES:
            if (action.genres === '') {return state}
            return {
                ...state,
                nextListOptions: {
                    ...state.nextListOptions,
                    genres: action.genres
                }
            };
        case ON_CHANGE_SEARCH:
            return {...state, search: action.value};
        case CHANGE_LIST_OPTIONS:
            return {...state, currentListOptions: action.nextListOptions};
        case SET_FETCHING:
            return {...state, fetching: action.fetching};
        case GO_HOME:
            return {
                ...state,
                nextListOptions: {
                    ...state.nextListOptions,
                    limit: 21,
                    sort: 'updated_at',
                    order: 'desc',
                    types: 'foreign-movie,russian-movie',
                    year: "", //фильтр по году
                    camrip: true,
                    genres: null
                }};
        case ON_CHANGE_FILTER_CATEGORY:
            switch (action.searchCategory) {
                case "movie":
                    let movie = [{"value": 'foreign-movie', "name": "Зарубежные"}, {"value": 'russian-movie', "name": 'Русские'}];
                    return {...state, searchCategory: action.searchCategory, subCategory: movie};
                case "cartoons":
                    let cartoons = [{"value": 'foreign-cartoon', "name": "Зарубежные"}, {"value": 'soviet-cartoon', "name": "Советские"}, {"value": 'russian-cartoon', "name": 'Русские'}, {"value": 'cartoon-serial', "name": 'Зарубежные мультсериалы'}, {"value": 'russian-cartoon-serial', "name": 'Руские мультсериалы'}];
                    return {...state, searchCategory: action.searchCategory, subCategory: cartoons};
                case "series":
                    let series = [{"value": 'foreign-serial', "name": "Зарубежные сериалы"}, {"value": 'documentary-serial', "name": "Зарубежные документальные сериалы"}, {"value": 'cartoon-serial', "name": "Зарубежные мультсериалы"}, {"value": 'russian-serial', "name": 'Русские сериалы'}, {"value": 'russian-documentary-serial', "name": 'Документальные русские сериалы'}, {"value": 'russian-cartoon-serial', "name": 'Русские мультсериалы'}, {"value": 'anime-serial', "name": 'Аниме сериалы'}];
                    return {...state, searchCategory: action.searchCategory, subCategory: series};
                case "anime":
                    let anime = [{"value": 'anime', "name": "Аниме"}, {"value": 'anime-serial', "name": "Сериалы аниме"}];
                    return {...state, searchCategory: action.searchCategory, subCategory: anime};
                default:
                    return {...state, searchCategory: action.searchCategory, subCategory: []};
            }
        default:
            return state;
    }

};

export const activeViewAC = (activeView) => ({type: SET_VIEW, activeView: activeView});
export const activeCategoryAC = (activeCategory) => ({type: SET_CATEGORY, activeCategory: activeCategory});
export const activeStoryAC = (activeStory) => ({type: SET_STORY, activeStory: activeStory});
export const activeModalAC = (activeModal) => ({type: SET_ACTIVE_MODAL_PAGE, activeModal: activeModal});
export const setSchemeAC = (scheme) => ({type: SET_SCHEME, scheme: scheme});
export const setIframeUrlAC = (defaultIframeUrl) => ({type: SET_IFRAME_URL, defaultIframeUrl: defaultIframeUrl});
export const setMoviesInfoAC = (moviesInfo) => ({type: SET_MOVIE_INFO, moviesInfo: moviesInfo});
export const modalHistoryAC = (modalHistory) => ({type: SET_MODAL_HISTORY, modalHistory: modalHistory});
export const onChangeSearchAC = (value) => ({type: ON_CHANGE_SEARCH, value: value});
export const onChangeFilterCategoryAC = (searchCategory) => ({type: ON_CHANGE_FILTER_CATEGORY, searchCategory: searchCategory});
export const onChangeListOptionsAC = (nextListOptions) => ({type: CHANGE_LIST_OPTIONS, nextListOptions: nextListOptions});
const getMovieListAC = (filmsList) => ({type: GET_NEW_MOVIE_LIST, filmsList: filmsList});
const getAddMovieListAC = (filmsList) => ({type: GET_ADD_MOVIE_LIST, filmsList: filmsList});
export const goHomeAC = () => ({type: GO_HOME});
export const setFetchingAC = (fetching) => ({type: SET_FETCHING, fetching: fetching});

//сортировки
export const setSortAC = (sort) => ({type: SET_MOVIE_SORT, sort: sort});
export const setOrderAC = (order) => ({type: SET_MOVIE_ORDER, order: order});
export const setTypesAC = (types) => ({type: SET_MOVIE_TYPES, types: types});
export const setCamripAC = (camrip) => ({type: SET_MOVIE_CAMRIP, camrip: camrip});
export const setGenresAC = (genres) => ({type: SET_MOVIE_GENRES, genres: genres});



export const getMovieListThunkCreator = (listOptions) => {
    let {sort, order, types, camrip, year, genres} = listOptions;
    return (dispatch) => {
        API.getMovieList(sort, order, types, camrip, year, genres)
            .then(data => {
                dispatch(getMovieListAC(data));
            })
    }
};

export const searchMovieThunkCreator = (title) => {
    return (dispatch) => {
        API.searchMovie(title)
            .then(data => {
                dispatch(getMovieListAC(data));
            })
    }
};

export const getAddMovieListThunkCreator = (url) => {
    return (dispatch) => {
        API.AddMovieList(url)
            .then(data => {
                dispatch(getAddMovieListAC(data));
            })
    }
};



export default MainReducer;