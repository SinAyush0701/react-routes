import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component{
    constructor(props) {
        super(props);
        
        this.state= {
        name: "ayush",
        age: 22,
        };
        console.log("Constructor");
    }

    // mounted life cycle method
    componentDidMount(){
        console.log("Component did mount suucessfully");
    }

    // updated life cycle method
    componentDidUpdate(){
        console.log("Component got updated successfully");
    }

    componentWillUnmount(){
        console.log("Component unmounted suucessfully");
    }

    render() {
        console.log("Render invoked!!");
        return(
            <div>
                <p>This is our Class Component</p>
                <button onClick= {() => 
                this.setState({
                    ...this.state,  // using spread operator
                    age: this.state.age +1,
                })
            }> Add 1 to your age </button>
            <p> {this.state.age} </p>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);