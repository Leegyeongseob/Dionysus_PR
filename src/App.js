import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./global/GlobalStyles";
import UserStore from "./global/UserStore";
import LoginPage from "./pages/loginpage/LoginPage";
import SignupPage from "./pages/loginpage/SighupPage";
import FindIDPage from "./pages/loginpage/FindIDPage";
import FindPWPage from "./pages/loginpage/FindPWPage";
import Recommend from "./pages/popularrecommendpage/Recommend";
import IncludeFooter from "./global/IncludeFooter";
import NotIncludeFooter from "./global/NotIncludeFooter";
import MainPage from "./pages/mainpage/MainPage";
import Beer from "./pages/beerpage/Beer";
import Traditional from "./pages/traditionalpage/Traditional";
import Wine from "./pages/winepage/Wine";
import Wiskey from "./pages/wiskeypage/Wiskey";
import MemInfo from "./pages/mypage/MemInfo";
import Mypage from "./pages/mypage/Mypage";
import SignOut from "./pages/mypage/SignOut";
import axios from "axios";
function App() {
  return (
    <>
      {/* 전역스타일 적용 */}
      <GlobalStyles />
      {/* UserStore에서 ContextAPI 전역 관리 */}
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* Footer가 없는 페이지 중첩라우팅 */}
            <Route element={<NotIncludeFooter />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/findid" element={<FindIDPage />} />
              <Route path="/findpw" element={<FindPWPage />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/meminfo" element={<MemInfo />} />
              <Route path="/signout" element={<SignOut />} />
            </Route>
            {/* Footer가 필요한 페이지 중첩라우팅 */}
            <Route element={<IncludeFooter />}>
              <Route path="/recommend" element={<Recommend />} />
              <Route path="/beer" element={<Beer />} />
              <Route path="/traditional" element={<Traditional />} />
              <Route path="/wine" element={<Wine />} />
              <Route path="/wiskey" element={<Wiskey />} />
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
