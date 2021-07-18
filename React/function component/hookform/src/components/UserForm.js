import React, { useState } from  'react';
import Result from './Result';    
    
const UserForm = (props) => {

    const {inputs, setInputs} = props;
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };
    
    return(
        <div>
            <form >
                <div>
                    <label>Firstname: </label> 
                    <input type="text" name="firstname" onChange={ onChange } />
                </div>
                <div>
                    <label>Lastname: </label> 
                    <input type="text" name="lastname" onChange={onChange } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email"  onChange={ onChange } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={onChange } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confpassword" onChange={ onChange } />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default UserForm;