import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { List } from '@vkontakte/vkui';
import MoviesCell from "./MoviesCell";

const Main = (props) => {

		return (
				<List className="listDisplay" >
					{props.list.map((movies) => <MoviesCell
						key={movies.id} movies={movies} setIframeUrl={props.setIframeUrl}
						setActiveView={props.setActiveView} setMoviesInfo={props.setMoviesInfo}
						scheme={props.scheme}/>)}
				</List>
		);

};



export default Main;
