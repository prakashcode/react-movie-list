import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterByGenre } from "./redux/actions/movies";

class GenreCheckBox extends Component {

    constructor(props) {

        super(props);
        this.state = {};
    }

    filterGenre(event) {
        this.props.genreList.genres[event.target.value].checked = event.target.checked;
        this.props.filterByGenre(this.props.genreList.genres.filter(genre => genre.checked));
    }

    render() {
        return (
            <div className="filterCheckBox">
                <label ><input onChange={this.filterGenre.bind(this)} type="checkbox" value={this.props.index} /> {this.props.genre.name} </label>
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


export default connect(mapStateToProps, { filterByGenre })(GenreCheckBox);

