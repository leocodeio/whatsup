import "./App.css";
import Start from "./screens/Start";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Text from "./screens/Text";
import Error from "./screens/Error";
import AccountDetails from './context/AccountDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AccountDetails>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route exact path="/chat" element={<Text />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </AccountDetails>
      </BrowserRouter>
    </div>
  );
}

export default App;
