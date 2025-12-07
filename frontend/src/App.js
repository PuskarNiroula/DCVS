import './App.css';
import RegisterFrom from "./pages/Register/RegisterFrom";
import LoginForm from "./pages/Login/LoginForm";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterFrom/>}/>

        {/*    pages with sidebar*/}
            <Route element={<MainLayout/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>

    </Router>
  );
}

export default App;
