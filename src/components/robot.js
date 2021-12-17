import React from "react";
import 'tachyons';


const Robot = ({id,name,email})=>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img src ={`https://robohash.org/${id}?200x200`} alt = "robotimage"/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Robot;