import "./App.css";
import UserForm from "./pages/UserForm";
import "./index.css";
import { Route, Routes } from "react-router";
import ViewForm from "./pages/ViewForm";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "https://userinfo-gwex.onrender.com";

  return (
    <div>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/viewform" element={<ViewForm />} />
      </Routes>
    </div>
  );
}

export default App;
