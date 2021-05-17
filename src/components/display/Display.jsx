import React from 'react'
import PropTypes from 'prop-types'
import style from '../../style.css'

const Display= ({greeting, userName}) => (
    <div className={style.nameTag}>
        <h1 className={style.nameHeader}>{userName}</h1>
        <p>{greeting}</p>
    </div>
)

Display.propTypes = {
    userName: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired
}

export default Display;
