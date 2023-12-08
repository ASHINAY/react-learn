import './App.css';
// import nature from ".../assets/nature";
import { quotes } from './constant';
function App() {
 
  const ColorChange = () =>{

  }
  return (
    <div className="root">
      
      {/* <button onClick={ColorChange} className="button">Change Color</button> */}
      <h1>{quotes}</h1>
    </div>
  );
}

export default App;
