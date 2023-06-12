import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage";
import PlayPage from "./pages/PlayPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import FindAccountPage from "./pages/FindAccountPage";
import Mypage from "./pages/MyPage";
import OneReview from "./pages/OneReviewPage";
import ReviewDetail from "./pages/ReviewDetailPage";
import CommentPage from "./pages/CommentPage";


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
        <Route path="/OneReview" element={<OneReview/>} />
        <Route path="/ReviewDetail" element={<ReviewDetail/>} />
        <Route path="/CommentPage" element={<CommentPage/>} />
      </Routes>
   </Router>
  );
}

export default App;
