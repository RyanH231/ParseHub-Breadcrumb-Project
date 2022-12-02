import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import GetContents from './components/getcontents';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<GetContents/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
