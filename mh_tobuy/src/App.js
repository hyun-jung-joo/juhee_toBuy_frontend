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

import Fashion from "./pages/categorys/Fashion";
import Beauty from "./pages/categorys/Beauty";
import Food from "./pages/categorys/Food";
import Daily from "./pages/categorys/Daily";
import HomeDeco from "./pages/categorys/HomeDeco";
import Health from "./pages/categorys/Health";
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
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Daily" element={<Daily />} />
          <Route path="/Homedeco" element={<Homedeco />} />
          <Route path="/Health" element={<Health />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
