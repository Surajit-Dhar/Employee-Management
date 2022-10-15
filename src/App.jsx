
import './App.css';
import {Routes , Route} from "react-router-dom";
import Add from './components/Add';
import Edit from './components/Edit';
import HomeData from './components/HomeData';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeData/>}></Route>
        <Route path="/add-employee" element={<Add/>}></Route>
        <Route path="/edit-employee/:id" element={<Edit/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
