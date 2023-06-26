import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import MainPage from './pages/MainPage';
import PlayPage from './pages/PlayPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import FindAccountPage from './pages/FindAccountPage';
import Mypage from './pages/MyPage';
import OneReview from './pages/OneReviewPage';
import PostDetail from './pages/PostDetailPage';
import PostPage from './pages/PostPage';
import PostUpload from './pages/PostUpload';
import ReservePage from './pages/ReservePage';
import AccountProvider from './context/AccountInfo';
import PayResult from './components/playPage/KaKaoPay/PayResult';
import PayFail from './components/playPage/KaKaoPay/PayFail';
import PayCancel from './components/playPage/KaKaoPay/PayCancel';
import PayReady from './components/playPage/KaKaoPay/PayReady';

function App() {
  return (
    <AccountProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<PlayPage />} />
        <Route path="/join/*" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find" element={<FindAccountPage />} />
        <Route path="/myPage" element={<Mypage />} />
        <Route path="/oneReview" element={<OneReview />} />
        <Route path="/post/select/:postId" element={<PostDetail />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/postUpload" element={<PostUpload />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/payresult" element={<PayResult />} />
        <Route path="/payCancel" element={<PayCancel />} />
        <Route path="/payFail" element={<PayFail />} />
        <Route path="/reserve/payReady" element={<PayReady />} />
      </Routes>
      <ToastContainer />
    </Router>
    </AccountProvider>
  );
}

export default App;
