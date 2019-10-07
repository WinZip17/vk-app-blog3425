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
    activeCategoryAC,
    activeViewAC, setFetchingAC,
    setIframeUrlAC,
    setMoviesInfoAC,
    setTypesAC
} from "../reducers/MainReducer";
import EpicMenu from "./EpicMenu";
import Div from "@vkontakte/vkui/dist/es6/components/Div/Div";

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
                                    props.setTypes("foreign-movie,russian-movie")
                                    window.scrollTo(0, 0)}}
                                selected={props.state.activeCategory === 'films'}
                            >
                                Фильмы
                            </TabsItem>
                            <TabsItem
                                onClick={() => {
                                    props.setActiveCategory("cartoons");
                                    props.setTypes("foreign-cartoon,russian-cartoon,soviet-cartoon")
                                    window.scrollTo(0, 0)}}
                                selected={props.state.activeCategory === 'cartoons'}
                            >
                                Мультфильмы
                            </TabsItem>
                            <TabsItem
                                onClick={() => {
                                    props.setActiveCategory("series");
                                    props.setTypes("foreign-serial,cartoon-serial,documentary-serial,russian-serial,multi-part-film,russian-documentary-serial,russian-cartoon-serial");
                                    window.scrollTo(0, 0)}}
                                selected={props.state.activeCategory === 'series'}
                            >
                                Сериалы
                            </TabsItem>
                            <TabsItem
                                onClick={() => {
                                    props.setActiveCategory("anime");
                                    props.setTypes("anime,anime-serial");
                                    window.scrollTo( 0, 0)}}
                                selected={props.state.activeCategory === 'anime'}
                            >
                                Аниме
                            </TabsItem>
                        </HorizontalScroll>
                    </Tabs>
                    <EpicMenu />
                </FixedLayout>
                <Group className="mainContainer">
                    {props.state.filmsList.length === 0 ? <Div className="infoShell"><p><b>По Вашему запросу ничего не найдено. <br/> Попробуйте другие критерии поиска </b></p></Div> : <div/>}
                    {props.state.isReady === null ? <Main  setFetching={props.setFetching} setActiveView={props.setActiveView} setIframeUrl={props.setIframeUrl}
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
        setActiveCategory: (activeCategory) => {
            dispatch(activeCategoryAC(activeCategory))
        },
        setIframeUrl: (defaultIframeUrl) => {
            dispatch(setIframeUrlAC(defaultIframeUrl))
        },
        setMoviesInfo: (moviesInfo) => {
            dispatch(setMoviesInfoAC(moviesInfo))
        },
        setTypes: (types) => {
            dispatch(setTypesAC(types))
        },
        setFetching: (fetching) => {
            dispatch(setFetchingAC(fetching))
        },
        setActiveView: (activeView) => {
            dispatch(activeViewAC(activeView))
        }

    };
};


const Content = connect(mapStateToProps, mapDispatchToProps)(DataContent);


export default Content;
