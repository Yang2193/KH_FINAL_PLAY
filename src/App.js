import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage";
import PlayPage from "./pages/PlayPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import FindAccountPage from "./pages/FindAccountPage";
import Mypage from "./pages/MyPage";
import OneReview from "./pages/OneReviewPage";
import PostDetail from "./pages/PostDetailPage";
import PostPage from "./pages/PostPage";
import PostUpload from "./pages/PostUpload";


function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/info" element={<PlayPage/>}/>
        <Route path="/join/*" element={<JoinPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/find" element={<FindAccountPage/>} />
        <Route path="/myPage" element={<Mypage/>} />
        <Route path="/oneReview" element={<OneReview/>} />
        <Route path="/post/select/:postId" element={<PostDetail/>} />
        <Route path="/post" element={<PostPage/>} />
        <Route path="/postUpload" element={<PostUpload/>} />
      </Routes>
   </Router>
  );
}

export default App;
