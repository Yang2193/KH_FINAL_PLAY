import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage";
import PlayPage from "./pages/PlayPage";

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="Info" element={<PlayPage/>}/>
      </Routes>
   </Router>
  );
}

export default App;
