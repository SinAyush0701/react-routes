import React, { useState } from "react";

const FunctionalComponent= (props) => {
    const [count, setCount]= useState(10);
    const sub= () => {
        setCount(count - 1);
    };
    return(
        <div>
            <p>This is our Functional Component</p>
            <br />
            <button onClick= {sub} >Click on me to decrement the count</button>
            {/* <button onClick= { () => setCount(count - 1)} >Click on me to decrement the count</button> */}
            <h2> {count} </h2>
            <p>My name is {props.name}, my height is {props.height} and I work for {props.company}.</p>
        </div>
    );
};

export default FunctionalComponent;