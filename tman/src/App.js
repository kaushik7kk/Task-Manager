import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/views/Guest/HomePage";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/tasks" Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
