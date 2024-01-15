import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from './Component/Tabs';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Tabs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
