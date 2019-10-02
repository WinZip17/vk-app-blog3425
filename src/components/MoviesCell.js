import React from 'react';

const MoviesCell = (props) => {

	return (
			<div className='moviesCell' onClick={() => {
                props.setIframeUrl(props.movies.link);
				props.setMoviesInfo(props.movies);
			    props.setActiveModal("MODAL_PAGE_PLAY")
			}}>
				<div className="moviesCellDiv">
					<div className='moviesCell-img '>
						{ "material_data" in props.movies && "poster_url" in props.movies.material_data ? <img className="poster" src={props.movies.material_data.poster_url || require("../img/defaultPoster.png")} alt='poster'/> : <img className="poster"  src={require("../img/defaultPoster.png")} alt='poster'/>  }
					</div>
					<div className='moviesCell-text'>
						<p><b>{props.movies.title}</b></p>
						{props.movies.year ? <p>Год: {props.movies.year}</p> : ""}
					</div>

				</div>
			</div>
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
