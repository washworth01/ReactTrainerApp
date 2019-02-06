import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import NavBar from './navbar.js'; 
import TrainerForm from './trainerForm.js';
import './App.css';

class App extends Component {
  constructor() {
    super ();
    this.state ={
      header: "New Trainer Form",
      formField1: "Name",
      formField2: "Email",
      formField3: "Phone Number",
      formField4: "Skill",
      formResponse: " "
    }
    
    this.updateState = (result) => {
        if (result === "true"){
          this.setState({
            formResponse: "Trainer has been added"
        })
      }
        else{
          this.setState({
           formResponse: "Form is incomplete!"
          })
        }
      }
    }
  render(){
    return(
      <div>
        <NavBar></NavBar>
        <div>
        <Header headerProp={this.state.header}></Header>
        <TrainerForm
        field1Prop={this.state.formField1}
        field2Prop={this.state.formField2}
        field3Prop={this.state.formField3}
        field4Prop={this.state.formField4}
        responseProp={this.state.formResponse}
        updateResponse={this.updateState}>
        </TrainerForm>
        </div>
      </div>
    );
  }
}
export default App;