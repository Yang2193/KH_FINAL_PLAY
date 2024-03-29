import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import MainPage from './pages/MainPage';
import PlayPage from './pages/PlayPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import FindUserIdPage from './pages/FindUserIdPage';
import FindUserPwPage from './pages/FindUserPwPage';
import Mypage from './pages/MyPage';
import MyProfileEdit from './components/Mypage/MyProfileEdit';
import MyComment from './components/Mypage/MyComment';
import MyPlayLike from './components/Mypage/MyPlayLike';
import MyReview from './components/Mypage/MyReview';
import MyTicketInfo from './components/Mypage/MyTicketInfo';
import PostDetail from './pages/PostDetailPage';
import PostPage from './pages/PostPage';
import PostUpload from './pages/PostUpload';
import ReservePage from './pages/ReservePage';
import PayResult from './components/playPage/KaKaoPay/PayResult';
import PayReady from './components/playPage/KaKaoPay/PayReady';
import PostUpdate from './components/Post/PostUpdate';
import Ticket from './components/Mypage/MyTicketInfoDetail';
import MyProfileEditDetail from './components/Mypage/MyProfileEditDetail';
import KakaoLogin from './components/Account/KakaoLogin';
import KakaoLogout from './components/Account/KakaoLogout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<PlayPage />} />
        <Route path="/join/*" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/auth/kakao/logout" element={<KakaoLogout />} />
        <Route path="/find/id" element={<FindUserIdPage />} />
        <Route path="/find/pw" element={<FindUserPwPage />} />
        <Route path="/myPage" element={<Mypage />} />
        <Route path="/mypage/profile_edit" element={<MyProfileEdit />} />
        <Route path="/mypage/profile_edit/info" element={<MyProfileEditDetail />} />
        <Route path="/myPage/comment" element={<MyComment />} />
        <Route path="/myPage/playlike" element={<MyPlayLike />} />
        <Route path="/myPage/buylist" element={<MyTicketInfo />} />
        <Route path="/myPage/review" element={<MyReview />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/postUpload" element={<PostUpload />} />
        <Route path="/postupdate/:postId" element={<PostUpdate />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/payResult" element={<PayResult />} />
        <Route path="/payReady" element={<PayReady />} />
        <Route path="/ticket/:reserveId" element={<Ticket/>}/>
      </Routes>
    </Router>
  );
}

export default App;