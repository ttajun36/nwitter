import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = () => {
    // isLoggedIn : 로그인이 되어 있는지 확인하는 변수 (boolean)
    // setIsLoggedIn : isLoggedIn의 값을 변경하는 함수
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // 로그인 되어있으면 Home을, 그렇지 않다면 로그인 페이지인 Auth 컴포넌트를 렌더링하자
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route path="/" element={<Home />} />
                )   
                 : (
                    <Route path="/" element={<Auth />} />
                )}
            </Routes>
        </Router>
    )
};

export default AppRouter;