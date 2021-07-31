import React , { useState }from 'react'
import { Link } from '@reach/router';

export const FormApi = () => {
    const [resource, setrRsource] = useState("people");
    const [id, setId] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        setrRsource(resource);
        setId(id);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Search for: </label> 
                    <select value={resource} onChange={e => setrRsource(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    <input type="number" step="1" onChange={ (e) => setId(e.target.value) } />
                </div>
                <Link to={`/${resource}/${id}`}> Search </Link>
            </form>

        </div>
    )
}
