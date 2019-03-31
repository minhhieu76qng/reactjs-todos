import React, { Component } from 'react';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id : this.props.data.id,
            job : this.props.data.job,
            note : this.props.data.note,
            priority : this.props.data.priority,
        }
    }
    
    btnCancelClick = () => {
        this.props.toggleEditDialog();
    }

    btnEditClick = () => {
        let item = this.state;
        this.props.btnEditClick(item);
    }

    isChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div id="editTodo">
                <h3 className="text-center">Edit todo</h3>
                <div className="form-group">
                    <label htmlFor="job" >Todo name:</label>
                    <input value={this.state.job} onChange={(event) => this.isChanged(event)} name="job" type="text" className="form-control" aria-describedby="helpId" placeholder="Job" />
                    <small id="helpId" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="note" >Note:</label>
                    <textarea value={this.state.note} onChange={(event) => this.isChanged(event)} name="note" type="text" className="form-control" aria-describedby="helpId" placeholder="Note" />
                    <small id="helpId" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="priority" >Priority:</label>
                    <select value={this.state.priority} onChange={(event) => this.isChanged(event)} className="form-control" name="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="hight">Hight</option>
                    </select>
                </div>
                <div className="form-group text-center mb-0">
                    <button className="btn btn-primary mr-2" onClick={() => this.btnEditClick()}>Edit</button>
                    <button className="btn btn-secondary" onClick={() => this.btnCancelClick()}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default EditTodo;