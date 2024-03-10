import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={HomePage} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <Topbar />
    //   <Sidebar />
    //   <Dashboard />
    // </>
  );
}

export default App;
