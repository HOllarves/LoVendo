import React from 'react';
import './SubBar.css';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

var SubBar = React.createClass({
  getInitialState() {
    return {opened: false}
  },
  handleChange() {
    this.setState({opened: !this.state.opened})
  },
  renderClosed() {
    return (
      <div className="sub-navbar">
        <button className="sub-navbar-item btn btn-default" onClick={this.handleChange}><i className="glyphicon glyphicon-tasks"></i></button>
      </div>
    );
  },
  renderOpened() {
    return (
      <div className="sub-navbar">
        <button className="sub-navbar-item btn btn-default btn-active" onClick={this.handleChange}><i className="glyphicon glyphicon-tasks glyphicon-white"></i></button>

        <ButtonGroup>
          <DropdownButton className="filter-ddown1" id="filter-ddown1" title="Dropdown">
          <MenuItem className="itemxx" href="#books">Books</MenuItem>
          <MenuItem className="itemxx" href="#podcasts">Podcasts</MenuItem>
          <MenuItem className="itemxx" href="#">Tech I Like</MenuItem>
          <MenuItem className="itemxx" href="#">About me</MenuItem>
          <MenuItem className="itemxx" href="#addBlog">Add a Blog</MenuItem>
          </DropdownButton>
        </ButtonGroup>
        <button className="sub-navbar-item btn btn-default btn-divider"></button>
        <ButtonGroup>
          <DropdownButton className="filter-ddown1" id="filter-ddown2" title="Dropdown2">
          <MenuItem className="itemxx" href="#books">Books</MenuItem>
          <MenuItem className="itemxx" href="#podcasts">Podcasts</MenuItem>
          <MenuItem className="itemxx" href="#">Tech I Like</MenuItem>
          <MenuItem className="itemxx" href="#">About me</MenuItem>
          <MenuItem className="itemxx" href="#addBlog">Add a Blog</MenuItem>
          </DropdownButton>
        </ButtonGroup>

      </div>
    );
  },
  render() {
    return (this.state.opened) ? this.renderOpened()
                               : this.renderClosed();
  }
});

export default SubBar;
