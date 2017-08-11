import React, {Component} from 'react';
export class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:1,
      name: '',
      email: '',
      tel: ''

    };


  }
  handleChange_id(){
    this.setState({
      id: ++ this.state.id
    });
  }
  handleChange_name=(event)=>{
    this.setState({
      name: event.target.value
    });
  }
  handleChange_email=(event)=>{
    this.setState({
      email: event.target.value
    });
  }
  handleChange_tel =(event)=>{
    this.setState({
      tel: event.target.value
    });
  }
  handleSubmit (event){
    event.preventDefault();
    this.handleChange_id();
    let newUser = {
      id:this.state.id,
      name:this.state.name,
      email:this.state.email,
      tel:this.state.tel
    }
  this.props.addUser(newUser);
  }
  render() {
  	return (
	    <div>
      <div><h4><strong>List of Participants</strong></h4></div>
        <form onSubmit={this.handleSubmit}>
        <input
        	value={this.state.name}
          onChange={this.handleChange_name} placeholder="Enter full name"/>
          <input
        	value={this.state.email}
          onChange={this.handleChange_email} placeholder="e-mail address"/>
          <input
        	value={this.state.tel}
          onChange={this.handleChange_tel} placeholder="phone number"/>

        <button onClick={this.handleSubmit}>adduser</button>

        </form>



	    </div>
    );
  }
  }
