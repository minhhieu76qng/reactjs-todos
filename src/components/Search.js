import React, { Component } from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            searchValue : ''
        }
    }
    
    isChanged = (event) => {

        const value = event.target.value;

        this.props.btnSearchClick(value);

        this.setState({
            searchValue : value
        })
    }

    btnSearchClick = (event) => {
        event.preventDefault();
        this.props.btnSearchClick(this.state.searchValue);
    }

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
                            <input value={this.searchValue} onChange={(event) => this.isChanged(event)} type="search" placeholder="Search"/>
                        </div>
                        <button onSubmit={() => {return false}} onClick={(event) => this.btnSearchClick(event)} className="btn btn-outline-success ml-2">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}
