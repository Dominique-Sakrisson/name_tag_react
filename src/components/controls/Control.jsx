import React from 'react'
import PropTypes from 'prop-types'

const Control = ({onNameChange, onGreetingChange}) => (
    <form>
        <label htmlFor='nameInput'>Who are you?</label>
        <input id='nameInput' type='text' onChange={onNameChange}/>
        <label htmlFor="greetingInput">Choose your greeting</label>
        <input id='greetingInput' type="text" onChange={onGreetingChange} />
    </form>
)

Control.propTypes ={
    onGreetingChange: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,

}

export default Control;
