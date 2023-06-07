import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage";
import PlayPage from "./pages/PlayPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import FindAccountPage from "./pages/FindAccountPage";


function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="Info" element={<PlayPage/>}/>
        <Route path="join/*" element={<JoinPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="find" element={<FindAccountPage/>} />
      </Routes>
   </Router>
  );
}

export default App;
