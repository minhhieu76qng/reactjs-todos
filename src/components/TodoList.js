import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    btnEditClick = (id) => {
        this.props.btnEditClick(id);
    }

    btnRemoveClick = (id) => {
        this.props.btnRemoveClick(id);
    }

    todoClick = (item) => {
		this.props.todoClick(item);
    }
    
    toggleSort = () => {
         this.props.toggleSort();
    }

    render() {
        let {sort} = this.props;
        return (
            <table className="todos-list text-center table table-bordered table-inverse table-hover">
                <caption>Table todo list</caption>
                <colgroup>
                    <col width="5%" />
                    <col width="35%" />
                    <col width="30%" />
                    <col width="15%" />
                    <col width="15%" />
                </colgroup>
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Job</th>
                        <th>Note</th>
                        <th>
                            <div onClick={() => this.toggleSort()} className={"sort " + (sort.status === false ? "" : "active")}>
                                Priority<div className={"triangle " + (sort.type === true ? 'up' : 'down')}></div>
                            </div>
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((value, key) => 
                            <Todo 
                                index={key} 
                                key={key} 
                                data={value}
                                btnEditClick={(id) => this.btnEditClick(id)}
                                btnRemoveClick={(id) => this.btnRemoveClick(id)}
                                todoClick={(item) => this.todoClick(item)}/>)
                    }
                </tbody>
            </table>
        );
    }
}

export default TodoList;