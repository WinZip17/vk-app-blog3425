import React from 'react';
import PropTypes from 'prop-types';
import {Cell, Div} from '@vkontakte/vkui';
import defaultPoster from "../img/defaultPoster.png"

const MoviesCell = (props) => {

	return (
			<Cell  onClick={() => {
                props.setIframeUrl(props.movies.iframe_url);
				props.setMoviesInfo(props.movies);
			    props.setActiveModal("MODAL_PAGE_PLAY")
			}}>
				<div className='moviesCell'>
					<div className='moviesCell-img '>
						{ "material_data" in props.movies && "poster" in props.movies.material_data ? <img className="poster" src={props.movies.material_data.poster || require("../img/defaultPoster.png")} alt='poster'/> : <img className="poster"  src={require("../img/defaultPoster.png")} alt='poster'/>  }
					</div>
					<div className='moviesCell-text'>
						<h2>{props.movies.title_ru}</h2>
						{props.movies.year ? <p>Год: {props.movies.year}</p> : ""}
					</div>

				</div>
			</Cell>
	)
}



// Home.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// 	fetchedUser: PropTypes.shape({
// 		photo_200: PropTypes.string,
// 		first_name: PropTypes.string,
// 		last_name: PropTypes.string,
// 		city: PropTypes.shape({
// 			title: PropTypes.string,
// 		}),
// 	}),
// };

export default MoviesCell;
