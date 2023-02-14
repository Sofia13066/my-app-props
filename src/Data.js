import React, {useState} from 'react';
import Form from './Form';
import Weather from './Weather';

const Data = () =>{
    let [res, setRes] = useState();
    
    return(
        <div>
            <Form res={res} setRes={setRes}/>
            <Weather res={res}/>
        </div>
    )
}

export default Data;