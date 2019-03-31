import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div id="header" className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-3">Todo List</h1>
                    <p className="lead">A todo list using ReactJS</p>
                    <hr className="my-2"/>
                </div>
            </div>
        );
    }
}

export default Header;