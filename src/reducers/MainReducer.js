
const SET_TOKEN = 'SET_TOKEN';



let initialState = {
    token: "",
    isVisible: false
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.token};
        default:
            return state;
    }

};
// const showPositionAC = (positionData) => ({type: SHOW_POSITION, positionData: positionData});
const setTokenAC = (token) => ({type: SET_TOKEN, token: token});



// export const getTokenThunkCreator = () => {
//     return (dispatch) => {
//         API.getToken()
//             .then(data => {
//                 dispatch(setTokenAC(data));
//             })
//     }
// };



export default MainReducer;