
import './App.css';
import MainDash from './components/mainDash/MainDash';
import RightSide from './components/rightSide/RightSide';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <div className='appGlass'>
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
