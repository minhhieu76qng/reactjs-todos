import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id : '',
            job : '',
            note : '',
            priority : 'low'
        }
    }

    isChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    btnAddClick = () => {
        let item = {
            id : '',
            job : this.state.job,
            note : this.state.note,
            priority : this.state.priority
        }

        // gui du lieu lai len app
        this.props.btnAddTodoClick(item);


        // clear state
        this.setState({
            id : '',
            job : '',
            note : '',
            priority : ''
        })

        this.props.toggleAddDialog();
    }
    
    btnCancelClick = () => {
        this.props.toggleAddDialog();
    }

    render() {
        return (
            <div id="editTodo">
                <h3 className="text-center">Add new todo</h3>
                
                <form>
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
                    <button type="reset" className="btn btn-primary mr-2" onClick={() => this.btnAddClick()}>Add</button>
                    <button className="btn btn-secondary" onClick={() => this.btnCancelClick()}>Cancel</button>
                </div>
                </form>
            </div>
        );
    }
}

export default AddTodo;