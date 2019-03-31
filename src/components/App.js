import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header';
import Search from './Search';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [{
				id: '1',
				job: 'Mua com',
				priority: 'hight',
				note: 'Hoan thanh truoc 5h chieu',
				completed : false
			},
			{
				id: '2',
				job: 'Di choi',
				priority: 'low',
				note: '',
				completed : true
			},
			{
				id: '3',
				job: 'Di hoc',
				priority: 'medium',
				note: '',
				completed : false
			}],

			isAddTodo: false,

			isEditTodo: false
		}
	}

	dim_screen = () => {
		return this.state.isAddTodo === true || this.state.isEditTodo === true ? "" : " hidden";
	}

	// =========================== ADD TODO ===============================

	toggleAddDialog = () => {
		this.setState({
			isAddTodo: !this.state.isAddTodo
		})
	}

	btnAddTodoClick = item => {
		this.setState({
			todos: [...this.state.todos, item]
		})
	}

	renderDialogAdd = () => {
		if (this.state.isAddTodo === true) {
			return <AddTodo btnAddTodoClick={(item) => this.btnAddTodoClick(item)} toggleAddDialog={() => this.toggleAddDialog()} />;
		}
	}

	//  =========================== EDIT TODO ============================
	renderDialogEdit = () => {
		let item;

		this.state.todos.map((value, index) => {
			if (value.id === this.state.editItemId) {
				item = value;
			}
		})

		if (this.state.isEditTodo === true) {
			return <EditTodo data={item} toggleEditDialog={() => this.toggleEditDialog()} btnEditClick={(item) => this.getEditData(item)} />;
		}
	}

	toggleEditDialog = () => {
		this.setState({
			isEditTodo: !this.state.isEditTodo
		})
	}

	btnEditClick = (id) => {
		this.setState({
			editItemId: id
		});

		this.toggleEditDialog();

	}

	getEditData = (item) => {
		// gui du lieu ve server
		console.log(item);

		let arrayData = [...this.state.todos];

		arrayData.map((value, key) => {
			if (value.id === item.id)
			{
				value.job = item.job;
				value.note = item.note;
				value.priority = item.priority;
			}
		})

		this.setState({
			todos : arrayData
		})
	}

	// ========================== REMOVE TODO =============================

	btnRemoveClick = (id) => {
		// gui du lieu ve server
		this.setState({
			todos: this.state.todos.filter((value) => value.id !== id)
		})
	}

	// ======================= COMPLETED TODO ===========================
	todoClick = (id) => {
		console.log(id);

		let arrayData = [...this.state.todos];

		arrayData.map((value, key) => {
			if (value.id === id)
			{
				value.completed = !value.completed;
			}
		});

		this.setState({
			todos : arrayData
		})
	}

	// =============================== RENDER ===========================
	render() {
		return (
			<div className="App">

				<div id={"dim-screen" + this.dim_screen()}></div>


				{/* comp header */}
				<Header />

				<div className="container">
					{/* comp search  and sort */}
					<Search btnAddClick={() => this.toggleAddDialog()} />

					{/* comp todos list */}
					<TodoList data={this.state.todos} btnEditClick={(id) => this.btnEditClick(id)}
						btnRemoveClick={(id) => this.btnRemoveClick(id)} todoClick={(id) => this.todoClick(id)}/>

					{
						this.renderDialogAdd()
					}

					{
						this.renderDialogEdit()
					}
				</div>
			</div>
		);
	}
}

export default App;
