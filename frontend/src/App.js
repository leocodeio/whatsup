import "./App.css";
import Start from "./screens/Start";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Text from "./screens/Text";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/chat" element={<Text />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
