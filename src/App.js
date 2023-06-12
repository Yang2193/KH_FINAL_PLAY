import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage";
import PlayPage from "./pages/PlayPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import FindAccountPage from "./pages/FindAccountPage";
import Mypage from "./pages/MyPage";


function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="Info" element={<PlayPage/>}/>
        <Route path="join/*" element={<JoinPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="find" element={<FindAccountPage/>} />
        <Route path="mypage" element={<Mypage/>} />
      </Routes>
   </Router>
  );
}

export default App;
