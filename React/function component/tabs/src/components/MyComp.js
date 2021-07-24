import React, {useState} from 'react'
import Button from '@material-ui/core/Button';

const MyComp = () => {
    const taps=["Tap1","Tap2","Tap3"];
    const [msg, setMsg]= useState("");
    const clickHandler = (e,value,i) => {
        e.preventDefault();
        setMsg(value+ " was tapped");
    }
    return (
        <div>
            {
            taps.map((value,i) => <Button variant="contained" color="primary" key={i} onClick={ e => clickHandler(e,value,i)}>
                {value}
            </Button>)
            }
            <p>{msg}</p>
        </div>
    )
}

export default MyComp
