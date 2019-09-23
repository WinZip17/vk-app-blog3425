import React from 'react';
import connect from '@vkontakte/vk-connect';
import {
	FixedLayout,
	Group,
	HorizontalScroll,
	Panel,
	PanelHeader,
	platform,
	Tabs,
	TabsItem,
	View,
	IOS,
    Counter,
    HeaderButton,
    Div,
    Root
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Persik from './panels/Persik';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Films from "./panels/Films";
import Cartoons from "./panels/Cartoons";


const osname = platform();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fetchedUser: null,
			activeTab1: 'films',
			activeTab2: 'all',
            activeArticle: 'cartoons'
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activeArticle: e.currentTarget.dataset.to })
	};

// <View activePanel={this.state.activePanel}>
// <Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
// <Persik id="persik" go={this.go} />
// </View>

	render() {
		return (
                <View id="main" activePanel="tabs">
                    <Panel id="tabs">
                        <PanelHeader
                            noShadow>
                            Заголовочек
                        </PanelHeader>
                        <FixedLayout vertical="top">
                            <Tabs theme="header" type="buttons">
                                <HorizontalScroll>
                                    <TabsItem
                                        onClick={() => this.setState({activeTab1: 'films', activeArticle: 'films'})}
                                        selected={this.state.activeTab1 === 'films'}
                                    >
                                        Фильмы
                                    </TabsItem>
                                    <TabsItem
                                        onClick={() => this.setState({activeTab1: 'cartoons', activeArticle: 'cartoons' })}
                                        selected={this.state.activeTab1 === 'cartoons'}
                                    >
                                        Мультфильмы
                                    </TabsItem>
                                    <TabsItem
                                        onClick={() => this.setState({activeTab1: 'series', activeArticle: 'series' })}
                                        selected={this.state.activeTab1 === 'series'}
                                    >
                                        Сериалы
                                    </TabsItem>
                                    <TabsItem
                                        onClick={() => this.setState({activeTab1: 'anime', activeArticle: 'anime' })}
                                        selected={this.state.activeTab1 === 'anime'}
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
                                        onClick={() => this.setState({activeTab2: 'yar'})}
                                        selected={this.state.activeTab2 === 'yar'}
                                    >
                                        Год
                                    </TabsItem>
                                    <TabsItem
                                        onClick={() => this.setState({activeTab2: 'genre'})}
                                        selected={this.state.activeTab2 === 'genre'}
                                    >
                                        Жанр
                                    </TabsItem>
                                    <TabsItem
                                        onClick={() => this.setState({activeTab2: 'inter'})}
                                        selected={this.state.activeTab2 === 'inter'}
                                    >
                                        Сначала интересные
                                    </TabsItem>
                                    <TabsItem
                                        onClick={() => this.setState({activeTab2: 'top'})}
                                        selected={this.state.activeTab2 === 'top'}
                                    >
                                        Топ 10 интересных
                                    </TabsItem>
                                </HorizontalScroll>
                            </Tabs>
                        </Group>
                        <Group>
                            <View id="Article" activePanel={this.state.activeArticle}>
                                <Films id='films'  go={this.go}> Фильмы </Films>
                                <Cartoons id='cartoons'  go={this.go}> Мультфильмы </Cartoons>
                                {/*<Div id='series'> Сериалы </Div>*/}
                                {/*<Div id='anime'> Аниме </Div>*/}
                            </View>
                        </Group>


                    </Panel>
                </View>
		);
	}
}



export default App;
