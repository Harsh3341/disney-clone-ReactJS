import Login from "./Login";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App;