
// import './App.css';
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <h1>Functional Component</h1>
      <FunctionalComponent name= {"Ayush Singh"} height={6} company= {"Company"} />
    </div>
  );
}

export default App;
