import "./App.css";
import Start from "./screens/Start";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from "./screens/Error";
import AccountDetails from './context/AccountDetails'
import Chat from "./screens/Chat";

function App() {
  return (
    <div className="h-svh w-svw">
      <BrowserRouter>
        <AccountDetails>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AccountDetails>
      </BrowserRouter>
    </div>
  );
}

export default App;
