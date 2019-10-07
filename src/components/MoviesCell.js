import React from 'react';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';



const MoviesCell = (props) => {
	return (
			<div className='moviesCell' onClick={() => {
                props.setIframeUrl(props.movies.link);
				props.setMoviesInfo(props.movies);
				props.setActiveView("preview")
			}}>
				<div className="moviesCellDiv">
					<div className='moviesCell-img '>
						{"material_data" in props.movies && "poster_url" in props.movies.material_data ?
							<img className="poster"
								 src={props.movies.material_data.poster_url || require("../img/defaultPoster.png")}
								 alt='poster'/> :
							<img className="poster" src={require("../img/defaultPoster.png")} alt='poster'/>}


					</div>
					<div className='moviesCell-text'>
						<p className="movieNameList">{props.movies.title}</p>
						<div className='moviesCell-rating'>
							{"material_data" in props.movies && "kinopoisk_rating" in props.movies.material_data ?
								<span className='kpid'><Icon24FavoriteOutline width={18}
																			  height={18}/> {props.movies.material_data.kinopoisk_rating}  </span> : ""}
							<span className='moviesCellYear'> {props.movies.year ? <>{props.movies.year}</> : ""} </span>
                </div>
            </div>

				</div>
			</div>
	)
}


export default MoviesCell;
