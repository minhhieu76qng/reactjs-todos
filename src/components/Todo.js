import React, { Component } from 'react';

class Todo extends Component {

    btnEditClick = (event) => {
        event.stopPropagation();
        let id = this.props.data.id;
        this.props.btnEditClick(id);
    }

    btnRemoveClick = (event) => {
        event.stopPropagation();
        let id = this.props.data.id;
        this.props.btnRemoveClick(id);
    }

    todoClick = () => {
        let id = this.props.data.id;
        this.props.todoClick(id);
    }

    render() {
        console.log(this.props.data);
        return (
            <tr onClick={() => this.todoClick()} className={this.props.data.completed === true ? "completed" : ""}>
                <td>{this.props.index + 1}</td>
                <td>{this.props.data.job}</td>
                <td>{this.props.data.note}</td>
                <td>
                    <div className={"priority " + this.props.data.priority}>{this.props.data.priority[0].toUpperCase() + this.props.data.priority.substring(1, this.props.data.priority.lenght)}</div>
                </td>
                <td>
                    <div className="form-group mb-0">
                        {
                            this.props.data.completed === false ? (<button className="btn btn-warning mr-2" title="Edit this todo" onClick={(event) => this.btnEditClick(event)}>
                            <i className="fa fa-pencil-square" aria-hidden="true"></i>
                        </button>) : null
                        }

                        <button className="btn btn-danger" title="Remove this todo" onClick={(event) => this.btnRemoveClick(event)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Todo;