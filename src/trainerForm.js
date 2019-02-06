import React, { Component } from 'react';
import './App.css';

class TrainerForm extends Component {
    constructor() {
        super();
        this.state={
            value: '',
            nameValue: '',
            emailValue: '',
            phoneValue: '',
            skillValue: '',
            trainers: []
        }

        this.nameHandleChange = (event) =>{
            this.setState({
                nameValue : event.target.value
            })
        }

        this.emailHandleChange = (event) =>{
            this.setState({
                emailValue: event.target.value
            })
        }
        
        this.phoneHandleChange = (event) =>{
            this.setState({
                phoneValue: event.target.value
            })
        }
        
        this.skillHandleChange = (event) =>{
            this.setState({
                skillValue: event.target.value
            })
        }
        
        this.isFromComplete = () =>{
            if(this.state.nameValue == '' || this.state.emailValue == '' || this.state.phoneValue == '' || this.state.skillValue == ''){
                    this.props.updateResponse("false");
            }
            else{
                    this.props.updateResponse("true");
                    let trainers = this.state.trainers;
                    trainers.push({
                        id: trainers.length,
                        name: this.state.nameValue,
                        email: this.state.emailValue,
                        phone: this.state.phoneValue,
                        skill: this.state.skillValue
                    })
                    this.setState({
                        trainers
                    })
                    console.log(trainers)
            }
        }
    }
    render() {
        return (
            <div class="Trainer-Form">
                <ul>
                    <h2 id="field1">{this.props.field1Prop}<input type="text" onChange={this.nameHandleChange} value={this.state.nameValue}/></h2>
                    <h2 id="field2">{this.props.field2Prop}<input type="text" onChange={this.emailHandleChange} value={this.state.emailValue}/></h2>
                    <h2 id="field3">{this.props.field3Prop}<input type="text" onChange={this.phoneHandleChange} value={this.state.phoneValue}/></h2>
                    <h2 id="field4">{this.props.field4Prop}<input type="text" onChange={this.skillHandleChange} value={this.state.skillValue}/></h2>
                    <button id="submitDetails" onClick={this.isFromComplete}>Submit</button>
                    <p>{this.props.responseProp}</p>
                </ul>
            </div>
        );
    }
}

export default TrainerForm