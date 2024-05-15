import "./App.css";
import UserForm from "./pages/UserForm";
import "./index.css";
import { Route, Routes } from "react-router";
import ViewForm from "./pages/ViewForm";

function App() {
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
