import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Prevideopage from "./pages/prevideopage";
import Login from "./pages/login";
import Join from "./pages/join";
import Category from "./pages/categorys/category";
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
          <Route path="/Join" element={<Join />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Daily" element={<Daily />} />
          <Route path="/HomeDeco" element={<HomeDeco />} />
          <Route path="/Health" element={<Health />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
