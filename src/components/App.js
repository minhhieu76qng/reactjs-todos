import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header';
import Search from './Search';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

import {database} from './Firebase';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],

			isAddTodo: false,

			isEditTodo: false
		}
	}

	reUpdateDatabase = () => {
		let db = database.ref('Notes/');
		db.on('value', notes => {
			let arrayData = [];
			notes.forEach(element => {
				const key = element.key;
				const val = element.val();
				
				let item = {...val, id : key};

				arrayData.push(item);
			});

			this.setState({
				todos : arrayData
			})
		})
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
		let db = database.ref('Notes/' );

		let child = db.child(item.id);

		child.update({
			job : item.job,
			note : item.note,
			priority : item.priority,
			completed : item.completed
		});

		// cap nhat state
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
		console.log(id);
		let db = database.ref('Notes/');

		db.child(id).remove();
		// cap nhat state
		this.setState({
			todos: this.state.todos.filter((value) => value.id !== id)
		})
	}

	// ======================= COMPLETED TODO ===========================
	todoClick = (item) => {

		// gui du lieu
		let child = database.ref('Notes/' + item.id);

		child.update({
			completed : item.completed
		})

		// cap nhat state
		let arrayData = [...this.state.todos];

		arrayData.map((value, key) => {
			if (value.id === item.id)
			{
				value.completed = !value.completed;
			}
		});

		this.setState({
			todos : arrayData
		})
	}

	// =============================== RENDER ===========================
	
	componentWillMount() {
		this.reUpdateDatabase();
	}
	
	render() {
		// this.reUpdateDatabase();
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
						btnRemoveClick={(id) => this.btnRemoveClick(id)} todoClick={(item) => this.todoClick(item)}/>

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
