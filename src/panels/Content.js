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



const Content = (props) => {

    return (
        <View id={props.id} activePanel="tabs">
            <Panel id="tabs">
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
                </FixedLayout>
                <Group title="фильтры">
                    <Tabs type="buttons">
                        <HorizontalScroll>
                            <TabsItem
                                onClick={() => props.setActiveFilter("top")}
                                selected={props.state.activeFilter === 'top'}
                            >
                                По рейтингу
                            </TabsItem>
                            <TabsItem
                                onClick={() => props.setActiveFilter("year")}
                                selected={props.state.activeFilter === 'year'}
                            >
                                Год
                            </TabsItem>
                            <TabsItem
                                onClick={() => props.setActiveFilter("genre")}
                                selected={props.state.activeFilter === 'genre'}
                            >
                                Жанр
                            </TabsItem>
                            <TabsItem
                                onClick={() => props.setActiveFilter("inter")}
                                selected={props.state.activeFilter === 'inter'}
                            >
                                Сначала интересные
                            </TabsItem>
                        </HorizontalScroll>
                    </Tabs>
                </Group>
                <Group>
                    <Main/>
                </Group>
                {/*<Epic activeStory={props.state.activeStory} tabbar={*/}
                {/*    <Tabbar>*/}
                {/*        <TabbarItem*/}
                {/*            onClick={() => {props.setActiveStory("feed")}}*/}
                {/*            selected={props.state.activeStory === 'feed'}*/}
                {/*            data-story="feed"*/}
                {/*            text="Новости"*/}
                {/*        ><Icon28Newsfeed /></TabbarItem>*/}
                {/*        <TabbarItem*/}
                {/*            onClick={() => {props.setActiveStory("feed")}}*/}
                {/*            selected={props.state.activeStory === 'discover'}*/}
                {/*            data-story="discover"*/}
                {/*            text="Поиск"*/}
                {/*        ><Icon28Search /></TabbarItem>*/}
                {/*        <TabbarItem*/}
                {/*            onClick={() => {props.setActiveStory("feed")}}*/}
                {/*            selected={props.state.activeStory === 'messages'}*/}
                {/*            data-story="messages"*/}
                {/*            label="12"*/}
                {/*            text="Сообщения"*/}
                {/*        ><Icon28Messages /></TabbarItem>*/}
                {/*        <TabbarItem*/}
                {/*            onClick={() => {props.setActiveStory("feed")}}*/}
                {/*            selected={props.state.activeStory === 'notifications'}*/}
                {/*            data-story="notifications"*/}
                {/*            text="Уведомлен."*/}
                {/*        ><Icon28Notifications /></TabbarItem>*/}
                {/*        <TabbarItem*/}
                {/*            onClick={() => {props.setActiveStory("feed")}}*/}
                {/*            selected={props.state.activeStory === 'more'}*/}
                {/*            data-story="more"*/}
                {/*            text="Ещё"*/}
                {/*        ><Icon28More /></TabbarItem>*/}
                {/*    </Tabbar>*/}
                {/*}>*/}
                {/*    <View id="feed" activePanel="feed">*/}
                {/*        <Panel id="feed">*/}
                {/*            <PanelHeader>Feed</PanelHeader>*/}
                {/*        </Panel>*/}
                {/*    </View>*/}
                {/*    <View id="discover" activePanel="discover">*/}
                {/*        <Panel id="discover">*/}
                {/*            <PanelHeader>Discover</PanelHeader>*/}
                {/*        </Panel>*/}
                {/*    </View>*/}
                {/*    <View id="messages" activePanel="messages">*/}
                {/*        <Panel id="messages">*/}
                {/*            <PanelHeader>Messages</PanelHeader>*/}
                {/*        </Panel>*/}
                {/*    </View>*/}
                {/*    <View id="notifications" activePanel="notifications">*/}
                {/*        <Panel id="notifications">*/}
                {/*            <PanelHeader>Notifications</PanelHeader>*/}
                {/*        </Panel>*/}
                {/*    </View>*/}
                {/*    <View id="more" activePanel="more">*/}
                {/*        <Panel id="more">*/}
                {/*            <PanelHeader>More</PanelHeader>*/}
                {/*        </Panel>*/}
                {/*    </View>*/}
                {/*</Epic>*/}
            </Panel>
        </View>
    );

}



export default Content;
