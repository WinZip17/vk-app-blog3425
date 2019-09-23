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


const Cartoons = (props) => {

	return (
		<View id="cartoons" activePanel="tabs">
			<Panel id="tabs">
				<PanelHeader
					noShadow>
					Заголовочек
				</PanelHeader>
				<FixedLayout vertical="top">
					<Tabs theme="header" type="buttons">
						<HorizontalScroll>
							<TabsItem
								onClick={() => props.setActiveArticle("films")}
								selected={props.state.activeArticle === 'films'}
							>
								Фильмы
							</TabsItem>
							<TabsItem
								onClick={() => props.setActiveArticle("cartoons")}
								selected={props.state.activeArticle === 'cartoons'}
							>
								Мультфильмы
							</TabsItem>
							<TabsItem
								onClick={() => props.setActiveArticle("series")}
								selected={props.state.activeArticle === 'series'}
							>
								Сериалы
							</TabsItem>
							<TabsItem
								onClick={() => props.setActiveArticle("anime")}
								selected={props.state.activeArticle === 'anime'}
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
								onClick={() => props.setActiveFilter("yar")}
								selected={props.state.setActiveFilter === 'yar'}
							>
								Год
							</TabsItem>
							<TabsItem
								onClick={() => props.setActiveFilter("genre")}
								selected={props.state.setActiveFilter === 'genre'}
							>
								Жанр
							</TabsItem>
							<TabsItem
								onClick={() => props.setActiveFilter("inter")}
								selected={props.state.setActiveFilter === 'inter'}
							>
								Сначала интересные
							</TabsItem>
							<TabsItem
								onClick={() => props.setActiveFilter("top")}
								selected={props.state.setActiveFilter === 'top'}
							>
								Топ 10 интересных
							</TabsItem>
						</HorizontalScroll>
					</Tabs>
				</Group>
				<Group>
					Cartoons
				</Group>


			</Panel>
		</View>
	);

}



export default Cartoons;
