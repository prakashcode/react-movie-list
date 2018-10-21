import React, { Component } from 'react';
import { connect } from "react-redux";
import { genresFetchData } from "./redux/actions/genres";
import GenreCheckBox from './GenreCheckBox'

class GenreFilter extends Component {

    constructor(props) {

        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.genresFetchData();
    }

    render() {
        return (
            <div>
                <h4>Genres</h4>
                <div>
                    {
                        this.props.genreList &&
                        [].concat(this.props.genreList.genres)
                            .map((genre, index) =>
                                <GenreCheckBox key={genre.id} index={index} genre={genre} />
                            )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        genreList: state.genres.data,
        hasErrored: state.genres.hasErrored,
        errorMessage: state.genres.errorMessage
    };
};


export default connect(mapStateToProps, { genresFetchData })(GenreFilter);

