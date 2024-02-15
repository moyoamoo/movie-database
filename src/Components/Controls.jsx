import React, { Component } from "react";

class Controls extends Component {
  state = {};
  render() {
    const {onSortSelect} = this.props;
    return (
      <div>
        <select onChange={onSortSelect}>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
      </div>
    );
  }
}

export default Controls;
