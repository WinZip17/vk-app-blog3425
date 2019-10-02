import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { List, Cell } from '@vkontakte/vkui';
import MoviesCell from "./MoviesCell";

const Main = (props) => {

		return (
				<List >
					{props.list.map((movies) => <MoviesCell
						key={movies.token} movies={movies} setIframeUrl={props.setIframeUrl}
						setActiveModal={props.setActiveModal} setMoviesInfo={props.setMoviesInfo}/>)}
				</List>
		);

};



export default Main;
