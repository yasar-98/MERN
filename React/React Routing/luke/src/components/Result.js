import React,{useState, useEffect} from 'react'

const Result = (props) => {
    const {id, resource} = props;
    const [result, setResult] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/${props.resource}/${props.id}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setResult(response);
                
            } )
    }, [id, resource]);

    return (
        <div>
            {/* <h1>name: {result.name}</h1>
            <p>height: {result.height}</p>
            <p>mass: {result.mass}</p>
            <p>hair_color: {result.hair_color}</p>
            <p>skin_color: {result.skin_color}</p> */}
            {
                Object.keys(result).map((key, index) => {
                    return <h1>{key}: {result[key]}</h1>
                })
            }
            {/* {
                resource == "people" ?
                <p>{result.height}</p> :
                <p>{result.name}</p>
            } */}
        </div>

        
    )
}

export default Result
