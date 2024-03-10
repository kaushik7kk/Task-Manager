import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;
