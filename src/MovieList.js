import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from 'react-bootstrap';
import { moviesFetchData } from './redux/actions/movies';
import Filters from './Filters'
import MovieItem from './MovieItem'

export class MovieList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.moviesFetchData();
  }

  render() {

    return (

      <Grid>
        <Row className="show-grid">
          <Col xs={2} md={2}>

            {/* Filters Section */}
            <Filters />

          </Col>
          <Col xs={10} md={10} className="movieListBody">

            <h3>Now Playing Movies</h3>
            <div>

              {
                this.props.movieList &&
                [].concat(this.props.movieList.results)
                  .filter(a => a.show && a.filteredByRating)    //Filter checks to show or hide
                  .sort((a, b) => b.popularity - a.popularity)  //Sort by popularity
                  .map((movie, index) =>

                    //Movie Item Card  
                    <MovieItem key={movie.id} movieObj={movie} />
                  )
              }

            </div>

          </Col>
        </Row>
      </Grid>

    );
  }
}

// function for us to pass state, designed for us to set new properties based on new state
const mapStateToProps = state => {
  return {
    movieList: state.movies.data,
    hasErrored: state.movies.hasErrored,
    errorMessage: state.movies.errorMessage
  };
};

// connect method from redux:
// * moviesFetchData = method call (map to action)
// * MovieList = component (create this component)
export default connect(mapStateToProps, { moviesFetchData })(MovieList);
