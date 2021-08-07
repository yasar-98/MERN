import React from 'react'
import {Link} from '@reach/router'

const Header = (props) => {
    return (
        <div>
            <h1>{props.header}</h1>
            <p><Link to={props.route}>{props.redirect}</Link></p>
            <p>{props.content}</p>
        </div>    )
}

export default Header
