import React, { Component } from 'react';
import RatingFilter from './RatingFilter'
import GenreFilter from './GenreFilter'

class Filters extends Component {

    constructor(props) {

        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="filterBox">
                <h3>Filters</h3>

                {/* Rating Filter Component */}
                <RatingFilter />

                {/* Genre Filter Component */}
                <GenreFilter />

            </div>
        );
    }
}

export default Filters;

