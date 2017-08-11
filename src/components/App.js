import React, { Component } from 'react';
import './App.css';
import { AddUser } from './adduser';
import {Header} from './header';
import {ContactList} from './contactslist'
const headertitle="Nordsoftware Assignment"


class App extends Component {
	constructor(props) {
		super(props);

};
render(){
	return(	<div>
		<Header />
		
		<div className="App-adduser">
		<AddUser />
		</div>
		<div><ContactList /></div>
		</div>
	);

}
}




export default App;
