import React, { Component } from 'react';
import { connect } from "react-redux";
import { filterByRating } from "./redux/actions/movies";

class RatingFilter extends Component {

    constructor(props) {

        super(props);

        this.state = {
            ratingValue: 3
        };
    }

    setRating(event) {
        this.setState({ ratingValue: event.target.value });
        this.props.filterByRating(this.state.ratingValue);
    }

    render() {
        return (
            <div>
                <h4>Rating</h4>
                <div className="filterRating">
                    <input type="number"
                        step="0.5"
                        min="0"
                        max="10"
                        defaultValue={this.state.ratingValue}
                        onChange={this.setRating.bind(this)} />
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        hasErrored: state.genres.hasErrored,
        errorMessage: state.genres.errorMessage
    };
};

export default connect(mapStateToProps, { filterByRating })(RatingFilter);

