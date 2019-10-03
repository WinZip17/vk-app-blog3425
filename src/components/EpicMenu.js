import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import {connect} from "react-redux";
import connectVK from '@vkontakte/vk-connect';

import {
    activeCategoryAC,
    activeModalAC,
    activeStoryAC, activeViewAC, getMovieListThunkCreator, goHomeAC, setCamripAC, setOrderAC, setSortAC, setTypesAC
} from "../reducers/MainReducer";


const DataEpicMenu = (props) => {

    return (
        <Epic activeStory={props.state.activeStory} tabbar={
            <Tabbar>
                <TabbarItem
                    onClick={() => {
                        props.setActiveStory("feed");
                        props.goHome();
                        props.setActiveView("content")
                    }}
                    data-story="feed"
                ><Icon28Newsfeed/></TabbarItem>
                <TabbarItem
                    onClick={() => {
                        props.setActiveStory("discover");
                        props.setActiveView("search")
                    }}
                    selected={props.state.activeStory === 'discover'}
                    data-story="discover"
                ><Icon28Search/></TabbarItem>
                <TabbarItem
                    onClick={() => {
                        props.setActiveStory("favorite");
                        connectVK.send("VKWebAppAddToFavorites", {});
                    }}
                    selected={props.state.activeStory === 'favorite'}
                    data-story="notifications"
                ><Icon28FavoriteOutline/></TabbarItem>
                <TabbarItem
                    onClick={() => {
                        props.setActiveStory("notifications")
                    }}
                    selected={props.state.activeStory === 'notifications'}
                    data-story="notifications"
                ><Icon28Notifications/></TabbarItem>
                <TabbarItem
                    onClick={() => {
                        props.setActiveStory("more");
                        props.setActiveModal("MODAL_PAGE_SETTINGS")
                    }}
                    selected={props.state.activeStory === 'more'}
                    data-story="more"
                ><Icon28SettingsOutline/></TabbarItem>
            </Tabbar>
        }>
        </Epic>
    );

}


let mapStateToProps = (state) => {
    return {
        state: state.main
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setActiveStory: (activeStory) => {
            dispatch(activeStoryAC(activeStory))
        },
        setActiveModal: (activeModel) => {
            dispatch(activeModalAC(activeModel))
        },
        setActiveView: (activeView) => {
            dispatch(activeViewAC(activeView))
        },
        setTypes: (types) => {
            dispatch(setTypesAC(types))
        },
        getMovieList: (listOptions) => {
            dispatch(getMovieListThunkCreator(listOptions));
        },
        setActiveCategory: (activeCategory) => {
            dispatch(activeCategoryAC(activeCategory))
        },
        setSort: (sort) => {
            dispatch(setSortAC(sort))
        },
        setOrder: (order) => {
            dispatch(setOrderAC(order))
        },
        setCamrip: (camrip) => {
            dispatch(setCamripAC(camrip))
        },
        goHome: () => {
            dispatch(goHomeAC())
        },
    };
};


const EpicMenu = connect(mapStateToProps, mapDispatchToProps)(DataEpicMenu);


export default EpicMenu;
