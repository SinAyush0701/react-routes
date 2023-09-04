
// import './App.css';
import ClassComponent from "./pages/ClassComponent";
import FunctionalComponent from "./pages/FunctionalComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import BaseHoc from "./hoc/BaseHoc";

function App() {
  const company = "dt";
  const [name, setName]= useState("Ayush Singh");

  return (
    // <div className="App">
    //   <h1>Class Component</h1>
    //   <ClassComponent />
    //   <h1>Functional Component</h1>
    //   <FunctionalComponent name= {name} height={6} company= {company} setName= {setName} />
    // </div>
    <Routes>
      <Route path="/" element= {
      // <BaseHoc>
      <ClassComponent />
      // </BaseHoc>
      } />
      <Route path="/functional-component" element= {
      // <BaseHoc>
      <FunctionalComponent
      name= {name}
      height= {6} 
      company= {company} 
       setName= {setName}
      />
      // </BaseHoc>
      } />
    </Routes>
  );
}

export default App;
