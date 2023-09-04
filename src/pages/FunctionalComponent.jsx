import React, { useState } from "react";
import BaseHoc from "../hoc/BaseHoc";

const FunctionalComponent= (props) => {
    const [count, setCount]= useState(10);
    const sub= () => {
        setCount(count - 1);
    };

    // const [name, setName]= useState("DevTown");
    const [changeName, setChangeName]= useState(" ");

    const {name, height, company, setName}= props; // destructuring the object


    return(
        <div>
            <p>This is our Functional Component</p>
            <br />
            <button onClick= {sub} >Click on me to decrement the count</button>
            {/* <button onClick= { () => setCount(count - 1)} >Click on me to decrement the count</button> */}
            <h2> {count} </h2>
            <p>My name is {name}, my height is {height} and I work for {company}. </p>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)}>Change Name</button> {/* Arrow fumction is called to avoid infinite loop */}
        </div>
    );
};

export default BaseHoc(FunctionalComponent);