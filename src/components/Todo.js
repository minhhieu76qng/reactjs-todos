import React, { Component } from 'react';

class Todo extends Component {

    btnEditClick = () => {
        let id = this.props.data.id;
        this.props.btnEditClick(id);
    }

    btnRemoveClick = () => {
        let id = this.props.data.id;
        this.props.btnRemoveClick(id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.data.job}</td>
                <td>{this.props.data.note}</td>
                <td>
                    <div className={"priority " + this.props.data.priority}>{this.props.data.priority[0].toUpperCase() + this.props.data.priority.substring(1, this.props.data.priority.lenght)}</div>
                </td>
                <td>
                    <div className="form-group mb-0">
                        <button className="btn btn-warning mr-2" title="Edit this todo" onClick={() => this.btnEditClick()}>
                            <i className="fa fa-pencil-square" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger" title="Remove this todo" onClick={() => this.btnRemoveClick()}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Todo;