import "./App.css";
import Start from "./screens/Start";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from "./screens/Error";
import AccountDetails from './context/AccountDetails'

function App() {
  return (
    <div className="h-svh w-svw">
      <BrowserRouter>
        <AccountDetails>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </AccountDetails>
      </BrowserRouter>
    </div>
  );
}

export default App;
