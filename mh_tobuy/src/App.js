import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/Firstpage/firstpage";
import Prevideopage from "./pages/Firstpage/prevideopage";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/Signup";
import Signupcard from "./pages/Signup/Signupcard";
import Signup2 from "./pages/Signup/Signup2";
import Category from "./pages/categorys/category";
import Findid from "./pages/Login/findid";
import Findpw from "./pages/Login/findpw";
import Coachmark from "./pages/Coachmark";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Prevideopage" element={<Prevideopage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signupcard" element={<Signupcard />} />
          <Route path="/Signup2" element={<Signup2 />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Findid" element={<Findid />} />
          <Route path="/Findpw" element={<Findpw />} />
          <Route path="/Coachmark" element={<Coachmark />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
