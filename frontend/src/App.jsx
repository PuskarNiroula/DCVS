import './App.css';
import RegisterFrom from "./pages/Register/RegisterFrom.jsx";
import LoginForm from "./pages/Login/LoginForm.jsx";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import UserIndex from "./pages/UserManagement/index.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterFrom/>}/>

        {/*    pages with sidebar*/}
            <Route element={<MainLayout/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/users" element={<UserIndex/>}/>
            </Route>
        </Routes>

    </Router>
  );
}

export default App;
