import React, { Component } from 'react';
import About from './About';

class Movie extends Component {
    render() { 
        const {movie} = this.props;
        return (<div className='movie'><About movie={movie} /></div>);
    }
}
 
export default Movie;