import React, { Component } from 'react';

export default class Search extends Component {
    btnAddClick = () => {
        this.props.btnAddClick();
    }
    render() {
        return (
            <div className="comp-utility-search back-dark mb-3">
                <div className="utility">
                    <button className="btn btn-primary" onClick={() => this.btnAddClick()} title="Add new todo">Add todo</button>
                </div>

                <form className="form-search">
                    <div className="search-box">
                        <div className="wrapper">
                            <input type="search" placeholder="Search"/>
                        </div>
                        <button className="btn btn-outline-success ml-2">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}
