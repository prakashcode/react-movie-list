import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MovieItemDetail from './MovieItemDetail'
import MovieItemImage from './MovieItemImage'

class MovieItem extends Component {
    render() {
        return (

            // Movie Item Card
            <Col xs={6} md={6} className="movieItem">

                <div className="movieItemBody">

                    {/* Movie Item Image Component*/}
                    <MovieItemImage movieObj={this.props.movieObj} />

                    {/* Movie Item Details Component*/}
                    <MovieItemDetail movieObj={this.props.movieObj} />

                </div>
            </Col>

        );
    }
}

export default MovieItem;

