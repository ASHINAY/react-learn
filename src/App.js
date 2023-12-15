import './App.css';
// import nature from ".../assets/nature";
import { quotes } from './constant';

function App() {
 
  return (
    <div className='root'>
      <button className='desktopView'>Desktop</button>
      <button className='mobileView'>MobileView</button>
      {/* <button onClick={ColorChange} className="button">Change Color</button> */}
      {/* <h1>{quotes}</h1> */}
    </div>
  );
}

export default App;
