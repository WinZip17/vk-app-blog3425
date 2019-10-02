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

import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';

const Content = (props) => {

    return (
        <View popout={props.state.isReady}  id={props.id} activePanel="tabs" modal={props.modal}>
            <Panel id="tabs" >
                <PanelHeader
                    noShadow>
                    Заголовочек
                </PanelHeader>
                <FixedLayout vertical="top">
                    <Tabs theme="header" type="buttons">
                        <HorizontalScroll>
                            <TabsItem
                                onClick={() => props.setActiveCategory("films")}
                                selected={props.state.activeCategory === 'films'}
                            >
                                Фильмы
                            </TabsItem>
                            <TabsItem
                                onClick={() => props.setActiveCategory("cartoons")}
                                selected={props.state.activeCategory === 'cartoons'}
                            >
                                Мультфильмы
                            </TabsItem>
                            <TabsItem
                                onClick={() => props.setActiveCategory("series")}
                                selected={props.state.activeCategory === 'series'}
                            >
                                Сериалы
                            </TabsItem>
                            <TabsItem
                                onClick={() => props.setActiveCategory("anime")}
                                selected={props.state.activeCategory === 'anime'}
                            >
                                Аниме
                            </TabsItem>
                        </HorizontalScroll>

                    </Tabs>
                    <Epic activeStory={props.state.activeStory} tabbar={
                        <Tabbar>
                            <TabbarItem
                                onClick={() => {props.setActiveStory("feed")}}
                                selected={props.state.activeStory === 'feed'}
                                data-story="feed"
                            ><Icon28Newsfeed /></TabbarItem>
                            <TabbarItem
                                onClick={() => {
                                    props.setActiveStory("discover");
                                    props.setActiveModal("MODAL_PAGE_SEARCH")}}
                                selected={props.state.activeStory === 'discover'}
                                data-story="discover"
                            ><Icon28Search /></TabbarItem>
                            <TabbarItem
                                onClick={() => {props.setActiveStory("favorite")}}
                                selected={props.state.activeStory === 'favorite'}
                                data-story="notifications"
                            ><Icon28FavoriteOutline /></TabbarItem>
                            <TabbarItem
                                onClick={() => {props.setActiveStory("notifications")}}
                                selected={props.state.activeStory === 'notifications'}
                                data-story="notifications"
                            ><Icon28Notifications /></TabbarItem>
                            <TabbarItem
                                onClick={() => {props.setActiveStory("more");
                                    props.setActiveModal("MODAL_PAGE_SETTINGS")}}
                                selected={props.state.activeStory === 'more'}
                                data-story="more"
                            ><Icon28SettingsOutline /></TabbarItem>
                        </Tabbar>
                    }>

                    </Epic>
                </FixedLayout>
                <Group className="mainContainer">
                    {props.state.isReady === null ? <Main setActiveModal={props.setActiveModal} setIframeUrl={props.setIframeUrl}
                                                 list={props.state.filmsList} setMoviesInfo={props.setMoviesInfo}/> : <div></div>}
                </Group>
            </Panel>

        </View>
    );

}



export default Content;
