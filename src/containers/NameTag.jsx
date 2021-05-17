import React, { Component } from 'react'
import Controls from '../components/controls/Control'
import Display from '../components/display/Display'
import style from '../style.css'
export default class NameTag extends Component{
    state={
        userName: '',
        greeting: ''
    }

    handleGreetingChange = ({target}) => {
        this.setState({greeting: target.value})
    }
    handleNameChange = ({target}) => {
        this.setState({userName: target.value});
    }
    handleFormSubmit = async(event) => {
        event.preventDefault();
        this.setState({userName})
    } 
    render() {
        const {userName, greeting} = this.state
        return (
            <div >
                <Controls onGreetingChange={this.handleGreetingChange} onNameChange={this.handleNameChange}/>
                <Display userName={userName} greeting={greeting} />
            </div>
        )
    }
}
