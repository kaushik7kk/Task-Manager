import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/views/Guest/HomePage";
import TaskPage from "./pages/views/Guest/TaskPage";
import CategoryPage from "./pages/views/Guest/CategoryPage";
import GroupPage from "./pages/views/Guest/GroupPage";
import Category from "./pages/Category";
import LoginPage from "./pages/views/Account/LoginPage";
import SignupPage from "./pages/views/Account/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/tasks" Component={TaskPage} />
        <Route path="/categories" Component={CategoryPage} />
        <Route path="/groups" Component={GroupPage} />
        <Route path="/category" Component={Category} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
      </Routes>
    </Router>
  );
}

export default App;
