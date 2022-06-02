import Login from "./Login";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home"
import Detail from "./Detail";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </div>
    )
}

export default App;