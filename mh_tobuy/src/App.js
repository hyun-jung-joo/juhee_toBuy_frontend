import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Prevideopage from "./pages/prevideopage";
import Login from "./pages/login";
import Join from "./pages/join";
import Category from "./pages/categorys/category";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
