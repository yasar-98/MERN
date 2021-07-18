import React from 'react'

const Result = (props) => {
    const {firstname, lastname, email, password, confpassword} = props.data;
    return (
        <div>
            <p>Firstname : {firstname}</p>
            <p>Lastname : {lastname}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <p>Conf. password : {confpassword}</p>
        </div>
    )
}

export default Result
