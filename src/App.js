import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Error from "./Components/Error";
import Profile from "./Components/Profile";
function App() {
    return (
        <div className="App">
            <Link to={"/user"}>
                <p>USERS</p>
            </Link>
            <Link to={"/"}>
                <p>Home</p>
            </Link>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<Users />} />
                <Route path="/user/profile/:id" element={<Profile />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
