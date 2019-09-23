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
		debugger
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
									onClick={() => props.setActiveFilter("yar")}
									selected={props.state.activeFilter === 'yar'}
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

						{/*<iframe src="https://blog3425.ru/2345.html" width="350" height="250" frameBorder="0"*/}
						{/*		allowFullScreen></iframe>*/}

						{/*<iframe src="//vk.com/video_ext.php?oid=118956974&id=169353376&hash=f26a960ee4c71c97&hd=2"*/}
						{/*		width="320" height="280" frameBorder="0" allowFullScreen></iframe>*/}
						{/*<iframe*/}
						{/*	src="http://moonwalk.cc/serial/aeae3e21cb47cbf195d45acb5da2b91e/iframe"*/}
						{/*	width="610" height="370" frameBorder="0" allowFullScreen></iframe>*/}
						{/*<a href="https://www.youtube.com/watch?v=yM1QjdoLmxQ">ролик</a>*/}
					</Group>


				</Panel>
			</View>
		);

}



export default Films;
