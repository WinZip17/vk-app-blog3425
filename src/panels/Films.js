import React from 'react';
import {
	FixedLayout,
	Group,
	HorizontalScroll,
	Panel,
	PanelHeader,
	Tabs,
	TabsItem,
	View,
	Div
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


const Films = (props) => {

		return (
			<View id="films" activePanel="tabs">
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
						<iframe  width='350' height='250' src="https://www.youtube.com/embed/yM1QjdoLmxQ" frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>


					</Group>


				</Panel>
			</View>
		);

}



export default Films;
