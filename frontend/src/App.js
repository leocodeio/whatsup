import "./App.css";
import Start from "./screens/Start";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
