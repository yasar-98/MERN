import React from 'react'
import Button from '@material-ui/core/Button';


const TapsShow = (props) => {
    const taps=["Tap1","Tap2","Tap3"];
    const clickHandler = (e,value,i) => {
        e.preventDefault();
        // setMsg(value+ " was tapped");
        props.data(value+ " was tapped");
    }

    return (
        <div>
            {
            taps.map((value,i) => <Button variant="contained" color="primary" key={i} onClick={ e => clickHandler(e,value,i)}>
                {value}
            </Button>)
            }
        </div>
    )
}

export default TapsShow
