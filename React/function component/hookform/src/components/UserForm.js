import React, { useState } from  'react';
import Result from './Result';    
    
const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstError, setfirstError] = useState("");
    const [lastError, setlastError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passError, setpassError] = useState("");
    const [confError, setconfError] = useState("");
    const {firstname, lastname, email, password, confpassword} = inputs;

    const handleFirst = (e) => {
        setInputs({
            ...inputs,
            firstname: e.target.value
        })

        if(e.target.value.length < 2) {
            setfirstError("first name should be at least 2 character");
        }else{
            setfirstError("");
        }
    }
    const handleLast = (e) => {
        setInputs({
            ...inputs,
            lastname: e.target.value
        })
        if(e.target.value.length < 2) {
            setlastError("last name should be at least 2 character");
        }else{
            setlastError("");
        }
    }
    const handleEmail = (e) => {
        setInputs({
            ...inputs,
            email: e.target.value
        })
        if(e.target.value.length < 5) {
            setemailError("email should be at least 5 character");
        }else{
            setemailError("");
        }
    }
    const handlePass = (e) => {
        setInputs({
            ...inputs,
            password: e.target.value
        })
        if(e.target.value.length < 8) {
            setpassError("password should be at least 8 character!");
        }else{
            setpassError("");
        }
    }
    const handleConf = (e) => {
        setInputs({
            ...inputs,
            confpassword: e.target.value
        })
        if(e.target.value !== inputs.password) {
            setconfError("password should equal to conf password!");
        }else{
            setconfError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { 
            firstname : inputs.firstname,
            lastname: inputs.lastname,
            email:inputs.email, 
            password:inputs.password 
        };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    return(
        <div>
            <form onSubmit={ createUser }>
    {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    }
                 <div>
                    <label>Firstname: </label> 
                    <input type="text" name="firstname" onChange={ handleFirst } />
                    {
                    firstError ?
                    <p style={{color:'red'}}>{ firstError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Lastname: </label> 
                    <input type="text" name="lastname" onChange={ handleLast } />
                    {
                    lastError ?
                    <p style={{color:'red'}}>{ lastError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email"  onChange={ handleEmail } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={ handlePass } />
                    {
                    passError ?
                    <p style={{color:'red'}}>{ passError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confpassword" onChange={ handleConf } />
                    {
                    confError ?
                    <p style={{color:'red'}}>{ confError }</p> :
                    ''
                }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default UserForm;