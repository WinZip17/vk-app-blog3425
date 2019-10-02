import React from 'react';
import {
    FixedLayout,
    Group,
    HorizontalScroll,
    Panel,
    PanelHeader,
    Tabs,
    TabsItem,
    View
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Main from "./Main";

import {connect} from "react-redux";
import {
    activeArticleAC,
    activeCategoryAC,
    activeFilterAC,
    activeModalAC,
    activeStoryAC,
    getMovieListThunkCreator,
    heightAC,
    modalHistoryAC,
    setCamripAC,
    setIframeUrlAC,
    setMoviesInfoAC,
    setOrderAC,
    setSchemeAC,
    setSortAC,
    setTypesAC, setYearAC,
    widthAC
} from "../reducers/MainReducer";
import EpicMenu from "./EpicMenu";

const DataContent = (props) => {

    return (
        <View popout={props.state.isReady}  id={props.id} activePanel="tabs" modal={props.modal}>
            <Panel id="tabs" >
                <PanelHeader
                    noShadow>
                    KINOMIX
                </PanelHeader>
                <FixedLayout vertical="top">
                    <Tabs theme="header" type="buttons">
                        <HorizontalScroll>
                            <TabsItem
                                onClick={() => {
                                    props.setActiveCategory("films");
                                    props.setTypes("foreign-movie,russian-movie")}}
                                selected={props.state.activeCategory === 'films'}
                            >
                                Фильмы
                            </TabsItem>
                            <TabsItem
                                onClick={() => {
                                    props.setActiveCategory("cartoons");
                                    props.setTypes("foreign-cartoon,russian-cartoon,soviet-cartoon")}}
                                selected={props.state.activeCategory === 'cartoons'}
                            >
                                Мультфильмы
                            </TabsItem>
                            <TabsItem
                                onClick={() => {
                                    props.setActiveCategory("series");
                                    props.setTypes("foreign-serial,cartoon-serial,documentary-serial,russian-serial,multi-part-film,russian-documentary-serial,russian-cartoon-serial")}}
                                selected={props.state.activeCategory === 'series'}
                            >
                                Сериалы
                            </TabsItem>
                            <TabsItem
                                onClick={() => {
                                    props.setActiveCategory("anime");
                                    props.setTypes("anime,anime-serial")}}
                                selected={props.state.activeCategory === 'anime'}
                            >
                                Аниме
                            </TabsItem>
                        </HorizontalScroll>

                    </Tabs>
                    <EpicMenu />
                </FixedLayout>
                <Group className="mainContainer">
                    {props.state.filmsList.length === 0 ? <p><b>По Вашему запросу ничего не найдено. <br/> Попробуйте другие критерии поиска </b></p> : <div/>}
                    {props.state.isReady === null ? <Main setActiveModal={props.setActiveModal} setIframeUrl={props.setIframeUrl}
                                                 list={props.state.filmsList} setMoviesInfo={props.setMoviesInfo}/> : <div></div>}
                </Group>
            </Panel>
        </View>
    );

}


let mapStateToProps = (state) => {
    return {
        state: state.main
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        setActiveArticle: (article) => {
            dispatch(activeArticleAC(article))
        },
        setActiveFilter: (activeFilter) => {
            dispatch(activeFilterAC(activeFilter))
        },
        setActiveStory: (activeStory) => {
            dispatch(activeStoryAC(activeStory))
        },
        setActiveCategory: (activeCategory) => {
            dispatch(activeCategoryAC(activeCategory))
        },
        setActiveModal: (activeModel) => {
            dispatch(activeModalAC(activeModel))
        },
        setModalHistory: (modalHistory) => {
            dispatch(modalHistoryAC(modalHistory))
        },
        setIframeUrl: (defaultIframeUrl) => {
            dispatch(setIframeUrlAC(defaultIframeUrl))
        },
        setMoviesInfo: (moviesInfo) => {
            dispatch(setMoviesInfoAC(moviesInfo))
        },
        setScheme: (scheme) => {
            dispatch(setSchemeAC(scheme.currentTarget.checked))
        },
        setWidth: (width) => {
            dispatch(widthAC(width))
        },
        setHeight: (height) => {
            dispatch(heightAC(height))
        },
        getMovieList: (listOptions) => {
            dispatch(getMovieListThunkCreator(listOptions));
        },
        setSort: (sort) => {
            dispatch(setSortAC(sort))
        },
        setOrder: (order) => {
            dispatch(setOrderAC(order))
        },
        setTypes: (types) => {
            dispatch(setTypesAC(types))
        },
        setCamrip: (camrip) => {
            dispatch(setCamripAC(camrip))
        },
        setYear: (year) => {
            dispatch(setYearAC(year))
        }
    };
};


const Content = connect(mapStateToProps, mapDispatchToProps)(DataContent);


export default Content;
