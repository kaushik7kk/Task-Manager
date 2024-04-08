import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/views/Guest/HomePage";
import TaskPage from "./pages/views/Guest/TaskPage";
import CategoryPage from "./pages/views/Guest/CategoryPage";
import GroupPage from "./pages/views/Guest/GroupPage";
import Category from "./pages/Category";

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
      </Routes>
    </Router>
  );
}

export default App;
