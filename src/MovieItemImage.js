import React, { Component } from 'react';

class MovieItemImage extends Component {

    render() {
        return (

            <div className="movieImage">
                <img width="100%" src={"https://image.tmdb.org/t/p/w200" + this.props.movieObj.poster_path} />
            </div>
        );
    }
}

export default MovieItemImage;

