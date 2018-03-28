// komponent kontener z wewnętrznym stanem
import React, {Component} from 'react';
import styles from './UserForm.css';

class UserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {name: ''};
	}

	// Dwie metody wywoływane przez zachodzące eventy. Callbacki zmieniają stan komponentu.
	handleSubmit(e) {
		e.preventDefault();
		this.props.onUserSubmit(this.state.name);		// onUserSubmit() - metoda przekazana jako props z App.js w <UserForm />
	}

	handleChange(e) {
		this.setState({ name: e.target.value });
	}
	// RENDERING i przekazanie propsów do <form> i <input>
	render() {
		return (
			<form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
				<input
					className={styles.UserInput}
					placeholder='Write your nickname and press enter'
					onChange={e => this.handleChange(e)}
					value={this.state.name} />
			</form>
		);
	}
}

export default UserForm;