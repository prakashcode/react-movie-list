import React, { Component } from 'react';
import moment from 'moment';


class MovieItemDetail extends Component {
    render() {
        return (

            <div className="movieDetails">
                <h4>{this.props.movieObj.title}</h4>

                <p>{this.props.movieObj.overview}</p>
                <div className="voting"><strong>Voting:</strong> {(this.props.movieObj.vote_average * 10)}%</div>
                <div className="release">Released on {moment(this.props.movieObj.release_date).format('DD/MMM/YYYY')}.</div>

            </div>
        );
    }
}

export default MovieItemDetail;

