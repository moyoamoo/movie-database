import React, { Component } from 'react';

class Search extends Component {
    state = {  } 
   
    render() { 
        const {onSearchInput} = this.props;
        return (<div>
           <form>
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" name="search" onInput={onSearchInput}/>
           </form>
        </div>);
    }
}
 
export default Search;